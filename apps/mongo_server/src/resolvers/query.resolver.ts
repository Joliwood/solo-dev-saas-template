// import * as process from "process";

import { Db } from "mongodb";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Query: any = {
  //   getUsers(context: any) {
  //     const { db } = context;
  //     console.log("le context: ", db);
  //     // const db = context.db;

  //     const users = db.collection("users").find({}).toArray();

  //     console.log("users", users);

  //     return users;
  //   },
  getUsers: async (
    _parent: any,
    _args: any,
    context: { db: Db }
  ): Promise<any[]> => {
    // on a bien context.db
    const users = await context.db.collection("users").find().toArray();
    return users;
  },

  hello_world() {
    return "Hello world !";
  },
};

export default Query;
