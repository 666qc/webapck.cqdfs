<template>
    <div class="tx">
        <h1>腾讯组件 </h1>
        <router-link to="/Tencent/KingGlory" class="de-underline">王者荣耀</router-link>
        <router-link to='/Tencent/LOL' class="de-underline">英雄联盟</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="scss" scoped>
    .tx{
        background-color: rgb(123, 96, 244);
    }
</style>
