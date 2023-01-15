import firebase from 'firebase/app';

enum MutationTypes {
    signInStart = '[auth] signInStart',
    signInSuccess = '[auth] signInSuccess',
    signInFailure = '[auth] signInFailure',

    recoverStart = '[auth] recoverStart',
    recoverSuccess = '[auth] recoverSuccess',
    recoverFailure = '[auth] recoverFailure',

    registerStart = '[auth] registerStart',
    registerSuccess = '[auth] registerSuccess',
    registerFailure = '[auth] registerFailure',

    signOutStart = '[auth] signOutStart',
    signOutSuccess = '[auth] signOutSuccess',
    signOutFailure = '[auth] signOutFailure',

    getCurrentUserStart = '[auth] getProfileStart',
    getCurrentUserSuccess = '[auth] getProfileSuccess',
    getCurrentUserFailure = '[auth] getProfileFailure',

    getCurrentUserInitials = '[auth] getProfileInitials', 

    getUserStart = '[auth] getUserStart', 
    getUserSuccess = '[auth] getUserSuccess', 
    getUserFailure = '[auth] getUserFailure', 
}

enum ActionTypes {
  getUser = '[auth] getUser',
  signIn = '[auth] signIn',
  recover = '[auth] recover',
  register = '[auth] register',
  signOut = '[auth] signOut',
}

type oProfile = { 
    email: string,
    firstName: string,
    lastName: string,
    username: string,
    id?: number | null,
    initials?: string,
};

type AuthState = {
    isProfileLoading: boolean;

    isLoginButtonLoading: boolean;
    isLoggedIn: boolean,
    sErrorMessageLogin: string,

    isRecoverButtonLoading: boolean,
    sSuccessMessageRecover: string,
    sErrorMessageRecover: string,

    isRegisterButtonLoading: boolean, 

    arPosts: [],
    editPost: object,
    oUser: object, 
    oProfile: oProfile,
}

type AuthContext = { 
    commit: (arg0: string, arg1?: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData> | undefined) => void; 
}

export {MutationTypes, ActionTypes, oProfile, AuthState, AuthContext};