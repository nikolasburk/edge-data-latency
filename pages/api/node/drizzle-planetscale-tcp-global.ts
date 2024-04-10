import type { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import { mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

export const employees = mysqlTable("employees", {
  id: serial("emp_no").primaryKey(),
  first_name: varchar("first_name", { length: 256 }),
  last_name: varchar("last_name", { length: 256 }),
});

// 1. initialize `start` time with Date.now()
const start = Date.now();

// 2. initialize DB client
console.log(`process.env.PLANETSCALE_DATABASE_URL: `, process.env.PLANETSCALE_DATABASE_URL);
console.log(`init drizzle`);
const poolConnection = mysql.createPool({
  uri: process.env.PLANETSCALE_DATABASE_URL,
  ssl: {
    rejectUnauthorized: true
  }
});
const db = drizzle(poolConnection);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`url: `, req.url);

  // 3. retrieve `count` from URL
  const { count } = req.query;
  console.log(`query count: `, count);

  // 4. initialize `time` time with Date.now()
  const time = Date.now();

  // 5. run queries `count` times
  let data = null;
  for (let i = 0; i < toNumber(count); i++) {
    data = await db.select().from(employees).limit(10);
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
