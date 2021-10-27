<template>
    <div class="rounded-corners">
        <h1>百度一哈   - - {{msg}}</h1>
         <button @click="qq" class="top-margin">发送请求</button>
    </div>
</template>

<script setup>
import { getData } from "@/api/index.js"; //
 
    export default{
        data(){
            return{
                msg:"百度地图"
            }
        },
        methods:{
            async qq(){
                let data = await getData()
                console.log(data); 
            } 
            
        }
    }
    
</script>

<style lang="less" scoped> 

    @wdth:400px;
    div{
        margin-top: 10px;
        width:@wdth ;
        height: 100px;
        border: 1px solid red;
        
    }
 
</style>