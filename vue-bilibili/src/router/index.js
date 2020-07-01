import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home/Home' //父组件
import Homepage from '@/home/components/Homepage' //主页
import Dynamic from '@/home/components/Dynamic' //动态
import Contribution from '@/home/components/Contribution' //投稿
import Channel from '@/home/components/Channel' //频道
import Collection from '@/home/components/Collection' //收藏

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [{
            path: '/',
            redirect: 'homepage'
        },
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                title: '父组件'
            },
            children: [{
                    path: '/homepage',
                    name: 'homepage',
                    component: Homepage,
                    meta: {
                        title: '主页TA的视频'
                    },
                },
                {
                    path: '/dynamic',
                    name: 'dynamic',
                    component: Dynamic,
                    meta: {
                        title: '主页-动态'
                    },
                },
                {
                    path: '/contribution',
                    name: 'contribution',
                    component: Contribution,
                    meta: {
                        title: '主页-投稿'
                    },
                },
                {
                    path: '/channel',
                    name: 'channel',
                    component: Channel,
                    meta: {
                        title: '主页-频道'
                    },
                },
                {
                    path: '/collection',
                    name: 'collection',
                    component: Collection,
                    meta: {
                        title: '主页-收藏'
                    },
                },
                {
                    path: '*', // 错误路由
                    redirect: '/' //重定向
                }
            ]
        }
    ],
})