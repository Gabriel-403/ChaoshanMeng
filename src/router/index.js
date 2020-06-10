import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "./../Home/index"


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: "/home",
    component: home

}]

const router = new VueRouter({
    routes
})

export default router