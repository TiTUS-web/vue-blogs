enum MutationTypes {
  changeFileName = '[create-post] changeFileName',
  changeFileURL = '[create-post] changeFileURL',
  updatePostTitle = '[create-post] updatePostTitle',
  updatePostContent = '[create-post] updatePostContent',

  previewPost = '[create-post] previewPost',
}

enum ActionTypes {
  changeFile = '[create-post] changeFile',
}

type AuthState = {
  sPostPhotoName: string;
  sPostPhotoFileURL: string;
  sPostTitle: string;
  sPostText: string;

  isShowModalComponent: boolean;
};

export {MutationTypes, ActionTypes, AuthState};
