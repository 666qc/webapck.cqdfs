
import Vue from "vue";
import router from '@/router/router.js' // 导入路由
import "@/filter/filter.js"; // 导入过滤器
import App from "./App.vue"; // 创建App组件

// 创建vue根组件
new Vue({
    router, 
    render:(h)=> h(App)
}).$mount('#app')