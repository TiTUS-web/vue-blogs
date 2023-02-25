import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

import AuthRoutes from '@/router/modules/auth';
import HomeRoutes from '@/router/modules/home';
import SettingsRoutes from '@/router/modules/settings';
import CreatePostRoutes from '@/router/modules/createPost';

const routes: Array<RouteRecordRaw> = [
  ...AuthRoutes,
  ...HomeRoutes,
  ...SettingsRoutes,
  ...CreatePostRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
