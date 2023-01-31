import {createStore} from 'vuex';

import auth from '@/store/modules/auth';
import createPost from '@/store/modules/createPost';

export default createStore({
  modules: {
    auth,
    createPost,
  },
});
