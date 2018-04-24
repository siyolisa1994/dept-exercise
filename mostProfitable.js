function mostProfitable(list){
  var most = [];
  for(var i=0; i<list.length; i++){
    most.push(list[i].total)
    var total = Math.max.apply(null, most)
    if(total === list[i].total){
      console.log(total)
      var dept = list[i].name;
    }
  }
//console.log(dept);
  return dept;
}
