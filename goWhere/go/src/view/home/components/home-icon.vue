<template>
    <div class="icon">
          <swiper :options="swiperOption" v-if="pages">
               <swiper-slide v-for="(page,index) in pages" :key="index">
                    <div class="iconItem" v-for="item in page" :key="item.id">
                        <div class="icon-img">
                            <img class="icon-imageconent" :src="item.imgUrl" alt="">
                        </div>
                        <p class="icon-desc">{{item.desc}}</p>
                    </div>
               </swiper-slide>
                  <div class="swiper-pagination"  slot="pagination"></div>
           </swiper>
    </div>
</template>

<script>
    export default {
        props:["iconList"],
        data(){
            return{
                swiperOption:{
                    pagination:{
                      el:".swiper-pagination"
                    }  
                },
              
            }
        },
        computed:{
            pages(){
                let pages=[]
                this.iconList && this.iconList.forEach((element,index) => {
                   const page=Math.floor(index/8)
                   if(!pages[page]) {
                      pages[page]=[] 
                   }
                   pages[page].push(element)  
                });
                return pages;
            }
        }
    }
</script>

<style lang="stylus"  scoped>
.icon>>>.swiper-container
   
   height 0
   font-size:14px
   overflow hidden
   padding-bottom 55%
.iconItem
      overflow hidden
      width 25%
      height 0
      float left
      position relative
      padding-bottom 25%
      .icon-img
        position absolute
        left 0
        top 0
        right 0
        bottom .44rem
        padding .1rem
        text-align center
        .icon-imageconent
             height 100%
      .icon-desc
         position absolute
         left 0
         right 0
         bottom 0
         text-align center
</style>