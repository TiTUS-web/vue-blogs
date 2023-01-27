import {RouteRecordRaw} from 'vue-router';

import Login from '@/modules/auth/views/Login.vue';
import Register from '@/modules/auth/views/Register.vue';
import Recover from '@/modules/auth/views/Recover.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/auth/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/auth/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/auth/recover',
    name: 'recover',
    component: Recover,
  },
];

export default routes;
