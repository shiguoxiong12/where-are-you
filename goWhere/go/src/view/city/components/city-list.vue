<template>
    <div class="list" style="height:600px" ref="wraper">
        <div id="content">
         <div class="area">
             <div class="title  border-topbottom">当前城市</div>
                <div class="button-wraper">
                    <div class="button-list">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-list">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-list">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-list">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-list">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-list">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-list">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-list">
                        <div class="button">北京</div>
                    </div>
                </div>
            
             </div>
         <div class="area">
             <div class="title  border-topbottom">热门城市</div>
             <div class="button-wraper">
                 <div class="button-list">
                    <div class="button">北京</div>
                 </div>
                  <div class="button-list">
                    <div class="button">北京</div>
                 </div>
                  <div class="button-list">
                    <div class="button">北京</div>
                 </div>
                 <div class="button-list">
                    <div class="button">北京</div>
                 </div>
                 <div class="button-list">
                    <div class="button">北京</div>
                 </div>
                 <div class="button-list">
                    <div class="button">北京</div>
                 </div>
                 <div class="button-list">
                    <div class="button">北京</div>
                 </div>
                 <div class="button-list">
                    <div class="button">北京</div>
                 </div>
             </div>
            
         </div>
          <div class="area" v-for="(parent,index) in city" :key="index" :ref="parent.name">
             <div class="title border-topbottom">{{parent.name}}</div>
             <div class="cityList" v-for="(item,index) in parent.val" :key="index">
                 <div class="item">{{item.name}}</div>
               
             </div>
          </div>
       
          </div>
            <div class="area cityArr" ref="cityArr">
              <ul ref="ul">
                  <li v-for="(item,index) in cityArr"
                   :key="index"
                   :class="{active:index==current}" 
                   :index="index"
                   :ref="item+index" 
                   @click="handler1($event,index)" 
                   @touchstart="start"
                   @touchmove="move"
                   @touchend="end"
                   >{{item}}</li>
              </ul>
          </div>
    </div>
</template>

<script>
   import axios from 'axios'
   import {formater} from  '../../../util/util.js'
   import BetterScroll from "better-scroll"
    export default {
        data(){
            return{
                city:[],
                current:0 ,
                scroll:{},
                startMove:false
            }
        },
        created(){
           axios.get('/api/city.json').then((data)=>{
               this.city=formater(data.data.city)
           })
           setTimeout(()=>{
            
           },1000)
        },
        mounted(){
            setTimeout(()=>{
               this.init()
            },1000)  
        },
        methods:{
           handler1(e,index){
                  this.current=index
                  const curr=e.target.innerText;
                  const el=this.$refs[curr][0]
                  this.scroll.scrollToElement(el)     
           },
           start(){
                  this.startMove=true
           },
           move(e){
              if(this.startMove){
                   const Y=this.$refs.cityArr.offsetTop;
                   const moveY=e.touches[0].clientY-Y-68;
                   const index=Math.floor(moveY/22)
                   this.current=index
                   const m=this.cityArr[index]
                   const el=this.$refs[m][0]
                   this.scroll.scrollToElement(el)

                } 
           },
           end(){
               this.start=false
           },
           init(){
               let wrapper = this.$refs.wraper
                this.scroll = new BetterScroll(wrapper,{
                   click:true,
                   tap:true,
                   probeType:2
               })
               this.scroll.on('scroll',(e)=>{
                   let y=e.y; 
                   console.log(y)
               })
           }
        },
        computed:{
            cityArr(){
               let arr=[]
              this.city.map((i)=>{
                 arr.push(i.name)
               })
               console.log(arr)
               return arr;
            },
            divHeight(){
                let height=[];
                let content=document.querySelectorAll("#content .area")
                 content.forEach((i)=>{
                    height.push(i.offsetTop)
                 })
                 return height;
            }
        }
    }
</script>

<style lang="stylus" scoped>
.active
   color red 
.border-topbottom
   
   &:before 
     border-color:#777
   &:after
     border-color:#777
.list
    font-size .26rem
    line-height .44rem
    color #666
    position relative
    left 0
    top 0
    bottom 0
    right 0
    overflow hidden     
    .title
       padding .1rem 0 
       padding-left .2rem
       background-color #eee
    .area
         width 100%
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
     .cityArr
           width auto
           padding-left 0
          
           position absolute
           right .2rem
           top 1rem
           z-index 9     
           ul 
               list-style none    
</style>