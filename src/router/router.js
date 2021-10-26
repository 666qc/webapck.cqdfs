import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter); // 必须安装到Vue框架中


import Baidu from '@/components/Baidu.vue'
import Tencent from '@/components/Tencent.vue'
import Alibaba from '@/components/Alibaba.vue'
import wzry from '@/components/wzry.vue'
import yxlm from '@/components/yxlm.vue'
let router = new VueRouter({
    routes:[ 
        { path: "/Baidu", component: Baidu },
        { path: "/Alibaba", component: Alibaba },
        { 
            path: "/Tencent", component: Tencent,
            children: [
                { path: 'wzry', component: wzry },
                { path: 'yxlm', component: yxlm },
            ]
        },
     ]
})



export default router