function mostProfitableDay(list){
  //console.log(list)
  var store = {};
  var mostDay = "";
  var totalCost = 0;
  for(var i = 0; i < list.length;i++){
    var getDay = list[i].day;
    if(store[getDay]===undefined){
      store[getDay] = 0;
    }
    store[getDay]+=list[i].total;
    
    if(store[getDay]>totalCost){
    totalCost = store[getDay];
      mostDay = getDay;
   
    }
       
}
//console.log(mostPro);
return mostDay;
}
