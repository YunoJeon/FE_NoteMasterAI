import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from "@/views/DashboardView.vue";
import Layout from "@/layouts/Layout.vue";

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: DashboardView,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
