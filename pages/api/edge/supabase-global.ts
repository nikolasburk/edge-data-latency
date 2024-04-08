import { createClient } from "@supabase/supabase-js";
import { NextRequest as Request, NextResponse as Response } from "next/server";

export const config = {
  runtime: "edge",
};

// 1. initialize `start` time with Date.now()
const start = Date.now();

export default async function api(req: Request) {
  console.log(`url: `, req.url);

  // 2. retrieve `count` from URL
  const url = process.env.NODE_ENV !== "production" ? new URL(req.url, "http://localhost:3000") : new URL(req.url);
  const count = toNumber(new URL(url).searchParams.get("count"));

  // 3. initialize `time` time with Date.now()
  const time = Date.now();

  // 4. initialize DB client
  const supabase = createClient<Database>(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

  // 5. run queries `count` times
  let data = null;
  for (let i = 0; i < count; i++) {
    const response = await supabase.from("employees").select("emp_no,first_name,last_name").limit(10);
    data = response.data;
  }

  // 6. return response
  return Response.json(
    {
      data,
      queryDuration: Date.now() - time,
      invocationIsCold: start === time,
      // invocationRegion: (req.headers.get("x-vercel-id") ?? "").split(":")[1] || null,
    },
    {
      headers: {
        "x-edge-is-cold": start === time ? "1" : "0",
      },
    }
  );
}

// convert a query parameter to a number
// also apply a min and a max
function toNumber(queryParam: string | null, min = 1, max = 5) {
  const num = Number(queryParam);
  return Number.isNaN(num) ? null : Math.min(Math.max(num, min), max);
}

// Auto generated types: https://supabase.com/docs/guides/api/generating-types
interface Database {
  public: {
    Tables: {
      employees: {
        Row: {
          emp_no: number;
          first_name: string | null;
          inserted_at: string;
          last_name: string | null;
          updated_at: string;
        };
        Insert: {
          emp_no?: number;
          first_name?: string | null;
          inserted_at?: string;
          last_name?: string | null;
          updated_at?: string;
        };
        Update: {
          emp_no?: number;
          first_name?: string | null;
          inserted_at?: string;
          last_name?: string | null;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
