describe('grandTotal', function(){

    it('should add the total of the department  ', function(){

var  depts= [{name : 'toiletries', total : 5007},
      {name : 'groceries', total: 11089},
      {name : 'phamacy', total : 7321},
      {name : 'butchery', total : 9053},
      {name : 'bakery', total : 10073}]

  assert.deepEqual(grandTotal(depts),42543)

});

    it('should check the department made correct calculation  ', function(){

var  depts=[{name : 'toiletries', total : 5007},
      {name : 'groceries', total: 11089},
      {name : 'phamacy', total : 7321},
      {name : 'butchery', total : 9053},
      {name : 'bakery', total : 10073}]

  assert.deepEqual(grandTotal(depts),42543)

    });
});
