import * as VouRouter from 'vue-router';

import { initCurrentUserStateMiddleware, checkAccessMiddleware, setPageTitleMiddleware } from './middlewares';
import { routes } from './routes';

const router = new VouRouter.createRouter({
  linkActiveClass: 'is-active',
  mode: 'history',
  history: VouRouter.createWebHistory(),
  routes,
});

router.beforeEach(initCurrentUserStateMiddleware);
router.beforeEach(checkAccessMiddleware);
router.beforeEach(setPageTitleMiddleware);

export default router;
