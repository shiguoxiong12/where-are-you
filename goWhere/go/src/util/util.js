export const formater=(data)=>{
   let newCity={}
   let sortCity=[]
   data.forEach(item=>{
       
       let n=item.pinyin.charAt(0);
       if(!newCity.hasOwnProperty(n)){
           newCity[n]=[]
       }else{
           newCity[n].push(item)
       }
   })
  
   Object.keys(newCity).forEach(function(key){
       var a={'name':'','val':''}
       a['name']=key
       a['val']=newCity[key]
     
    sortCity.push(a)

});
sortCity=sortCity.sort((a,b)=>{
    return a.name.charCodeAt()-b.name.charCodeAt()
})

    return sortCity
}