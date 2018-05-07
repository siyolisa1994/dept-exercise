describe('mostProfitableDepartment function', function(){

it(' determine which department is the most profitable', function(){
  var dataset = [
  {
      name : "Bakery",
      total : 7801
  },{
      name : "Butchery",
      total : 4426
  },{
      name : "Bakery",
      total : 9976
  },{
      name : "Pharmacy",
      total : 5648
  }];
      assert.deepEqual(mostProfitableDepartment(dataset),'Bakery' );
    });
      it('should check the department which made the highest profit', function(){
        var dataset = [
        {
            name : "Bakery",
            total : 7801
        },{
            name : "Butchery",
            total : 4426
        },{
            name : "Bakery",
            total : 9976
        },{
            name : "Pharmacy",
            total : 56481
        }];
            assert.equal(mostProfitableDepartment(dataset),'Pharmacy' );

});

});
