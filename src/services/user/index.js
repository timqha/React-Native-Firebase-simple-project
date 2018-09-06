// @flow
import type { _t_connection, _t_list } from 'src/types';
import ENDPOINTS from "../configs";

import { create_user } from "./default.states";
/* TYPES */
type _t_create_user = {
  email: string,
  news: {}
}
type _t_user_id = null | string;

export default class User {
  list: _t_list;

  connection: _t_connection;

  constructor(connection: _t_connection) {
    this.list = connection.ref(ENDPOINTS.users);
    this.connection = connection;
  }

  create(
    data: _t_create_user = create_user,
    id: _t_user_id = null
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!id) {
        /* eslint no-param-reassign: 0 */
        id = this.list.push().key;
      }
      const updates = {};
      updates[id] = data;
      this.list
        .update(updates)
        .then(resolve(id))
        .catch(reject);

    });
  }

  update(uId: string, data: _t_create_user = create_user): Promise<any> {
    return new Promise((resolve, reject) => {
      if (uId) {
        this.list
          .child(uId)
          .update(data)
          .then(resolve)
          .catch(reject);
      } else {
        reject('error update');
      }
    });
  }

}
