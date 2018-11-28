<template>
    <div>
       <homeHead/>
    </div>
</template>

<script>
import homeHead from './components/Header.vue'
    export default {
        data(){
            return{
               header:""
            }
        },
        components:{
            homeHead
        }
    }
</script>

<style scoped>

</style>