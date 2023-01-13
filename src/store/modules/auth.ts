import firebase from 'firebase/app';
import 'firebase/auth';
import db from '@/firebase/firebaseinit';
import getInitials from '@/utils/getInitials';

import {MutationTypes, ActionTypes, AuthState, AuthDoc, AuthContext} from '@/types/auth';

const state = {
  arPosts: [],
  editPost: null,
  oUser: null, 
  oProfile: {
    email: '',
    firstName: '',
    lastName: '',
    username: '',
    id: null,
    initials: '',
  }
};

const mutations = {
  [MutationTypes.getProfile](state: AuthState, doc: AuthDoc) {
    state.oProfile.id = doc.id;
    state.oProfile.email = doc.data().email;
    state.oProfile.firstName = doc.data().firstName;
    state.oProfile.lastName = doc.data().lastName;
    state.oProfile.username = doc.data().username;
  },
  [MutationTypes.getProfileInitials](state: AuthState) {
    state.oProfile.initials = getInitials(state.oProfile.firstName) + getInitials(state.oProfile.lastName);
  },
  [MutationTypes.updateUser](state: AuthState, payload: object) {
    state.oUser = payload;
  }
};

const actions = {
  async [ActionTypes.getCurrentUser](context: AuthContext) {
    const dataBase = db.collection('users').doc(firebase.auth().currentUser!.uid);
    const dbResults = await dataBase.get();
    
    context.commit(MutationTypes.getProfile, dbResults);
    context.commit(MutationTypes.getProfileInitials);
  }
};

export default {
  state,
  mutations,
  actions,
};