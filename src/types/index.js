// @flow
import ENDPOINTS from "src/services/configs";


export type _t_newsItem = {
  description: string,
  title: string,
  id?: string,
  isSelect?: string
}

export type _t_navigation = {
  navigate: ((params: { routeName: string, key: string }) => void),
  goBack: () => void,
  getParam: (item: string, defaultParam: string) => _t_newsItem,
};

export type _t_emailFormData = {
  password: string,
  email: string
}

export type _t_user = {
  uid: string,
  email: string,
  news?: { [key: string]: string}
}

export type _t_auth = {|
  ...$Exact<_t_emailFormData>,
  uid: string,
  emailError: string,
  passwordError: string,
  // function
  setSelected: (id: string) => void,
  newsList: () => Array<{ ...$Exact<_t_newsItem>, isSelect: boolean }> | [],
  setValue: (params: Object) => void,
  clearStore: () => void
|}

export type _t_firebase = {
  auth: {
    signUp: (data: _t_emailFormData) => Promise<_t_user>,
    signIn: (data: _t_emailFormData) => Promise<_t_user>,
    signOut: () => Promise<any>
  },
  user: {
    create: (data: _t_user, uid: string) => Promise<_t_user>,
  },
  news: {
    create: (data: _t_newsItem) => Promise<any>,
    getList: Function => Promise<any>,
  }
}

export type _t_connection = {
  ref: (endpoints: $Values<typeof ENDPOINTS>) => {}
}

export type _t_list = {
  ...Object
}

export type _t_screenProps = {
  sdk: _t_firebase
}
