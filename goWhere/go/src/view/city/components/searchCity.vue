<template>
    <div class="searchCity">
      
             <div class="cityList" v-for="(item,index) in filterList" :key="index">
                 <div class="item">{{item.name}}</div>
             </div>
         
    </div>
</template>

<script>
    export default {
        props:{
            filterList:{
               type:Array
            }
            
        }
    }
</script>

<style lang="stylus" scoped>
.searchCity
         width 100%
         font-size .26rem
        .button-wraper
            text-align center
            overflow hidden
            padding .1rem .6rem .1rem .1rem
            .button-list
              padding .1rem .1rem
              width 33.3%
              float left
              .button
                 line-height .5rem
                 border 1px solid #ccc
                 border-radius 4px   
         .cityList
            padding .1rem .6rem .1rem .1rem
           .item
              height .6rem
              padding-left .1rem
              border-bottom 1px solid #ccc
</style>