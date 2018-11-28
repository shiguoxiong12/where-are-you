<template>
    <div class="swiper">
         <swiper :options="swiperOption" ref="mySwiper" >
            <!-- slides -->
            <swiper-slide v-for="(item,index) in swiperList" :key=index>
                <img class="swiper-img" :src="item"/>
            </swiper-slide>
           
           
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
          
            
  </swiper>
    </div>
</template>

<script>
    export default {
        props:['swiperList'],
        data(){
            return{
               swiperOption:{
                   pagination:{
                       el:".swiper-pagination"
                   },
                   loop:true
               } 
            }
        }
    }
</script>

<style lang="stylus" scoped >
.swiper>>>.swiper-pagination-bullet-active 
   background-color #fff
.swiper
   width 100%              
   height 0
   padding-bottom 28%
   overflow hidden
  .swiper-img
    width 100%;
    height 100%;
</style>