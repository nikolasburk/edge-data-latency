
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.12.0
 * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
 */
Prisma.prismaVersion = {
  client: "5.12.0",
  engine: "473ed3124229e22d881cb7addf559799debae1ab"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.BenchmarkRunScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  dataService: 'dataService',
  runtime: 'runtime',
  location: 'location',
  queryCount: 'queryCount',
  route: 'route',
  queryDuration: 'queryDuration'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.DataService = exports.$Enums.DataService = {
  Neon: 'Neon',
  PrismaNeon: 'PrismaNeon',
  PrismaNeonTCP: 'PrismaNeonTCP',
  DrizzleNeon: 'DrizzleNeon',
  DrizzleNeonTCP: 'DrizzleNeonTCP',
  Supabase: 'Supabase',
  PrismaSupabaseTCP: 'PrismaSupabaseTCP',
  PlanetScale: 'PlanetScale',
  PrismaPlanetScale: 'PrismaPlanetScale',
  PrismaPlanetScaleTCP: 'PrismaPlanetScaleTCP'
};

exports.Runtime = exports.$Enums.Runtime = {
  Edge: 'Edge',
  Node: 'Node'
};

exports.Location = exports.$Enums.Location = {
  Regional: 'Regional',
  Global: 'Global'
};

exports.QueryCount = exports.$Enums.QueryCount = {
  One: 'One',
  Two: 'Two',
  Five: 'Five'
};

exports.Prisma.ModelName = {
  BenchmarkRun: 'BenchmarkRun'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/nikolasburk/Desktop/edge-data-latency/prisma-results/prisma-client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "rhel-openssl-3.0.x"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "..",
  "clientVersion": "5.12.0",
  "engineVersion": "473ed3124229e22d881cb7addf559799debae1ab",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "RESULTS_DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider      = \"prisma-client-js\"\n  output        = \"./prisma-client\"\n  binaryTargets = [\"native\", \"rhel-openssl-3.0.x\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"RESULTS_DATABASE_URL\")\n}\n\nenum DataService {\n  Neon\n  PrismaNeon\n  PrismaNeonTCP\n  DrizzleNeon\n  DrizzleNeonTCP\n  Supabase\n  PrismaSupabaseTCP\n  PlanetScale\n  PrismaPlanetScale\n  PrismaPlanetScaleTCP\n}\n\nenum Runtime {\n  Edge\n  Node\n}\n\nenum QueryCount {\n  One\n  Two\n  Five\n}\n\nenum Location {\n  Regional\n  Global\n}\n\nmodel BenchmarkRun {\n  id        Int      @id @default(autoincrement())\n  createdAt DateTime @default(now())\n\n  // Benchmark run params\n  dataService DataService\n  runtime     Runtime\n  location    Location\n  queryCount  QueryCount\n\n  // Meta\n  route String\n\n  // Result\n  queryDuration Int\n}\n",
  "inlineSchemaHash": "df9becac9cf0ddbdf2421665d9451d019764c74a896713b9ed3beae72b5c1349",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma-results/prisma-client",
    "prisma-client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"BenchmarkRun\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataService\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DataService\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"runtime\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Runtime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Location\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"queryCount\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QueryCount\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"route\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"queryDuration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"DataService\":{\"values\":[{\"name\":\"Neon\",\"dbName\":null},{\"name\":\"PrismaNeon\",\"dbName\":null},{\"name\":\"PrismaNeonTCP\",\"dbName\":null},{\"name\":\"DrizzleNeon\",\"dbName\":null},{\"name\":\"DrizzleNeonTCP\",\"dbName\":null},{\"name\":\"Supabase\",\"dbName\":null},{\"name\":\"PrismaSupabaseTCP\",\"dbName\":null},{\"name\":\"PlanetScale\",\"dbName\":null},{\"name\":\"PrismaPlanetScale\",\"dbName\":null},{\"name\":\"PrismaPlanetScaleTCP\",\"dbName\":null}],\"dbName\":null},\"Runtime\":{\"values\":[{\"name\":\"Edge\",\"dbName\":null},{\"name\":\"Node\",\"dbName\":null}],\"dbName\":null},\"QueryCount\":{\"values\":[{\"name\":\"One\",\"dbName\":null},{\"name\":\"Two\",\"dbName\":null},{\"name\":\"Five\",\"dbName\":null}],\"dbName\":null},\"Location\":{\"values\":[{\"name\":\"Regional\",\"dbName\":null},{\"name\":\"Global\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin.dylib.node");
path.join(process.cwd(), "prisma-results/prisma-client/libquery_engine-darwin.dylib.node")

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-rhel-openssl-3.0.x.so.node");
path.join(process.cwd(), "prisma-results/prisma-client/libquery_engine-rhel-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma-results/prisma-client/schema.prisma")
