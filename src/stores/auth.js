// @flow

import { AsyncStorage } from "react-native";
import { persist, create } from "mobx-persist";
import { observable, action } from "mobx";

class AuthStore {
  @persist @observable uid: string = "";

  @observable isHydrated: boolean = false;

  @persist @observable email: string = "email@email.com";

  @persist @observable password: string = "";

  @observable groups: {[key: string]: string} = {};

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
