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

    getProfileStart = '[auth] getProfileStart',
    getProfileSuccess = '[auth] getProfileSuccess',
    getProfileFailure = '[auth] getProfileFailure',

    getProfileInitials = '[auth] getProfileInitials', 

    getUserStart = '[auth] getUserStart', 
    getUserSuccess = '[auth] getUserSuccess', 
    getUserFailure = '[auth] getUserFailure', 

    changeFirstName = '[auth] changeFirstName',
    changeLastName = '[auth] changeLastName',
    changeUsername = '[auth] changeUsername',

    updateProfileStart = '[auth] updateProfileStart',
    updateProfileSuccess = '[auth] updateProfileSuccess',
    updateProfileFailure = '[auth] updateProfileFailure',
}

enum ActionTypes {
  getUser = '[auth] getUser',
  signIn = '[auth] signIn',
  recover = '[auth] recover',
  register = '[auth] register',
  signOut = '[auth] signOut',
  updateProfile = '[auth] updateProfile',
}

type oProfile = { 
    email?: string,
    firstName?: string,
    lastName?: string,
    username?: string,
    id?: string,
    initials?: string,
};

type AuthState = {
    isProfileLoading: boolean;

    isLoginButtonLoading: boolean;
    sErrorMessageLogin: string,

    isRecoverButtonLoading: boolean,
    sSuccessMessageRecover: string,
    sErrorMessageRecover: string,

    isRegisterButtonLoading: boolean, 

    isSaveChangesButtonLoading: boolean, 
    sSuccessMessageSaveChanges: string,

    arPosts: [],
    editPost: object,
    oUser: object, 
    oProfile: oProfile,
}

type AuthContext = { 
    commit: (arg0: string, arg1?: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData> | undefined) => void; 
}

export {MutationTypes, ActionTypes, oProfile, AuthState, AuthContext};