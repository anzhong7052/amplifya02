import { createRouter, createWebHistory } from 'vue-router'
import { usePermissStore } from '../store/permiss';
import {getCurrentUser} from "@aws-amplify/auth";
import Home from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/user',
          name: 'システム設定',
          meta: {
              title: 'システム設定',
              permiss: '2',
          },
          component: () => import(/* webpackChunkName: "table" */ '../views/user.vue')
      },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/version.vue')
        }
      ]
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登録',
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
    }
  ]
});


router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | EE`;
  const role = localStorage.getItem('ee_user');
  const permiss = usePermissStore();
  // if(!role){
  //     if(to.path === '/callback') {
  //         next('/callback');
  //     } else {
  //         next('/login');
  //     }
  // }
  if (!role && to.path !== '/login' &&  to.path !== '/callback' && to.path !== '/maintenance') {
      next('/login');
  } 
  else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
      // 如果没有权限，则进入403
      next('/403');
  } else {
      next();
  }
});
export default router
