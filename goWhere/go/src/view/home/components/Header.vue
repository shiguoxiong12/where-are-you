<template>
    <div class="header">
        <div class="headerLeft">
            <div class="iconfont">&#xe624;</div>
        </div>
        <div class="input">
            <span class="iconfont">&#xe632;</span> 输入城市景点游玩主题</div>
            <router-link to="/city">
                <div class="headerRight ">
                    {{city}}
                    <span class="iconfont right-icon">&#xe64a;</span>
                </div>
            </router-link>
      
    </div>
</template>

<script>
    export default {
        props:["city"]
    }
</script>

<style lang="stylus" scoped>
@import '~@/assets/veribles.styl'
.header
  font-size 14px
  width 100%
  color #fff
  text-align center
  line-height .86rem
  background-color $bgColor
  display flex
  .headerLeft
      width:.86rem;
      float:left;
   .input
      flex 1
      background-color #fff
      border-radius 5px
      height .64rem
      padding-left .2rem
      margin-left .2rem
      text-align left
      margin-top .12rem
      color #ccc
      line-height .64rem
 .headerRight
      width:1.24rem;
      float:right
      color #fff
      .right-icon
        font-size .24rem
</style>