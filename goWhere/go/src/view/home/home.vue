<template>
    <div id="app">
       <homeHead/>
       <swiper :swiperList="swiperList"/>
       <icon/>
       <div class="split"></div>
       <recommend/>
       <Love/>
       <weekEnd/>
    </div>
</template>

<script>
import homeHead from './components/Header.vue'
import swiper from './components/swiper.vue'
import icon from './components/home-icon.vue'
import recommend from './components/recommend.vue'
import Love from './components/love.vue'
import weekEnd from './components/weekend.vue'
    export default {
        data(){
            return{
               header:"",
               swiperList:[
                   "http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg",
                   "http://img1.qunarzz.com/piao/fusion/1811/d4/9f89c513c1f96402.jpg_750x200_77a1242f.jpg",
                   "http://img1.qunarzz.com/piao/fusion/1811/4d/6706bf772c05ce02.jpg_750x200_773e75f0.jpg"
               ]
            }
        },
        components:{
            homeHead,
            swiper,
            icon,
            recommend,
            Love,
            weekEnd
        }
    }
</script>

<style scoped>
#app{
    font-size: 16px;
}
.split{
    height:10px;
    background-color:#f5f5f5;
}
</style>