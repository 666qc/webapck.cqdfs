
<template>
    <div>
        <h1>app 根组件</h1>
         <router-link to='/Baidu'>百度</router-link>
         <router-link to='/Alibaba'>阿里巴巴</router-link>
         <router-link to='/Tencent'>腾讯</router-link>

         <router-view></router-view>
    </div>
</template>

<script>

    export default {
         name:"App"
    }

</script>

<style lang="scss" scoped>

</style>