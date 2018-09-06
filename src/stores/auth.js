// @flow

import { AsyncStorage } from "react-native";
import { persist, create } from "mobx-persist";
import {
  observable,
  action,
  computed,
  toJS
} from "mobx";
import type { _t_newsItem } from 'src/types';

class AuthStore {
  @persist @observable uid: string = "";

  @observable isHydrated: boolean = false;

  @persist @observable email: string = "";

  @observable password: string = "";

  @observable emailError: string = "";

  @observable passwordError: string = "";

  @persist('object') @observable selectedNews: {[key: string]: string} = {};

  @observable newsData: Object = {};

  @computed get newsList(): Array<_t_newsItem> {
    return Object.keys(this.newsData).map(news_id => ({
      ...this.newsData[news_id],
      id: news_id,
      isSelect: this.isSelected(news_id)
    }));
  }

  @computed get selectedNewsAll(): Object {
    return toJS(this.selectedNews);
  }

  @action
  isSelected(id: string): boolean {
    return this.selectedNews && (id in this.selectedNews);
  }

  @action
  setSelected(id: string) {
    if (id in this.selectedNewsAll) {
      delete this.selectedNews[id];
    } else {
      this.selectedNews = { ...this.selectedNews, [id]: true };
    }
  }

  @action
  setValue(params: Object) {
    const updateProps = params;
    Object.keys(updateProps).map((key) => {
      if (!this.hasOwnProperty(key) || typeof this.key === "function") {
        delete updateProps[key];
      }
      return null;
    });
    Object.assign(this, updateProps);
  }

  @action
  clearStore() {
    this.uid = "";
    this.email = "";
    this.password = "";
    this.emailError = "";
    this.passwordError = "";
    this.selectedNews = {};
    this.newsData = {};
  }

  @action
  setHydrated(value: boolean) {
    this.isHydrated = value;
  }
}

const hydrate = create({
  storage: AsyncStorage
});

const authStore = new AuthStore();

export default authStore;

hydrate("auth", authStore).then(() => {
  authStore.setHydrated(true);
});
