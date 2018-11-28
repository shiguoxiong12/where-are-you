<template>
    <div>
       <homeHead/>
       <swiper :swiperList="swiperList"/>
       <icon/>
    </div>
</template>

<script>
import homeHead from './components/Header.vue'
import swiper from './components/swiper.vue'
import icon from './components/home-icon.vue'
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
            icon
        }
    }
</script>

<style scoped>

</style>