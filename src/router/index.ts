import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Login from '@/modules/auth/views/Login.vue';
import Register from '@/modules/auth/views/Register.vue';
import Home from '@/modules/home/index.vue';

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
    path: '/home/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
