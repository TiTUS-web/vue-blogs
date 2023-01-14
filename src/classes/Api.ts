import firebase from 'firebase/app';
import 'firebase/auth';
import db from '@/firebase/firebaseinit';

class Api {
  public signIn(sEmail: string, sPassword: string) {
    return new Promise<void>((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(sEmail, sPassword)
        .then(() => {
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
          window.location.reload();
          window.location.replace('/auth/login');
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  public updateUser() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          resolve(user);
        } else {
          reject();
        }
      });
    });
  }

  public getCurrentUser() {
    return new Promise<void>((resolve, reject) => {
      const dataBase = db.collection('users').doc(firebase.auth().currentUser!.uid);
      dataBase.get()
        .then((dbResults: any) => {
          resolve(dbResults);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default Api;