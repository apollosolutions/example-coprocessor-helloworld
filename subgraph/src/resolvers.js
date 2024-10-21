import { GraphQLError } from "graphql";

const resolvers = {
  Query: {
    hello: async () => {
      return "Hello World! Bay Isle Home™";
      /*return await new Promise((resolve) => {
        setTimeout(() => {
          resolve("Hello World!");
        }, 1000);
      });*/
    },
    bigInt: () => {
      return 51049694213;
    },
    node: () => {
      throw new GraphQLError("oh no!", {
        extensions: {
          code: "OH_NO",
          http: {
            status: 302,
          },
        },
      });
    },
    a: () => {
      return { id: "123" };
    },
  },
  A: {
    b: () => {
      return { id: "123" };
    },
  },
  B: {
    c: () => {
      return { id: "123" };
    },
  },
  C: {
    d: () => {
      throw new GraphQLError("oh noooo!");
    },
  },
};

export default resolvers;
