// @flow
import type { _t_connection, _t_list, _t_newsItem } from 'src/types';
import ENDPOINTS from "../configs";

import { create_news } from "./default.states";
/* TYPES */

export default class News {
  list: _t_list;

  connection: _t_connection;

  constructor(connection: _t_connection) {
    this.list = connection.ref(ENDPOINTS.news);
    this.connection = connection;
  }

  create(data: _t_newsItem = create_news): Promise<any> {
    return new Promise((resolve, reject) => {
      const { key } = this.list.push();
      const updates = {};
      updates[key] = data;
      this.list.update(updates)
        .then(resolve)
        .catch(reject);
    });
  }

  update(uId: string, data: _t_newsItem = create_news): Promise<any> {
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

  getList(callback: Function): void {
    this.list.on('value', (snap) => {
      const list = {};
      snap.forEach((child) => {
        list[child.key] = child.val();
      });
      callback(list);
    });
  }


}
