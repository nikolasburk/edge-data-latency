const testConfig = {
  dataService: {
    edge: [
      // neon
      "prisma-neon-global",
      "neon-global",

      // planetscale
      "prisma-planetscale-global",
      "planetscale-global",

      // supabase
      "supabase-global"
    ],
    node: [
      // neon
      "prisma-neon-global",
      "prisma-neon-tcp-global",
      "neon-global",

      // planetscale
      "prisma-planetscale-global",
      "planetscale-global",

      // supabase
      "prisma-supabase-global",
      "supabase-global"
    ]
    // edge: {
    //   neon: {
    //     "with-prisma-serverless": "prisma-neon-global",
    //     "without-prisma": "neon-global",
    //   },
    //   planetscale: {
    //     "with-prisma-serverless": "prisma-planetscale-global",
    //     "without-prisma": "planetscale-global",
    //   },
    //   supabase: {
    //     "without-prisma": "supabase-global",
    //   },
    // },
    // node: {
    //   neon: {
    //     "with-prisma-serverless": "prisma-neon-global",
    //     "with-prisma-tcp": "prisma-neon-tcp-global",
    //     "without-prisma": "neon-global",
    //   },
    //   planetscale: {
    //     "with-prisma-serverless": "prisma-planetscale-global",
    //     "without-prisma": "planetscale-global",
    //   },
    //   supabase: {
    //     "without-prisma-tcp": "prisma-supabase-global",
    //     "without-prisma": "supabase-global",
    //   },
    // },
  },
  queryCount: [1, 2, 5],
  runtime: ["Edge", "Node"]
};
