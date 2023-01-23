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
      if (!storage.getStorageSync('oUser')) {
        firebase.auth().onAuthStateChanged(oUser => {
          if (oUser) {
            storage.setStorageSync('oUser', oUser);
            resolve(oUser);
          } else {
            reject();
          }
        });
      } else {
        resolve(storage.getStorageSync('oUser'));
      }
    });
  }

  public getCurrentUser() {
    return new Promise<void>((resolve, reject) => {
      if (!storage.getStorageSync('oProfile')) {
        const currentUser = firebase.auth().currentUser;
        let oProfile: any = {};
  
        if (!currentUser) return;
          
        const dataBase = db.collection('users').doc(currentUser.uid);
        dataBase.get()
          .then((dbResults: any) => {
            oProfile = dbResults.data();
            oProfile.id = dbResults.id;
            
            storage.setStorageSync('oProfile', oProfile);
            resolve(oProfile);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        resolve(storage.getStorageSync('oProfile'));
      }
    });
  }
}

export default Api;