import CoreDatamapper from './core.datamapper';

import { type User } from 'types/__generated__/graphql';

class UserDatamapper extends CoreDatamapper {
  async connectByEmail(email: string) {
    const artist = await (
      this.client.query
        .from(this.tableName)
        .where({ email })
        .first<Promise<User | null>>()
    );
    return artist;
  }
}

export default UserDatamapper;
