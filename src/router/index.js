import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from '@/layouts/home/Index'
import TestLayout from '@/layouts/test/Index'
import Home from '@/pages/home/Home'
import Myworks from '@/pages/home/Myworks'
import About from '@/pages/home/About'
import Test1 from '@/pages/Test1'
import Test2 from '@/pages/Test2'
import Test3 from '@/pages/Test3'
import Test4 from '@/pages/Test4'

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
        path: '/myworks',
        name: 'Myworks',
        component: Myworks
      },
      {
        path: '/About',
        name: 'About',
        component: About
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
      },
      {
        path: '/test4',
        name: 'Test4',
        component: Test4
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
