describe('grandTotal', function(){

    it('should add the total of the department  ', function(){

var  depts= [{name : 'toiletries', total : 5007},
      {name : 'groceries', total: 11089},
      {name : 'phamacy', total : 7321},
      {name : 'butchery', total : 9053},
      {name : 'bakery', total : 10073}]

  assert.deepEqual(grandTotal(depts),42543)


});
it('should calculate the lowest profit',function(){
var depts = [
            {"name":"Butchery","total":9053},
            {"name":"Bakery","total":10073},
            {"name":"groceries","total":11089},
            {"name":"phamacy","total":7321},
            {"name":"toiletries","total":5007}]

assert.deepEqual(grandTotal(5007,(depts)))

  });

    it('should check the department made correct calculation  ', function(){

var  total=[{name : 'toiletries', total : 5007},
      {name : 'groceries', total: 11089},
      {name : 'phamacy', total : 7321},
      {name : 'butchery', total : 9053},
      {name : 'bakery', total : 10073}]

  assert.deepEqual(grandTotal(total),42543)

    });
});
