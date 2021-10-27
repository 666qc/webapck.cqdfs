
<template>
    <div>
        <h1>万恶的资本主义</h1>
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

<style lang="scss" >
@import "./assets/scss/public.scss";
// 当前路由高亮显示：
.router-link-active {
    border-bottom: 2px solid rgb(98, 0, 255);
    
}
a{
    text-decoration:none;
    color: #000;
}
</style>