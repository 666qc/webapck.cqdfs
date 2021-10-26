<template>
    <div>
        <h1>百度一哈   - - {{msg}}</h1>
    </div>
</template>

<script setup>
import User from "@/api/user.js"
import Goods from "@/api/goods.js"
console.log(User,Goods);
    export default{
        data(){
            return{
                msg:"百度地图"
            }
        }
    }
    
</script>

<style lang="less" scoped> 
    @wdth:300px;
    div{
        width:@wdth ;
        height: 100px;
        border: 1px solid red;
    }
</style>