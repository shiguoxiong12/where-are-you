<template>
    <div id="app">
       <homeHead :city="homeInfo.city"/>
       <swiper :swiperList="homeInfo.swiperList"/>
       <icon  :iconList="homeInfo.iconList"/>
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
import axios from 'axios'
    export default {
        data(){
            return{
               homeInfo:{}
              
            }
        },
        components:{
            homeHead,
            swiper,
            icon,
            recommend,
            Love,
            weekEnd
        },
        mounted(){
            this.getHomeInfo()
        },
        methods:{
            getHomeInfo(){
                axios.get('/api/index.json').then((data)=>{
                  
                    if(data.data.ret=="true") {this.homeInfo=data.data.data}
                      console.log(this.homeInfo)
                }) 
            }
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