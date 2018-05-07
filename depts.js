
var toiletriesDept ={ name: "toiletries", total: 5007};
var groceriesDept ={ name: "groceries", total: 11089};

var phamacyDept ={ name: "phamacy",total: 7321};

var bakeryDept ={ name: "bakery", total: 10073};
var butcheryDept ={ name: "butchery", total: 9053};

/*
console.log(toiletriesDept.name);
console.log(groceriesDept.name);
console.log(phamacyDept.name);
console.log(bakeryDept.name);
console.log(butcheryDept.name);
*/
var depts = [];

depts.push(toiletriesDept);
depts.push(groceriesDept);
depts.push(bakeryDept);
depts.push(phamacyDept);
depts.push(butcheryDept);

function grandTotal(depts){
  console.log(depts);
  var total= 0;
for (var i = 0; i < depts.length;i++){
  total += (depts[i].total);
  /*
console.log(depts[i].total);
console.log(depts[i].name);
}
*/
}
console.log(total);
return total;
}
grandTotal(depts)
