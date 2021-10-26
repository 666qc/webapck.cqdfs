
import Vue from "vue";
import router from '@/router/router.js'

// 创建App组件
import App from "./App.vue";

// 创建vue根组件
new Vue({
    router, 
    render:(h)=> h(App)
}).$mount('#app')