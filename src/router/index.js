import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "../views/HomeView";


Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomeView,
        redirect:'/home/main',
        children: [
            {
                path: 'user/login',
                name: 'login',
                component: () => import('../views/User/LoginView'),
                meta: {
                    title: '登入 - 旅討論區'
                }
            },
            {
                path: 'main',
                name: 'maimPage',
                component: () =>import('../views/ForumMainView'),
                meta: {
                    title: '旅討論區'
                }
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? to.meta.title : '旅討論區';
    next();
})