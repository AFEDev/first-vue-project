import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home'

   const routes= [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: () => import('./views/Todos.vue')
        }
    ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

  export default router