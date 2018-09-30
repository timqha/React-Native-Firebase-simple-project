

import firebase from 'react-native-firebase';
import Auth from './auth';
import User from './user';
import News from './news';


export default class FirebaseSdk {
  constructor(config) {
    this.connection = "";
    try {
      this.connection = firebase.app().database();
    } catch (e) {
      this.connection = firebase.initializeApp(config).database();
    }

    this.auth = new Auth();
    this.user = new User(this.connection);
    this.news = new News(this.connection);
  }
}
