import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import DetailView from '@/views/DetailView.vue'
import AddBlogView from '@/views/AddBlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/posts/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/blog',
      name: 'blog',
      component: AddBlogView
    },
   
  ]
})

export default router
