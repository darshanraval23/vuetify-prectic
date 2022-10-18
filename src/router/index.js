import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormsPage from '../components/pages/FormPage.vue'
import TypographiPage from '../components/pages/TypographiPage.vue'
import CalendarPage from '../components/pages/CalendarPage.vue'
import SlidePage from '../components/pages/SliderPage.vue'
import TablePage from '../components/pages/TablePage.vue'
import PickerPage from '../components/pages/PickerPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/forms',
    component: FormsPage
  },
  {
    path: '/typographi',
    component: TypographiPage
  },
  {
    path: '/calendar',
    component: CalendarPage
  },
  {
    path: '/slider',
    component: SlidePage
  },
  {
    path: '/table',
    component: TablePage
  },
  {
    path: '/pickers',
    component: PickerPage
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
