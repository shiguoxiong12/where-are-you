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
          <div class="area list" v-for="(parent,index) in city" :key="index" :ref="parent.name">
             <div class="title border-topbottom">{{parent.name}}</div>
             <div class="cityList" v-for="(item,index) in parent.val" :key="index">
                 <router-link :to="`/?city=${item.name}`">
                     <div class="item">{{item.name}}</div>
                 </router-link>
                
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
                   @touchstart="handler1($event,index)"
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
                startMove:false,
                scrolY:0,
                
            }
        },
        created(){
           axios.get('/api/city.json').then((data)=>{
               this.city=formater(data.data.city)
           })
        },
        mounted(){
            setTimeout(()=>{
               this.init()
            },1000)  
        },
        watch:{
          scrolY(newV,oldV){
              this.scrolY=newV
              for(let i=0;i<this.divHeight.length;i++){
                  let curent=this.divHeight[i]+40
                  let nextC=this.divHeight[i+1]-40
                  if(curent<Math.abs(newV)&&Math.abs(newV)<nextC){
                      this.current=i
                  }
              }
              
          }
        },
        methods:{
           handler1(e,index){
                 this.startMove=true
                 this.current=index
                 const curr=e.target.innerText;
                 const el=this.$refs[curr][0]
                 this.scroll.scrollToElement(el)     
           },
           calculate(arr,index){
              let val=0
               if(index==0){
                  val=arr[0]
               }else{
                   for(var a=0;a<=index;a++){
                    val+=arr[a]
                  }
               }
              
               return val;
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
              console.log(this.divHeight)
                let wrapper = this.$refs.wraper
                this.scroll = new BetterScroll(wrapper,{
                   click:true,
                   tap:true,
                   probeType:2
               })
               this.scroll.on('scroll',(e)=>{
                   this.scrolY=e.y; 
                  
               })
           }
        },
        computed:{
            cityArr(){
               let arr=[]
               this.city.map((i)=>{
                 arr.push(i.name)
               })
               return arr;
            },
            divHeight(){
                let height=[];
                let content=document.querySelectorAll("#content .list")
                 content.forEach((i)=>{
                    height.push(i.offsetTop)
                 })
                //  let wraper=[]
                // for(var i=0;i<height.length;i++){
                    
                //     wraper.push(this.calculate(height,i))
                // }
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
            color #fff
            .router-link-active
              color #666
            a 
               text-direction none
           .item
              height .6rem
              padding-left .1rem
              color #666
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