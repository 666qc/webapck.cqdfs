<template>
    <div class="tx">
        <h1>腾讯组件   --{{mse}}</h1>
        <router-link to="/Tencent/wzry">王者荣耀</router-link>

        <router-link to='/Tencent/yxlm'>英雄联盟</router-link>s
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                mse:"王者荣耀"
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tx{
        background-color: sandybrown;
    }
</style>