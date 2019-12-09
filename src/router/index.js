import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
// import Home from 'views/home/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '',
  redirect: '/home'
}, {
  path: '/home',
  component: Home
}, ]

export default new VueRouter({
  routes
})
