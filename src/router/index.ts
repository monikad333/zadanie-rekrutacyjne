import type { Router } from 'vue-router'  
import { createRouter, createWebHistory } from 'vue-router'
import UserEditVue from '@/views/UserEdit.vue'

const routes = [
  {
    path: '/',
    name: 'userEdit',
    component: UserEditVue
  },
  {
    path: '/',
    name: 'userList',
    component: UserEditVue
  },
  {
    path: '/',
    name: 'Roles and Permissions',
    component: UserEditVue
  },
  {
    path: '/',
    name: 'Settings',
    component: UserEditVue
  },
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
