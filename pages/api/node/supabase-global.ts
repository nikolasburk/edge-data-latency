import { createClient } from "@supabase/supabase-js";
import type { NextApiRequest, NextApiResponse } from "next";

const supabase = createClient<Database>(
  process.env.SUPABASE_DATABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const start = Date.now();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`url: `, req.url);

  const { count } = req.query

  console.log(`query count: `, count);

  const time = Date.now();

  let data = null;
  for (let i = 0; i < toNumber(count); i++) {
    const response = await supabase
      .from("employees")
      .select("emp_no,first_name,last_name")
      .limit(10);
    data = response.data;
  }

  return res.status(200).json(
    {
      data,
      queryDuration: Date.now() - time,
      invocationIsCold: start === time,
    }
  );
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
