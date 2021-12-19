import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from '@/layouts/home/Index'
import TestLayout from '@/layouts/test/Index'
import Home from '@/pages/Home'
import Home2 from '@/pages/Home2'
import Test1 from '@/pages/Test1'
import Test2 from '@/pages/Test2'
import Test3 from '@/pages/Test3'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/home2',
        name: 'Home2',
        component: Home2
      }
    ]
  },
  {
    path: '/Test',
    component: TestLayout,
    children: [
      {
        path: '/test1',
        name: 'Test1',
        component: Test1
      },
      {
        path: '/test2',
        name: 'Test2',
        component: Test2
      },
      {
        path: '/test3',
        name: 'Test3',
        component: Test3
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
