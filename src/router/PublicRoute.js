import Vue from 'vue'
import Router from 'vue-router'

import index from '@/View/index'
import Dashboard from '@/View/Dashboard'
import PageNotFound from '@/View/PageNotFound'

Vue.use(Router)

const routes = [
    {
        name: 'index',
        path: '/',
        component: index,
    },
    {
        name: 'Dashboard',
        path: '/dashboard',
        component: Dashboard,
    },
    {
        name: 'PageNotFound',
        path: '*',
        component: PageNotFound,
    }

]

const router = new Router({routes})

export default router;