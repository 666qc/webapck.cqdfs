<template>
    <div class="registerContainer">
       <h1>阿里巴巴  </h1>
    
       <router-link to='/Alibaba/Taobao'>淘宝</router-link>
               <router-view></router-view>
                 
    </div>
</template>

<script>
    export default {
        name:"Alibaba"
    }
</script>

<style lang="scss" scoped>
    $backClor:rgb(16, 223, 126);
    .registerContainer{
            border-radius: 50%;
            width: 200px;
            height: 200px;
            text-align: center;
            background-color: $backClor;
            box-shadow:  20px rgb(68, 24, 230);
            transform: translateX(10px);
    }
</style>