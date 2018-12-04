<template>
    <div class="city">
        <div class="searchBox">
        <div class="head">
            <router-link to="/"><div class="iconfont header-back">&#xe624;</div></router-link>
            城市选择
        </div>
        <div class="secrch">
            <input type="text" class="search-input" v-model="input" placeholder="输入城市名或拼音" @input="searchOne($event)">
        </div>
         </div>
        <list v-if="!input"/>
    
        <searchCity v-else-if="filterList.length>0" :filterList="filterList"/>
        <div v-else class="filterNo">暂无数据...........</div>
    </div>
</template>

<script>
   import list from './components/city-list.vue'
   import searchCity from './components/searchCity.vue'
   import axios from 'axios'
   import {formater} from  '../../util/util.js'
    export default {
        data(){
           return{
               search:false,
               input:"",
               searchList:[],
           }
        },
        created(){
           axios.get('/api/city.json').then((data)=>{
              
               this.searchList=data.data.city

           })
        },
        components:{
            list,
            searchCity
        },
        computed:{
           filterList(){
                 return this.searchList.filter((val)=>{
                     return val.pinyin.indexOf(this.input)>-1 || val.name.indexOf(this.input)>-1
                 })
           }
        },
        methods:{
             listenChange(e){
              console.log(e)
           },
           searchOne(e){
               console.log(e)
           }
        }
    }
</script>

<style lang="stylus" scoped>
.searchBox
   
    .head
        height .68rem
        color #fff !important
        position relative
        background-color #00bcd4
        font-size 14px
        text-align center
        line-height .68rem
        .header-back
            position absolute
            left .2rem
            color #fff

    .secrch   
        font-size:14px
        height .68rem
        background-color #00bcd4
        padding .1rem
        .search-input
            width 100%
            height 100%
            border 0
            outline none
            border-radius 2px
            padding :0 .1rem
            text-align center
            color #66666    
.filterNo
      font-size 14px
      text-align center
      line-height .68rem
      padding 10px
</style>