function mostProfitableDepartment(list){
  //console.log(list)
  var store = {};
  var mostPro = "";
  var totalCost = 0;
  for(var i = 0; i < list.length;i++){
    var getName = list[i].name;
    if(store[getName]===undefined){
      store[getName] = 0;
    }
    store[getName]+=list[i].total;
    
    if(store[getName]>totalCost){
    totalCost = store[getName];
      mostPro = getName;
   
    }   
}
//console.log(mostPro);
return mostPro;
}
