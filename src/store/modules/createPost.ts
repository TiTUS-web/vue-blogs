import {ActionTypes, AuthState, MutationTypes} from '@/types/createPost';

const state: AuthState = {
  sPostPhotoName: '',
  sPostPhotoFileURL: '',
  sPostTitle: '',
  sPostText: '',

  isShowModalComponent: false,
};

const mutations = {
  [MutationTypes.changeFileName](state: AuthState, payload: string) {
    state.sPostPhotoName = payload;
  },
  [MutationTypes.changeFileURL](state: AuthState, payload: string) {
    state.sPostPhotoFileURL = payload;
  },
  [MutationTypes.updatePostTitle](state: AuthState, payload: string) {
    state.sPostTitle = payload;
  },
  [MutationTypes.updatePostContent](state: AuthState, payload: string) {
    state.sPostText = payload;
  },
  [MutationTypes.previewPost](state: AuthState, payload: boolean) {
    state.isShowModalComponent = payload;
  },
};

const actions = {
  [ActionTypes.changeFile](context: any, payload: {name: string; url: string}) {
    context.commit(MutationTypes.changeFileName, payload.name);
    context.commit(MutationTypes.changeFileURL, payload.url);
  },
};

export default {
  state,
  mutations,
  actions,
};
