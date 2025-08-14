import { createRouter, createWebHistory } from 'vue-router';
import OverviewView from '../views/OverviewView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: OverviewView,
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('../views/MapView.vue'),
    },
    {
      path: '/map/:name',
      name: 'map',
      component: () => import('../views/MapView.vue'),
    },
    {
      path: '/playthroughs',
      name: 'playthroughs',
      component: () => import('../views/PlaythroughsView.vue'),
    },
    {
      path: '/compare',
      name: 'compare',
      component: () => import('../views/CompareView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
