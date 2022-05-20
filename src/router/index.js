import Vue from 'vue'
import VueRouter from 'vue-router'
import { authGuard } from '../auth/authGuard';
import Home from '../views/Home.vue'
import Profile from "../views/Profile.vue";
import About from "../views/About.vue"
import Game from "../views/Tic-Tac-Toe.vue"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: authGuard
    }
  ]
});

export default router