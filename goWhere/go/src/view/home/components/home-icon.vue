<template>
    <div class="icon">
          <swiper :options="swiperOption">
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
        data(){
            return{
                swiperOption:{
                    pagination:{
                      el:".swiper-pagination"
                    }  
                },
                iconList:[
                    {
                        id:'0001',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        desc:'景点门票'
                    },
                    {
                        id:'0002',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/f5/a963333e1fa802.png',
                        desc:'本地玩乐'
                    },
                    {
                        id:'0003',
                        imgUrl:'https://img1.qunarzz.com/piao/fusion/1811/1d/c46140e32fffa502.png',
                        desc:'去哪臻选'
                    },
                    {
                        id:'0004',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                        desc:'一日游'
                    },
                    {
                        id:'0005',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                        desc:'游乐场'
                    },
                    {
                        id:'0006',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
                        desc:'泡温泉'
                    },
                    {
                        id:'0007',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                        desc:'南昌必游'
                    },
                    {
                        id:'0008',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/ec/0e1e0238e24ba02.png',
                        desc:'婺源'
                    },
                    {
                        id:'0009',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        desc:'景点门票'
                    },
                    {
                        id:'00010',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        desc:'景点门票'
                    },
                    {
                        id:'00011',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        desc:'景点门票'
                    },
                    {
                        id:'00012',
                        imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        desc:'景点门票'
                    }
                ]
            }
        },
        computed:{
            pages(){
                console.log(this.iconList)
                let pages=[]
                this.iconList.forEach((element,index) => {
                   const page=Math.floor(index/8)
                   if(!pages[page]) {
                      pages[page]=[] 
                   }

                 pages[page].push(element)
                   
                });
                console.log(pages)
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