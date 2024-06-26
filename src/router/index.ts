import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAccessToken, getUserInfo } from "../utils/authenticate.js"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hello',
      component: import('../views/HelloView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: import('../views/HomeView.vue'),
      meta: {
        auth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/users',
      name: 'users',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UsersView.vue')
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Login.vue')
    },
    {
      path: '/email/verify/:userId/:hash',
      name: 'verify-email',
      component: () => import('../components/VerifyEmail.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Logout.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  const publicPage = ['/login', '/email/verify/:userId/:hash', '/register'];
  const authPage = !publicPage.includes(to.path);
  const token = getAccessToken()
  const info = getUserInfo()
  const isAuthenticated = token !== 'undefined' && info !== 'undefined'
  if (!isAuthenticated && authPage) {
    next('/login')
  } else {
    next()
  }
});
export default router
