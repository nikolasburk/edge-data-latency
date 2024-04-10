
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BenchmarkRun
 * 
 */
export type BenchmarkRun = $Result.DefaultSelection<Prisma.$BenchmarkRunPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DataService: {
  Neon: 'Neon',
  PrismaNeon: 'PrismaNeon',
  PrismaNeonTCP: 'PrismaNeonTCP',
  DrizzleNeon: 'DrizzleNeon',
  Supabase: 'Supabase',
  PrismaSupabaseTCP: 'PrismaSupabaseTCP',
  PlanetScale: 'PlanetScale',
  PrismaPlanetScale: 'PrismaPlanetScale',
  PrismaPlanetScaleTCP: 'PrismaPlanetScaleTCP'
};

export type DataService = (typeof DataService)[keyof typeof DataService]


export const Runtime: {
  Edge: 'Edge',
  Node: 'Node'
};

export type Runtime = (typeof Runtime)[keyof typeof Runtime]


export const Location: {
  Regional: 'Regional',
  Global: 'Global'
};

export type Location = (typeof Location)[keyof typeof Location]


export const QueryCount: {
  One: 'One',
  Two: 'Two',
  Five: 'Five'
};

export type QueryCount = (typeof QueryCount)[keyof typeof QueryCount]

}

export type DataService = $Enums.DataService

export const DataService: typeof $Enums.DataService

export type Runtime = $Enums.Runtime

export const Runtime: typeof $Enums.Runtime

export type Location = $Enums.Location

export const Location: typeof $Enums.Location

export type QueryCount = $Enums.QueryCount

