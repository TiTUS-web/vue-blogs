import getInitials from '@/utils/getInitials';

import Api from '@/classes/Api';

const $Api = new Api();

import {MutationTypes, ActionTypes, AuthState, AuthContext} from '@/types/auth';

const state: AuthState = {
  isProfileLoading: false,

  isLoginButtonLoading: false,
  isLoggedIn: false,
  sErrorMessageLogin: '',

  isRecoverButtonLoading: false,
  sErrorMessageRecover: '',

  isRegisterButtonLoading: false, 

  arPosts: [],
  editPost: {},

  oUser: {},
  oProfile: {
    email: '',
    firstName: '',
    lastName: '',
    username: '',
    id: null,
    initials: '',
  },
  
};

const mutations = {
  [MutationTypes.signInStart](state: AuthState) {
    state.isLoginButtonLoading = true;
    state.isLoggedIn = false;
    state.sErrorMessageLogin  = '';

  },
  [MutationTypes.signInSuccess](state: AuthState) {
    state.isLoginButtonLoading = false;
    state.isLoggedIn = true;
    state.sErrorMessageLogin  = '';

  },
  [MutationTypes.signInFailure](state: AuthState) {
    state.isLoginButtonLoading = false;
    state.isLoggedIn = true;
    state.sErrorMessageLogin = 'Make sure your email and password are correct';
  },

  [MutationTypes.recoverStart](state: AuthState) {
    state.isRecoverButtonLoading = true;
    state.sErrorMessageRecover = '';
  },
  [MutationTypes.recoverSuccess](state: AuthState) {
    state.isRecoverButtonLoading = false;
    state.sErrorMessageRecover = '';
  },
  [MutationTypes.recoverFailure](state: AuthState) {
    state.isRecoverButtonLoading = false;
    state.sErrorMessageRecover = 'Make sure your email are correct';
  },

  [MutationTypes.registerStart](state: AuthState) {
    state.isRegisterButtonLoading = true;
  },
  [MutationTypes.registerSuccess](state: AuthState) {
    state.isRegisterButtonLoading = false;
  },
  [MutationTypes.registerFailure](state: AuthState) {
    state.isRegisterButtonLoading = false;
  },

  [MutationTypes.signOutStart](state: AuthState) {
    state.isLoggedIn = false;

  },
  [MutationTypes.signOutSuccess](state: AuthState) {
    state.isLoggedIn = false;

  },
  [MutationTypes.signOutFailure](state: AuthState) {
    state.isLoggedIn = true;
  },

  [MutationTypes.getProfileStart](state: AuthState) {
    state.isProfileLoading = true;
  },
  [MutationTypes.getProfileSuccess](state: AuthState, payload: any) {
    state.oProfile.id = payload.id;
    state.oProfile.email = payload.email;
    state.oProfile.firstName = payload.firstName;
    state.oProfile.lastName = payload.lastName;
    state.oProfile.username = payload.username;
    state.isProfileLoading = false;
  },
  [MutationTypes.getProfileFailure](state: AuthState) {
    state.oProfile.id = null;
    state.oProfile.email = '';
    state.oProfile.firstName = '';
    state.oProfile.lastName = '';
    state.oProfile.username = '';
    state.isProfileLoading = false;
  },

  [MutationTypes.updateUserStart](state: AuthState) {
    state.oUser = {};
  },
  [MutationTypes.updateUserSuccess](state: AuthState, payload: object) {
    state.oUser = payload;
  },
  [MutationTypes.updateUserFailure](state: AuthState) {
    state.oUser = {};
  },

  [MutationTypes.getProfileInitials](state: AuthState) {
    state.oProfile.initials = getInitials(state.oProfile.firstName) + getInitials(state.oProfile.lastName);
  },
};

const actions = {
  [ActionTypes.signIn](context: AuthContext, credentials: { sEmail: string; sPassword: string; }) {
    context.commit(MutationTypes.signInStart);
    $Api.signIn(credentials.sEmail, credentials.sPassword)
      .then(() => {
        context.commit(MutationTypes.signInSuccess);
      })
      .catch(() => {
        context.commit(MutationTypes.signInFailure);
      });
  },

  [ActionTypes.recover](context: AuthContext, credentials: { sEmail: string }) {
    context.commit(MutationTypes.recoverStart);
    $Api.recover(credentials.sEmail)
      .then(() => {
        context.commit(MutationTypes.recoverSuccess);
      })
      .catch(() => {
        context.commit(MutationTypes.recoverFailure);
      });
  },

  [ActionTypes.register](context: AuthContext, credentials: { sEmail: string, sPassword: string, sFirstName: string, sLastName: string, sUsername: string }) {
    context.commit(MutationTypes.registerStart);
    $Api.register(credentials.sEmail, credentials.sPassword, credentials.sFirstName, credentials.sLastName, credentials.sUsername)
      .then(() => {
        context.commit(MutationTypes.registerSuccess);
      })
      .catch(() => {
        context.commit(MutationTypes.registerFailure);
      });
  },

  [ActionTypes.signOut](context: AuthContext) {
    context.commit(MutationTypes.signOutStart);
    $Api.signOut()
      .then(() => {
        context.commit(MutationTypes.signOutSuccess);
      })
      .catch(() => {
        context.commit(MutationTypes.signOutFailure);
      });
  },

  [ActionTypes.getProfile](context: AuthContext) {
    context.commit(MutationTypes.getProfileStart);
    $Api.getCurrentUser()
      .then((dbResults: any) => {
        context.commit(MutationTypes.getProfileSuccess, dbResults.data());
        context.commit(MutationTypes.getProfileInitials);
      })
      .catch(() => {
        context.commit(MutationTypes.getProfileFailure);
      });
  },

  [ActionTypes.updateUser](context: AuthContext) {
    context.commit(MutationTypes.updateUserStart);
    $Api.updateUser()
      .then((user: any) => {
        context.commit(MutationTypes.updateUserSuccess, user);
      })
      .catch(() => {
        context.commit(MutationTypes.updateUserFailure);
      });
  }
};

export default {
  state,
  mutations,
  actions,
};