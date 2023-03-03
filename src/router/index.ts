import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

import AuthRoutes from '@/router/modules/auth';
import HomeRoutes from '@/router/modules/home';
import SettingsRoutes from '@/router/modules/settings';
import CreatePostRoutes from '@/router/modules/createPost';
import SearchRoutes from '@/router/modules/search';
import NotFoundRoutes from '@/router/modules/not_found';

const routes: Array<RouteRecordRaw> = [
  ...AuthRoutes,
  ...HomeRoutes,
  ...SettingsRoutes,
  ...CreatePostRoutes,
  ...SearchRoutes,
  ...NotFoundRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
