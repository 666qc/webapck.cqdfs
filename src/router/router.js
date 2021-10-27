import Vue from 'vue';
import VueRouter from 'vue-router';

import NProgress from 'nprogress';
import '../../node_modules/nprogress/nprogress.css'
Vue.use(VueRouter); // 必须安装到Vue框架中

// 设置路由
// import KingGlory from '@/components/KingGlory.vue'

let router = new VueRouter({
    routes:[ 
        { path: "/Baidu", component:()=>import ( "@/components/Baidu")},  // 懒加载

        {
             path: "/Alibaba", component:()=>import ( "@/components/Alibaba"),
             children:[
                { path: "Taobao", component:()=>import ("@/components/Taobao")}
             ]
         

            }, 
        
        { 
            path: "/Tencent", component:()=>import("@/components/Tencent"),
            children: [
                // { path: 'KingGlory', component: KingGlory },
                { path: "KingGlory", component:()=>import ( "@/components/KingGlory")}, 
                { path: "LOL", component:()=>import ( "@/components/LOL")}, 
            ]
        },
     ]
})


// 前置导航守卫
router.beforeEach((to, from, next) => {
    NProgress.start()

    NProgress.set(0.4);
    next();
})
// 后至导航守卫
router.afterEach((to, from) => {
    NProgress.done();
})


export default router