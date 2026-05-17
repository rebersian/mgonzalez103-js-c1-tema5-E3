import { createRouter, createWebHistory } from 'vue-router';
import EstacioMeteorologicaLayout from '@/layouts/EstacioMeteorologicaLayout.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EstacioMeteorologicaLayout,
    },
  ],
});

export default router;
