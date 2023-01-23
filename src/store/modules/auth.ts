import getInitials from '@/utils/getInitials';

import Api from '@/classes/Api';

const $Api = new Api();

import {MutationTypes, oProfile, ActionTypes, AuthState, AuthContext} from '@/types/auth';

const state: AuthState = {
  isProfileLoading: false,

  isLoginButtonLoading: false,
  sErrorMessageLogin: '',

  isRecoverButtonLoading: false,
  sErrorMessageRecover: '',
  sSuccessMessageRecover: '',

  isRegisterButtonLoading: false, 

  arPosts: [],
  editPost: {},

  oUser: {},
  oProfile: {},
};

const mutations = {
  [MutationTypes.signInStart](state: AuthState) {
    state.isLoginButtonLoading = true;
    state.sErrorMessageLogin  = '';
  },
  [MutationTypes.signInSuccess](state: AuthState) {
    state.isLoginButtonLoading = false;
    state.sErrorMessageLogin  = '';
  },
  [MutationTypes.signInFailure](state: AuthState) {
    state.isLoginButtonLoading = false;
    state.sErrorMessageLogin = 'Make sure your email and password are correct';
  },

  [MutationTypes.recoverStart](state: AuthState) {
    state.isRecoverButtonLoading = true;
    state.sSuccessMessageRecover = '';
    state.sErrorMessageRecover = '';
  },
  [MutationTypes.recoverSuccess](state: AuthState) {
    state.isRecoverButtonLoading = false;
    state.sSuccessMessageRecover = 'If your account exists, you will receive an email';
    state.sErrorMessageRecover = '';
  },
  [MutationTypes.recoverFailure](state: AuthState) {
    state.isRecoverButtonLoading = false;
    state.sSuccessMessageRecover = '';
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
    state.oUser = {};
    state.oProfile = {};
  },
  [MutationTypes.signOutSuccess](state: AuthState) {
    state.oUser = {};
    state.oProfile = {};
  },
  [MutationTypes.signOutFailure](state: AuthState) {
    state.oUser = {};
    state.oProfile = {};
  },

  [MutationTypes.getProfileStart](state: AuthState) {
    state.oProfile = {};
    state.isProfileLoading = true;
  },
  [MutationTypes.getProfileSuccess](state: AuthState, payload: oProfile) {
    state.oProfile = payload;
    state.isProfileLoading = false;
  },
  [MutationTypes.getProfileFailure](state: AuthState) {
    state.oProfile = {};
    state.isProfileLoading = false;
  },

  [MutationTypes.getUserStart](state: AuthState) {
    state.oUser = {};
  },
  [MutationTypes.getUserSuccess](state: AuthState, payload: object) {
    state.oUser = payload;
  },
  [MutationTypes.getUserFailure](state: AuthState) {
    state.oUser = {};
  },

  [MutationTypes.getProfileInitials](state: AuthState) {
    state.oProfile.initials = getInitials(state.oProfile.firstName!) + getInitials(state.oProfile.lastName!);
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

  [ActionTypes.getUser](context: AuthContext) {
    context.commit(MutationTypes.getUserStart);
    context.commit(MutationTypes.getProfileStart);
    $Api.getUser()
      .then(({oUser, oProfile}: any) => {
        context.commit(MutationTypes.getUserSuccess, oUser);
        context.commit(MutationTypes.getProfileSuccess, oProfile);
        context.commit(MutationTypes.getProfileInitials);
      })
      .catch(() => {
        context.commit(MutationTypes.getUserFailure);
        context.commit(MutationTypes.getProfileFailure);
      });
  }
};

export default {
  state,
  mutations,
  actions,
};