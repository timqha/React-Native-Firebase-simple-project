// @flow

import firebase from 'react-native-firebase';

const email_pass = {
  email: '',
  password: ''
};

import type { _t_emailFormData } from 'src/types';

export default class Auth {

  signUp = (data: _t_emailFormData = email_pass): Promise<any> => {
    const { email, password } = data;
    return new Promise((resolve, reject) => {
      if (email && password) {
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
          .then((res) => {
            resolve(res.user);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        reject('no email or password');
      }
    });
  }


  signIn = (data: _t_emailFormData = email_pass): Promise<any> => {
    const { email, password } = data;
    return new Promise((resolve, reject) => {
      if (email && password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((res) => {
            resolve(res._user);
          })
          .catch((error) => {
            reject();
            console.warn(error);
          });
      } else {
        reject('no email or password');
      }
    });
  }


  getCurrentUser = () => firebase.auth().currentUser


  signOut = () => firebase.auth().signOut()
}
