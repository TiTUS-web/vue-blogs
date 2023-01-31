enum MutationTypes {
  changeFileName = '[create-post] changeFileName',
  changeFileURL = '[create-post] changeFileURL',
  updatePostTitle = '[create-post] updatePostTitle',
  updatePostContent = '[create-post] updatePostContent',
}

enum ActionTypes {
  changeFile = '[create-post] changeFile',
}

type AuthState = {
  sPostPhotoName: string;
  sPostPhotoFileURL: string;
  sPostTitle: string;
  sPostText: string;
};

export {MutationTypes, ActionTypes, AuthState};
