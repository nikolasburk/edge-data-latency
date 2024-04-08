import { createClient } from "@supabase/supabase-js";
import type { NextApiRequest, NextApiResponse } from "next";

// 1. initialize `start` time with Date.now()
const start = Date.now();

// 2. initialize DB client
console.log(`process.env.SUPABASE_URL: `, process.env.SUPABASE_URL);
console.log(`init supabase js client`);
const supabase = createClient<Database>(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`url: `, req.url);

  // 3. retrieve `count` from URL
  const { count } = req.query;
  console.log(`query count: `, count);

  // 4. initialize `time` time with Date.now()
  const time = Date.now();

  // 5. run queries `count` times
  console.log(`run queries: `, supabase)
  let data = null;
  for (let i = 0; i < toNumber(count); i++) {
    const response = await supabase.from("employees").select("emp_no,first_name,last_name").limit(10);
    data = response.data;
  }

  // 6. return response
  return res.status(200).json({
    data,
    queryDuration: Date.now() - time,
    invocationIsCold: start === time,
  });
}

// convert a query parameter to a number, applying a min and max, defaulting to 1
function toNumber(queryParam: string | string[] | null, min = 1, max = 5) {
  const num = Number(queryParam);
  return Number.isNaN(num) ? 1 : Math.min(Math.max(num, min), max);
}

// Auto generated types: https://supabase.com/docs/guides/api/generating-types
interface Database {
  public: {
    Tables: {
      employees: {
        Row: {
          emp_no: number;
          first_name: string | null;
          // inserted_at: string;
          last_name: string | null;
          // updated_at: string;
        };
        Insert: {
          emp_no?: number;
          first_name?: string | null;
          // inserted_at?: string;
          last_name?: string | null;
          // updated_at?: string;
        };
        Update: {
          emp_no?: number;
          first_name?: string | null;
          // inserted_at?: string;
          last_name?: string | null;
          // updated_at?: string;
        };
      };
    };
    // Views: {
    //   [_ in never]: never;
    // };
    // Functions: {
    //   [_ in never]: never;
    // };
    // Enums: {
    //   [_ in never]: never;
    // };
  };
}
