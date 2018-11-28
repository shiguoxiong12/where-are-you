<template>
    <div class="city">
        <div class="head">
            <router-link to="/"><div class="iconfont header-back">&#xe624;</div></router-link>
            城市选择
        </div>
        <div class="secrch">
            <input type="text" class="search-input" placeholder="输入城市名或拼音">
        </div>
        <list/>
    </div>
</template>

<script>
import list from './components/city-list.vue'
    export default {
        components:{
            list
        }
    }
</script>

<style lang="stylus" scoped>
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
       
       
</style>