import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Music = () => import('views/music/Music')
// import Home from 'views/home/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '',
  redirect: '/music'
}, {
  path: '/home',
  component: Home
}, {
  path: '/music',
  component: Music
}, ]

export default new VueRouter({
  routes
})
