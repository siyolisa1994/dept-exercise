describe('mostProfitableDepartment function', function(){
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
it(' determine which department is the most profitable', function(){
      assert.deepEqual(mostProfitableDepartment(dataset),'Bakery' );
    });
      it('should add the total of the departments', function(){
            assert.deepEqual(mostProfitableDepartment('total'),'' );

});

});
