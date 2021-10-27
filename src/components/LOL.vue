<template>
    <div>
        <h3>英雄联盟</h3>
        <div>当前时间：{{ date | dateFormat  }}</div>
        <div>当前时间：{{ time | unixFormat }}</div>    
    </div>
</template>

<script setup>

    export default {
        name:"LOL",
        data(){
            return {
                date: new Date(),
                time: parseInt( Date.now() / 1000 )
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>