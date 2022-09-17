import Vue from 'vue'
import VueRouter from 'vue-router'

import IndexView from "@/views/IndexView";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect:'/index/home'
    },
    {
        path: '/index',
        name: 'index',
        component: IndexView,
        children:[
            {
                path: 'home',
                name: 'home',
                component: ()=>import('@/views/HomeView')
            },
            {
                path: 'download',
                name: 'download',
                component: ()=>import('@/views/DataPreviewView')
            },
            {
                path: 'process',
                name: 'process',
                component: ()=>import('@/views/DataProcessView')
            },
            {
                path: 'upload',
                name: 'upload',
                component: ()=>import('@/views/DataUploadView')
            }
        ]
    },


]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
