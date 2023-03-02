// single pages
import homePage from '../pages/homePage/HomePage.vue';
import NotFoundPage from '../pages/NotFoundPage/index.vue';

import { routePropResolver } from './util';

const DOMAIN_TITLE = 'Test - Vue';

export const routes = [
  {
    path: '/',
    name: 'index',
    component: homePage,
    meta: { title: `${DOMAIN_TITLE} | home` },
    props: routePropResolver,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
    meta: { title: `${DOMAIN_TITLE} | not found` },
  },
];
