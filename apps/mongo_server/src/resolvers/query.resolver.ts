import { Db } from "mongodb";

import { type schema } from "#types_mongo_server";
import { UserMongo } from "types/__generated__/graphql";

const Query: schema.QueryResolvers = {
  users: async (_parent, _args, context: { db: Db }) => {
    const users = await context.db
      .collection<UserMongo>("users")
      .find()
      .toArray();

    return users;
  },

  hello_world() {
    return "Hello world !";
  },
};

export default Query;
