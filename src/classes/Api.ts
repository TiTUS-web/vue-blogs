import firebase from 'firebase/app';
import 'firebase/auth';
import db from '@/firebase/firebaseinit';
import { useStorage } from 'vue3-storage';

const storage = useStorage();

class Api {
  public signIn(sEmail: string, sPassword: string) {
    return new Promise<void>((resolve, reject) => {
      if (!sEmail || !sPassword) {
        reject();
      }

      firebase
        .auth()
        .signInWithEmailAndPassword(sEmail, sPassword)
        .then(() => {
          window.location.reload();
          window.location.replace('/');
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  public recover(sEmail: string) {
    return new Promise<void>((resolve, reject) => {
      firebase
        .auth()
        .sendPasswordResetEmail(sEmail)
        .then(() => {
          window.location.reload();
          window.location.replace('/auth/login');
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  public register(sEmail: string, sPassword: string, sFirstName: string, sLastName: string, sUsername: string) {
    return new Promise<void>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(sEmail, sPassword)
        .then((createUser) => {
          const dataBase = db.collection('users').doc(createUser.user!.uid);
          dataBase.set({
            firstName: sFirstName,
            lastName: sLastName,
            username: sUsername,
            email: sEmail,
          });

          window.location.reload();
          window.location.replace('/auth/login');
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  public signOut() {
    return new Promise<void>((resolve, reject) => {
      firebase.auth().signOut()
        .then(() => {
          storage.removeStorageSync('oUser');
          storage.removeStorageSync('oProfile');

          window.location.reload();
          window.location.replace('/auth/login');
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  public getUser() {
    return new Promise((resolve, reject) => {
      if (!storage.getStorageSync('oUser') || !storage.getStorageSync('oProfile')) {
        firebase.auth().onAuthStateChanged(oUser => {
          if (oUser) {
            const currentUser: any = firebase.auth().currentUser;
            let oProfile: any = {};

            const dataBase = db.collection('users').doc(currentUser.uid);

            dataBase.get()
              .then((dbResults: any) => {
                oProfile = dbResults.data();
                oProfile.id = dbResults.id;
  
                storage.setStorageSync('oUser', oUser);
                storage.setStorageSync('oProfile', oProfile);
                resolve({oUser, oProfile});
              });
          } else {
            reject();
          }
        });
      } else {
        resolve({ oUser: storage.getStorageSync('oUser'), oProfile: storage.getStorageSync('oProfile')});
      }
    });
  }

  public updateProfile(credentials: {id: string, sFirstName: string, sLastName: string, sUsername: string}) {
    return new Promise<void>((resolve, reject) => {
      const dataBase = db.collection('users').doc(credentials.id);

      dataBase.update({
        firstName: credentials.sFirstName,
        lastName: credentials.sLastName,
        username: credentials.sUsername,
      })
        .then(() => {
          storage.removeStorageSync('oUser');
          storage.removeStorageSync('oProfile');

          this.getUser()
            .then((payload: any) => {
              resolve(payload);
            });
        })
        .catch(() => {
          reject();
        });

    });
  }
}

export default Api;