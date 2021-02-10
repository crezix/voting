import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
  path: '/AdminPanel',
  name: 'AdminPage',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/AdminPage.vue')
},
{
  path: '/AdminPanel/SignUp',
  name: 'SignUpPage',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/SignUpPage.vue')
},
{
  path: '/AdminPanel/Graph',
  name: 'GraphPage',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/GraphPage.vue')
},
{
  path: '/AdminPanel/Candidate',
  name: 'CandidatePage',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/CandidatePage.vue')
},
{
  path: '/User/Voting',
  name: 'VotingPage',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/VotingPage.vue')
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
