<template>
    <div class="registerContainer">
       <h1>阿里巴巴  --{{msg}}</h1>
    </div>
</template>

<script>
import Goods from "@api/goods.js"
console.log(Goods);
    export default {
        data(){
            return{
                msg:"淘宝"
            }
        }
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