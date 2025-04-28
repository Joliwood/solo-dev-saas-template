import CoreDatamapper from "./core.datamapper.js";

import { type schema } from "#types-server";

class UserDatamapper extends CoreDatamapper {
  async connectByEmail(email: string) {
    const artist = await this.client.query
      .from(this.tableName)
      .where({ email })
      .first<Promise<schema.User | null>>();
    return artist;
  }
}

export default UserDatamapper;