export const QueryCount: typeof $Enums.QueryCount

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more BenchmarkRuns
 * const benchmarkRuns = await prisma.benchmarkRun.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more BenchmarkRuns
   * const benchmarkRuns = await prisma.benchmarkRun.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.benchmarkRun`: Exposes CRUD operations for the **BenchmarkRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BenchmarkRuns
    * const benchmarkRuns = await prisma.benchmarkRun.findMany()
    * ```
    */
  get benchmarkRun(): Prisma.BenchmarkRunDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.12.0
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BenchmarkRun: 'BenchmarkRun'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'benchmarkRun'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      BenchmarkRun: {
        payload: Prisma.$BenchmarkRunPayload<ExtArgs>
        fields: Prisma.BenchmarkRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BenchmarkRunFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BenchmarkRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BenchmarkRunFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BenchmarkRunPayload>
          }
          findFirst: {
            args: Prisma.BenchmarkRunFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BenchmarkRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BenchmarkRunFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BenchmarkRunPayload>
          }
          findMany: {
            args: Prisma.BenchmarkRunFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BenchmarkRunPayload>[]
          }
          create: {
            args: Prisma.BenchmarkRunCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BenchmarkRunPayload>
          }
          createMany: {
            args: Prisma.BenchmarkRunCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BenchmarkRunDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BenchmarkRunPayload>
          }
          update: {
            args: Prisma.BenchmarkRunUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BenchmarkRunPayload>
          }
          deleteMany: {
            args: Prisma.BenchmarkRunDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BenchmarkRunUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BenchmarkRunUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BenchmarkRunPayload>
          }
          aggregate: {
            args: Prisma.BenchmarkRunAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBenchmarkRun>
          }
          groupBy: {
            args: Prisma.BenchmarkRunGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BenchmarkRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.BenchmarkRunCountArgs<ExtArgs>,
            result: $Utils.Optional<BenchmarkRunCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model BenchmarkRun
   */

  export type AggregateBenchmarkRun = {
    _count: BenchmarkRunCountAggregateOutputType | null
    _avg: BenchmarkRunAvgAggregateOutputType | null
    _sum: BenchmarkRunSumAggregateOutputType | null
    _min: BenchmarkRunMinAggregateOutputType | null
    _max: BenchmarkRunMaxAggregateOutputType | null
  }

  export type BenchmarkRunAvgAggregateOutputType = {
    id: number | null
    queryDuration: number | null
  }

  export type BenchmarkRunSumAggregateOutputType = {
    id: number | null
    queryDuration: number | null
  }

  export type BenchmarkRunMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    dataService: $Enums.DataService | null
    runtime: $Enums.Runtime | null
    location: $Enums.Location | null
    queryCount: $Enums.QueryCount | null
    route: string | null
    queryDuration: number | null
  }

  export type BenchmarkRunMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    dataService: $Enums.DataService | null
    runtime: $Enums.Runtime | null
    location: $Enums.Location | null
    queryCount: $Enums.QueryCount | null
    route: string | null
    queryDuration: number | null
  }

  export type BenchmarkRunCountAggregateOutputType = {
    id: number
    createdAt: number
    dataService: number
    runtime: number
    location: number
    queryCount: number
    route: number
    queryDuration: number
    _all: number
  }


  export type BenchmarkRunAvgAggregateInputType = {
    id?: true
    queryDuration?: true
  }

  export type BenchmarkRunSumAggregateInputType = {
    id?: true
    queryDuration?: true
  }

  export type BenchmarkRunMinAggregateInputType = {
    id?: true
    createdAt?: true
    dataService?: true
    runtime?: true
    location?: true
    queryCount?: true
    route?: true
    queryDuration?: true
  }

  export type BenchmarkRunMaxAggregateInputType = {
    id?: true
    createdAt?: true
    dataService?: true
    runtime?: true
    location?: true
    queryCount?: true
    route?: true
    queryDuration?: true
  }

  export type BenchmarkRunCountAggregateInputType = {
    id?: true
    createdAt?: true
    dataService?: true
    runtime?: true
    location?: true
    queryCount?: true
    route?: true
    queryDuration?: true
    _all?: true
  }

  export type BenchmarkRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BenchmarkRun to aggregate.
     */
    where?: BenchmarkRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BenchmarkRuns to fetch.
     */
    orderBy?: BenchmarkRunOrderByWithRelationInput | BenchmarkRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BenchmarkRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BenchmarkRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BenchmarkRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BenchmarkRuns
    **/
    _count?: true | BenchmarkRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BenchmarkRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BenchmarkRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BenchmarkRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BenchmarkRunMaxAggregateInputType
  }

  export type GetBenchmarkRunAggregateType<T extends BenchmarkRunAggregateArgs> = {
        [P in keyof T & keyof AggregateBenchmarkRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBenchmarkRun[P]>
      : GetScalarType<T[P], AggregateBenchmarkRun[P]>
  }




  export type BenchmarkRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BenchmarkRunWhereInput
    orderBy?: BenchmarkRunOrderByWithAggregationInput | BenchmarkRunOrderByWithAggregationInput[]
    by: BenchmarkRunScalarFieldEnum[] | BenchmarkRunScalarFieldEnum
    having?: BenchmarkRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BenchmarkRunCountAggregateInputType | true
    _avg?: BenchmarkRunAvgAggregateInputType
    _sum?: BenchmarkRunSumAggregateInputType
    _min?: BenchmarkRunMinAggregateInputType
    _max?: BenchmarkRunMaxAggregateInputType
  }

  export type BenchmarkRunGroupByOutputType = {
    id: number
    createdAt: Date
    dataService: $Enums.DataService
    runtime: $Enums.Runtime
    location: $Enums.Location
    queryCount: $Enums.QueryCount
    route: string
    queryDuration: number
    _count: BenchmarkRunCountAggregateOutputType | null
    _avg: BenchmarkRunAvgAggregateOutputType | null
    _sum: BenchmarkRunSumAggregateOutputType | null
    _min: BenchmarkRunMinAggregateOutputType | null
    _max: BenchmarkRunMaxAggregateOutputType | null
  }

  type GetBenchmarkRunGroupByPayload<T extends BenchmarkRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BenchmarkRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BenchmarkRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BenchmarkRunGroupByOutputType[P]>
            : GetScalarType<T[P], BenchmarkRunGroupByOutputType[P]>
        }
      >
    >


  export type BenchmarkRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    dataService?: boolean
    runtime?: boolean
    location?: boolean
    queryCount?: boolean
    route?: boolean
    queryDuration?: boolean
  }, ExtArgs["result"]["benchmarkRun"]>

  export type BenchmarkRunSelectScalar = {
    id?: boolean
    createdAt?: boolean
    dataService?: boolean
    runtime?: boolean
    location?: boolean
    queryCount?: boolean
    route?: boolean
    queryDuration?: boolean
  }


  export type $BenchmarkRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BenchmarkRun"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      dataService: $Enums.DataService
      runtime: $Enums.Runtime
      location: $Enums.Location
      queryCount: $Enums.QueryCount
      route: string
      queryDuration: number
    }, ExtArgs["result"]["benchmarkRun"]>
    composites: {}
  }


  type BenchmarkRunGetPayload<S extends boolean | null | undefined | BenchmarkRunDefaultArgs> = $Result.GetResult<Prisma.$BenchmarkRunPayload, S>

  type BenchmarkRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BenchmarkRunFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BenchmarkRunCountAggregateInputType | true
    }

  export interface BenchmarkRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BenchmarkRun'], meta: { name: 'BenchmarkRun' } }
    /**
     * Find zero or one BenchmarkRun that matches the filter.
     * @param {BenchmarkRunFindUniqueArgs} args - Arguments to find a BenchmarkRun
     * @example
     * // Get one BenchmarkRun
     * const benchmarkRun = await prisma.benchmarkRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BenchmarkRunFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BenchmarkRunFindUniqueArgs<ExtArgs>>
    ): Prisma__BenchmarkRunClient<$Result.GetResult<Prisma.$BenchmarkRunPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BenchmarkRun that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BenchmarkRunFindUniqueOrThrowArgs} args - Arguments to find a BenchmarkRun
     * @example
     * // Get one BenchmarkRun
     * const benchmarkRun = await prisma.benchmarkRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BenchmarkRunFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BenchmarkRunFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BenchmarkRunClient<$Result.GetResult<Prisma.$BenchmarkRunPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BenchmarkRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenchmarkRunFindFirstArgs} args - Arguments to find a BenchmarkRun
     * @example
     * // Get one BenchmarkRun
     * const benchmarkRun = await prisma.benchmarkRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BenchmarkRunFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BenchmarkRunFindFirstArgs<ExtArgs>>
    ): Prisma__BenchmarkRunClient<$Result.GetResult<Prisma.$BenchmarkRunPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BenchmarkRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenchmarkRunFindFirstOrThrowArgs} args - Arguments to find a BenchmarkRun
     * @example
     * // Get one BenchmarkRun
     * const benchmarkRun = await prisma.benchmarkRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BenchmarkRunFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BenchmarkRunFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BenchmarkRunClient<$Result.GetResult<Prisma.$BenchmarkRunPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BenchmarkRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenchmarkRunFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BenchmarkRuns
     * const benchmarkRuns = await prisma.benchmarkRun.findMany()
     * 
     * // Get first 10 BenchmarkRuns
     * const benchmarkRuns = await prisma.benchmarkRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const benchmarkRunWithIdOnly = await prisma.benchmarkRun.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BenchmarkRunFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BenchmarkRunFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenchmarkRunPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BenchmarkRun.
     * @param {BenchmarkRunCreateArgs} args - Arguments to create a BenchmarkRun.
     * @example
     * // Create one BenchmarkRun
     * const BenchmarkRun = await prisma.benchmarkRun.create({
     *   data: {
     *     // ... data to create a BenchmarkRun
     *   }
     * })
     * 
    **/
    create<T extends BenchmarkRunCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BenchmarkRunCreateArgs<ExtArgs>>
    ): Prisma__BenchmarkRunClient<$Result.GetResult<Prisma.$BenchmarkRunPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BenchmarkRuns.
     *     @param {BenchmarkRunCreateManyArgs} args - Arguments to create many BenchmarkRuns.
     *     @example
     *     // Create many BenchmarkRuns
     *     const benchmarkRun = await prisma.benchmarkRun.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BenchmarkRunCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BenchmarkRunCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BenchmarkRun.
     * @param {BenchmarkRunDeleteArgs} args - Arguments to delete one BenchmarkRun.
     * @example
     * // Delete one BenchmarkRun
     * const BenchmarkRun = await prisma.benchmarkRun.delete({
     *   where: {
     *     // ... filter to delete one BenchmarkRun
     *   }
     * })
     * 
    **/
    delete<T extends BenchmarkRunDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BenchmarkRunDeleteArgs<ExtArgs>>
    ): Prisma__BenchmarkRunClient<$Result.GetResult<Prisma.$BenchmarkRunPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BenchmarkRun.
     * @param {BenchmarkRunUpdateArgs} args - Arguments to update one BenchmarkRun.
     * @example
     * // Update one BenchmarkRun
     * const benchmarkRun = await prisma.benchmarkRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BenchmarkRunUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BenchmarkRunUpdateArgs<ExtArgs>>
    ): Prisma__BenchmarkRunClient<$Result.GetResult<Prisma.$BenchmarkRunPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BenchmarkRuns.
     * @param {BenchmarkRunDeleteManyArgs} args - Arguments to filter BenchmarkRuns to delete.
     * @example
     * // Delete a few BenchmarkRuns
     * const { count } = await prisma.benchmarkRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BenchmarkRunDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BenchmarkRunDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BenchmarkRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenchmarkRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BenchmarkRuns
     * const benchmarkRun = await prisma.benchmarkRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BenchmarkRunUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BenchmarkRunUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BenchmarkRun.
     * @param {BenchmarkRunUpsertArgs} args - Arguments to update or create a BenchmarkRun.
     * @example
     * // Update or create a BenchmarkRun
     * const benchmarkRun = await prisma.benchmarkRun.upsert({
     *   create: {
     *     // ... data to create a BenchmarkRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BenchmarkRun we want to update
     *   }
     * })
    **/
    upsert<T extends BenchmarkRunUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BenchmarkRunUpsertArgs<ExtArgs>>
    ): Prisma__BenchmarkRunClient<$Result.GetResult<Prisma.$BenchmarkRunPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BenchmarkRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenchmarkRunCountArgs} args - Arguments to filter BenchmarkRuns to count.
     * @example
     * // Count the number of BenchmarkRuns
     * const count = await prisma.benchmarkRun.count({
     *   where: {
     *     // ... the filter for the BenchmarkRuns we want to count
     *   }
     * })
    **/
    count<T extends BenchmarkRunCountArgs>(
      args?: Subset<T, BenchmarkRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BenchmarkRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BenchmarkRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenchmarkRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BenchmarkRunAggregateArgs>(args: Subset<T, BenchmarkRunAggregateArgs>): Prisma.PrismaPromise<GetBenchmarkRunAggregateType<T>>

    /**
     * Group by BenchmarkRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenchmarkRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BenchmarkRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BenchmarkRunGroupByArgs['orderBy'] }
        : { orderBy?: BenchmarkRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BenchmarkRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBenchmarkRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BenchmarkRun model
   */
  readonly fields: BenchmarkRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BenchmarkRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BenchmarkRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BenchmarkRun model
   */ 
  interface BenchmarkRunFieldRefs {
    readonly id: FieldRef<"BenchmarkRun", 'Int'>
    readonly createdAt: FieldRef<"BenchmarkRun", 'DateTime'>
    readonly dataService: FieldRef<"BenchmarkRun", 'DataService'>
    readonly runtime: FieldRef<"BenchmarkRun", 'Runtime'>
    readonly location: FieldRef<"BenchmarkRun", 'Location'>
    readonly queryCount: FieldRef<"BenchmarkRun", 'QueryCount'>
    readonly route: FieldRef<"BenchmarkRun", 'String'>
    readonly queryDuration: FieldRef<"BenchmarkRun", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * BenchmarkRun findUnique
   */
  export type BenchmarkRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenchmarkRun
     */
    select?: BenchmarkRunSelect<ExtArgs> | null
    /**
     * Filter, which BenchmarkRun to fetch.
     */
    where: BenchmarkRunWhereUniqueInput
  }


  /**
   * BenchmarkRun findUniqueOrThrow
   */
  export type BenchmarkRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenchmarkRun
     */
    select?: BenchmarkRunSelect<ExtArgs> | null
    /**
     * Filter, which BenchmarkRun to fetch.
     */
    where: BenchmarkRunWhereUniqueInput
  }


  /**
   * BenchmarkRun findFirst
   */
  export type BenchmarkRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenchmarkRun
     */
    select?: BenchmarkRunSelect<ExtArgs> | null
    /**
     * Filter, which BenchmarkRun to fetch.
     */
    where?: BenchmarkRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BenchmarkRuns to fetch.
     */
    orderBy?: BenchmarkRunOrderByWithRelationInput | BenchmarkRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BenchmarkRuns.
     */
    cursor?: BenchmarkRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BenchmarkRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BenchmarkRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BenchmarkRuns.
     */
    distinct?: BenchmarkRunScalarFieldEnum | BenchmarkRunScalarFieldEnum[]
  }


  /**
   * BenchmarkRun findFirstOrThrow
   */
  export type BenchmarkRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenchmarkRun
     */
    select?: BenchmarkRunSelect<ExtArgs> | null
    /**
     * Filter, which BenchmarkRun to fetch.
     */
    where?: BenchmarkRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BenchmarkRuns to fetch.
     */
    orderBy?: BenchmarkRunOrderByWithRelationInput | BenchmarkRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BenchmarkRuns.
     */
    cursor?: BenchmarkRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BenchmarkRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BenchmarkRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BenchmarkRuns.
     */
    distinct?: BenchmarkRunScalarFieldEnum | BenchmarkRunScalarFieldEnum[]
  }


  /**
   * BenchmarkRun findMany
   */
  export type BenchmarkRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenchmarkRun
     */
    select?: BenchmarkRunSelect<ExtArgs> | null
    /**
     * Filter, which BenchmarkRuns to fetch.
     */
    where?: BenchmarkRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BenchmarkRuns to fetch.
     */
    orderBy?: BenchmarkRunOrderByWithRelationInput | BenchmarkRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BenchmarkRuns.
     */
    cursor?: BenchmarkRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BenchmarkRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BenchmarkRuns.
     */
    skip?: number
    distinct?: BenchmarkRunScalarFieldEnum | BenchmarkRunScalarFieldEnum[]
  }


  /**
   * BenchmarkRun create
   */
  export type BenchmarkRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenchmarkRun
     */
    select?: BenchmarkRunSelect<ExtArgs> | null
    /**
     * The data needed to create a BenchmarkRun.
     */
    data: XOR<BenchmarkRunCreateInput, BenchmarkRunUncheckedCreateInput>
  }


  /**
   * BenchmarkRun createMany
   */
  export type BenchmarkRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BenchmarkRuns.
     */
    data: BenchmarkRunCreateManyInput | BenchmarkRunCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BenchmarkRun update
   */
  export type BenchmarkRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenchmarkRun
     */
    select?: BenchmarkRunSelect<ExtArgs> | null
    /**
     * The data needed to update a BenchmarkRun.
     */
    data: XOR<BenchmarkRunUpdateInput, BenchmarkRunUncheckedUpdateInput>
    /**
     * Choose, which BenchmarkRun to update.
     */
    where: BenchmarkRunWhereUniqueInput
  }


  /**
   * BenchmarkRun updateMany
   */
  export type BenchmarkRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BenchmarkRuns.
     */
    data: XOR<BenchmarkRunUpdateManyMutationInput, BenchmarkRunUncheckedUpdateManyInput>
    /**
     * Filter which BenchmarkRuns to update
     */
    where?: BenchmarkRunWhereInput
  }


  /**
   * BenchmarkRun upsert
   */
  export type BenchmarkRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenchmarkRun
     */
    select?: BenchmarkRunSelect<ExtArgs> | null
    /**
     * The filter to search for the BenchmarkRun to update in case it exists.
     */
    where: BenchmarkRunWhereUniqueInput
    /**
     * In case the BenchmarkRun found by the `where` argument doesn't exist, create a new BenchmarkRun with this data.
     */
    create: XOR<BenchmarkRunCreateInput, BenchmarkRunUncheckedCreateInput>
    /**
     * In case the BenchmarkRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BenchmarkRunUpdateInput, BenchmarkRunUncheckedUpdateInput>
  }


  /**
   * BenchmarkRun delete
   */
  export type BenchmarkRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenchmarkRun
     */
    select?: BenchmarkRunSelect<ExtArgs> | null
    /**
     * Filter which BenchmarkRun to delete.
     */
    where: BenchmarkRunWhereUniqueInput
  }


  /**
   * BenchmarkRun deleteMany
   */
  export type BenchmarkRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BenchmarkRuns to delete
     */
    where?: BenchmarkRunWhereInput
  }


  /**
   * BenchmarkRun without action
   */
  export type BenchmarkRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenchmarkRun
     */
    select?: BenchmarkRunSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BenchmarkRunScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    dataService: 'dataService',
    runtime: 'runtime',
    location: 'location',
    queryCount: 'queryCount',
    route: 'route',
    queryDuration: 'queryDuration'
  };

  export type BenchmarkRunScalarFieldEnum = (typeof BenchmarkRunScalarFieldEnum)[keyof typeof BenchmarkRunScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DataService'
   */
  export type EnumDataServiceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DataService'>
    


  /**
   * Reference to a field of type 'DataService[]'
   */
  export type ListEnumDataServiceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DataService[]'>
    


  /**
   * Reference to a field of type 'Runtime'
   */
  export type EnumRuntimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Runtime'>
    


  /**
   * Reference to a field of type 'Runtime[]'
   */
  export type ListEnumRuntimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Runtime[]'>
    


  /**
   * Reference to a field of type 'Location'
   */
  export type EnumLocationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Location'>
    


  /**
   * Reference to a field of type 'Location[]'
   */
  export type ListEnumLocationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Location[]'>
    


  /**
   * Reference to a field of type 'QueryCount'
   */
  export type EnumQueryCountFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryCount'>
    


  /**
   * Reference to a field of type 'QueryCount[]'
   */
  export type ListEnumQueryCountFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryCount[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BenchmarkRunWhereInput = {
    AND?: BenchmarkRunWhereInput | BenchmarkRunWhereInput[]
    OR?: BenchmarkRunWhereInput[]
    NOT?: BenchmarkRunWhereInput | BenchmarkRunWhereInput[]
    id?: IntFilter<"BenchmarkRun"> | number
    createdAt?: DateTimeFilter<"BenchmarkRun"> | Date | string
    dataService?: EnumDataServiceFilter<"BenchmarkRun"> | $Enums.DataService
    runtime?: EnumRuntimeFilter<"BenchmarkRun"> | $Enums.Runtime
    location?: EnumLocationFilter<"BenchmarkRun"> | $Enums.Location
    queryCount?: EnumQueryCountFilter<"BenchmarkRun"> | $Enums.QueryCount
    route?: StringFilter<"BenchmarkRun"> | string
    queryDuration?: IntFilter<"BenchmarkRun"> | number
  }

  export type BenchmarkRunOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    dataService?: SortOrder
    runtime?: SortOrder
    location?: SortOrder
    queryCount?: SortOrder
    route?: SortOrder
    queryDuration?: SortOrder
  }

  export type BenchmarkRunWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BenchmarkRunWhereInput | BenchmarkRunWhereInput[]
    OR?: BenchmarkRunWhereInput[]
    NOT?: BenchmarkRunWhereInput | BenchmarkRunWhereInput[]
    createdAt?: DateTimeFilter<"BenchmarkRun"> | Date | string
    dataService?: EnumDataServiceFilter<"BenchmarkRun"> | $Enums.DataService
    runtime?: EnumRuntimeFilter<"BenchmarkRun"> | $Enums.Runtime
    location?: EnumLocationFilter<"BenchmarkRun"> | $Enums.Location
    queryCount?: EnumQueryCountFilter<"BenchmarkRun"> | $Enums.QueryCount
    route?: StringFilter<"BenchmarkRun"> | string
    queryDuration?: IntFilter<"BenchmarkRun"> | number
  }, "id">

  export type BenchmarkRunOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    dataService?: SortOrder
    runtime?: SortOrder
    location?: SortOrder
    queryCount?: SortOrder
    route?: SortOrder
    queryDuration?: SortOrder
    _count?: BenchmarkRunCountOrderByAggregateInput
    _avg?: BenchmarkRunAvgOrderByAggregateInput
    _max?: BenchmarkRunMaxOrderByAggregateInput
    _min?: BenchmarkRunMinOrderByAggregateInput
    _sum?: BenchmarkRunSumOrderByAggregateInput
  }

  export type BenchmarkRunScalarWhereWithAggregatesInput = {
    AND?: BenchmarkRunScalarWhereWithAggregatesInput | BenchmarkRunScalarWhereWithAggregatesInput[]
    OR?: BenchmarkRunScalarWhereWithAggregatesInput[]
    NOT?: BenchmarkRunScalarWhereWithAggregatesInput | BenchmarkRunScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BenchmarkRun"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BenchmarkRun"> | Date | string
    dataService?: EnumDataServiceWithAggregatesFilter<"BenchmarkRun"> | $Enums.DataService
    runtime?: EnumRuntimeWithAggregatesFilter<"BenchmarkRun"> | $Enums.Runtime
    location?: EnumLocationWithAggregatesFilter<"BenchmarkRun"> | $Enums.Location
    queryCount?: EnumQueryCountWithAggregatesFilter<"BenchmarkRun"> | $Enums.QueryCount
    route?: StringWithAggregatesFilter<"BenchmarkRun"> | string
    queryDuration?: IntWithAggregatesFilter<"BenchmarkRun"> | number
  }

  export type BenchmarkRunCreateInput = {
    createdAt?: Date | string
    dataService: $Enums.DataService
    runtime: $Enums.Runtime
    location: $Enums.Location
    queryCount: $Enums.QueryCount
    route: string
    queryDuration: number
  }

  export type BenchmarkRunUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    dataService: $Enums.DataService
    runtime: $Enums.Runtime
    location: $Enums.Location
    queryCount: $Enums.QueryCount
    route: string
    queryDuration: number
  }

  export type BenchmarkRunUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataService?: EnumDataServiceFieldUpdateOperationsInput | $Enums.DataService
    runtime?: EnumRuntimeFieldUpdateOperationsInput | $Enums.Runtime
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    queryCount?: EnumQueryCountFieldUpdateOperationsInput | $Enums.QueryCount
    route?: StringFieldUpdateOperationsInput | string
    queryDuration?: IntFieldUpdateOperationsInput | number
  }

  export type BenchmarkRunUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataService?: EnumDataServiceFieldUpdateOperationsInput | $Enums.DataService
    runtime?: EnumRuntimeFieldUpdateOperationsInput | $Enums.Runtime
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    queryCount?: EnumQueryCountFieldUpdateOperationsInput | $Enums.QueryCount
    route?: StringFieldUpdateOperationsInput | string
    queryDuration?: IntFieldUpdateOperationsInput | number
  }

  export type BenchmarkRunCreateManyInput = {
    id?: number
    createdAt?: Date | string
    dataService: $Enums.DataService
    runtime: $Enums.Runtime
    location: $Enums.Location
    queryCount: $Enums.QueryCount
    route: string
    queryDuration: number
  }

  export type BenchmarkRunUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataService?: EnumDataServiceFieldUpdateOperationsInput | $Enums.DataService
    runtime?: EnumRuntimeFieldUpdateOperationsInput | $Enums.Runtime
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    queryCount?: EnumQueryCountFieldUpdateOperationsInput | $Enums.QueryCount
    route?: StringFieldUpdateOperationsInput | string
    queryDuration?: IntFieldUpdateOperationsInput | number
  }

  export type BenchmarkRunUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataService?: EnumDataServiceFieldUpdateOperationsInput | $Enums.DataService
    runtime?: EnumRuntimeFieldUpdateOperationsInput | $Enums.Runtime
    location?: EnumLocationFieldUpdateOperationsInput | $Enums.Location
    queryCount?: EnumQueryCountFieldUpdateOperationsInput | $Enums.QueryCount
    route?: StringFieldUpdateOperationsInput | string
    queryDuration?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumDataServiceFilter<$PrismaModel = never> = {
    equals?: $Enums.DataService | EnumDataServiceFieldRefInput<$PrismaModel>
    in?: $Enums.DataService[] | ListEnumDataServiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataService[] | ListEnumDataServiceFieldRefInput<$PrismaModel>
    not?: NestedEnumDataServiceFilter<$PrismaModel> | $Enums.DataService
  }

  export type EnumRuntimeFilter<$PrismaModel = never> = {
    equals?: $Enums.Runtime | EnumRuntimeFieldRefInput<$PrismaModel>
    in?: $Enums.Runtime[] | ListEnumRuntimeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Runtime[] | ListEnumRuntimeFieldRefInput<$PrismaModel>
    not?: NestedEnumRuntimeFilter<$PrismaModel> | $Enums.Runtime
  }

  export type EnumLocationFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationFilter<$PrismaModel> | $Enums.Location
  }

  export type EnumQueryCountFilter<$PrismaModel = never> = {
    equals?: $Enums.QueryCount | EnumQueryCountFieldRefInput<$PrismaModel>
    in?: $Enums.QueryCount[] | ListEnumQueryCountFieldRefInput<$PrismaModel>
    notIn?: $Enums.QueryCount[] | ListEnumQueryCountFieldRefInput<$PrismaModel>
    not?: NestedEnumQueryCountFilter<$PrismaModel> | $Enums.QueryCount
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BenchmarkRunCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    dataService?: SortOrder
    runtime?: SortOrder
    location?: SortOrder
    queryCount?: SortOrder
    route?: SortOrder
    queryDuration?: SortOrder
  }

  export type BenchmarkRunAvgOrderByAggregateInput = {
    id?: SortOrder
    queryDuration?: SortOrder
  }

  export type BenchmarkRunMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    dataService?: SortOrder
    runtime?: SortOrder
    location?: SortOrder
    queryCount?: SortOrder
    route?: SortOrder
    queryDuration?: SortOrder
  }

  export type BenchmarkRunMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    dataService?: SortOrder
    runtime?: SortOrder
    location?: SortOrder
    queryCount?: SortOrder
    route?: SortOrder
    queryDuration?: SortOrder
  }

  export type BenchmarkRunSumOrderByAggregateInput = {
    id?: SortOrder
    queryDuration?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumDataServiceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DataService | EnumDataServiceFieldRefInput<$PrismaModel>
    in?: $Enums.DataService[] | ListEnumDataServiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataService[] | ListEnumDataServiceFieldRefInput<$PrismaModel>
    not?: NestedEnumDataServiceWithAggregatesFilter<$PrismaModel> | $Enums.DataService
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDataServiceFilter<$PrismaModel>
    _max?: NestedEnumDataServiceFilter<$PrismaModel>
  }

  export type EnumRuntimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Runtime | EnumRuntimeFieldRefInput<$PrismaModel>
    in?: $Enums.Runtime[] | ListEnumRuntimeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Runtime[] | ListEnumRuntimeFieldRefInput<$PrismaModel>
    not?: NestedEnumRuntimeWithAggregatesFilter<$PrismaModel> | $Enums.Runtime
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRuntimeFilter<$PrismaModel>
    _max?: NestedEnumRuntimeFilter<$PrismaModel>
  }

  export type EnumLocationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationWithAggregatesFilter<$PrismaModel> | $Enums.Location
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationFilter<$PrismaModel>
    _max?: NestedEnumLocationFilter<$PrismaModel>
  }

  export type EnumQueryCountWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QueryCount | EnumQueryCountFieldRefInput<$PrismaModel>
    in?: $Enums.QueryCount[] | ListEnumQueryCountFieldRefInput<$PrismaModel>
    notIn?: $Enums.QueryCount[] | ListEnumQueryCountFieldRefInput<$PrismaModel>
    not?: NestedEnumQueryCountWithAggregatesFilter<$PrismaModel> | $Enums.QueryCount
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQueryCountFilter<$PrismaModel>
    _max?: NestedEnumQueryCountFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumDataServiceFieldUpdateOperationsInput = {
    set?: $Enums.DataService
  }

  export type EnumRuntimeFieldUpdateOperationsInput = {
    set?: $Enums.Runtime
  }

  export type EnumLocationFieldUpdateOperationsInput = {
    set?: $Enums.Location
  }

  export type EnumQueryCountFieldUpdateOperationsInput = {
    set?: $Enums.QueryCount
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumDataServiceFilter<$PrismaModel = never> = {
    equals?: $Enums.DataService | EnumDataServiceFieldRefInput<$PrismaModel>
    in?: $Enums.DataService[] | ListEnumDataServiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataService[] | ListEnumDataServiceFieldRefInput<$PrismaModel>
    not?: NestedEnumDataServiceFilter<$PrismaModel> | $Enums.DataService
  }

  export type NestedEnumRuntimeFilter<$PrismaModel = never> = {
    equals?: $Enums.Runtime | EnumRuntimeFieldRefInput<$PrismaModel>
    in?: $Enums.Runtime[] | ListEnumRuntimeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Runtime[] | ListEnumRuntimeFieldRefInput<$PrismaModel>
    not?: NestedEnumRuntimeFilter<$PrismaModel> | $Enums.Runtime
  }

  export type NestedEnumLocationFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationFilter<$PrismaModel> | $Enums.Location
  }

  export type NestedEnumQueryCountFilter<$PrismaModel = never> = {
    equals?: $Enums.QueryCount | EnumQueryCountFieldRefInput<$PrismaModel>
    in?: $Enums.QueryCount[] | ListEnumQueryCountFieldRefInput<$PrismaModel>
    notIn?: $Enums.QueryCount[] | ListEnumQueryCountFieldRefInput<$PrismaModel>
    not?: NestedEnumQueryCountFilter<$PrismaModel> | $Enums.QueryCount
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDataServiceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DataService | EnumDataServiceFieldRefInput<$PrismaModel>
    in?: $Enums.DataService[] | ListEnumDataServiceFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataService[] | ListEnumDataServiceFieldRefInput<$PrismaModel>
    not?: NestedEnumDataServiceWithAggregatesFilter<$PrismaModel> | $Enums.DataService
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDataServiceFilter<$PrismaModel>
    _max?: NestedEnumDataServiceFilter<$PrismaModel>
  }

  export type NestedEnumRuntimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Runtime | EnumRuntimeFieldRefInput<$PrismaModel>
    in?: $Enums.Runtime[] | ListEnumRuntimeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Runtime[] | ListEnumRuntimeFieldRefInput<$PrismaModel>
    not?: NestedEnumRuntimeWithAggregatesFilter<$PrismaModel> | $Enums.Runtime
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRuntimeFilter<$PrismaModel>
    _max?: NestedEnumRuntimeFilter<$PrismaModel>
  }

  export type NestedEnumLocationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Location | EnumLocationFieldRefInput<$PrismaModel>
    in?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    notIn?: $Enums.Location[] | ListEnumLocationFieldRefInput<$PrismaModel>
    not?: NestedEnumLocationWithAggregatesFilter<$PrismaModel> | $Enums.Location
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocationFilter<$PrismaModel>
    _max?: NestedEnumLocationFilter<$PrismaModel>
  }

  export type NestedEnumQueryCountWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QueryCount | EnumQueryCountFieldRefInput<$PrismaModel>
    in?: $Enums.QueryCount[] | ListEnumQueryCountFieldRefInput<$PrismaModel>
    notIn?: $Enums.QueryCount[] | ListEnumQueryCountFieldRefInput<$PrismaModel>
    not?: NestedEnumQueryCountWithAggregatesFilter<$PrismaModel> | $Enums.QueryCount
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQueryCountFilter<$PrismaModel>
    _max?: NestedEnumQueryCountFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use BenchmarkRunDefaultArgs instead
     */
    export type BenchmarkRunArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BenchmarkRunDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}