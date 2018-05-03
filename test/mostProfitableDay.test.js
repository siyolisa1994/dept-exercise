describe('mostProfitableDay function', function(){
var days = [
{
    name : "Bakery",
    total : 7801,
    day : "Monday",
},{
    name : "Butchery",
    total : 4426,
    day : "Wednesday",
},{
    name : "Bakery",
    total : 9976,
    day : "Tuesday",
},{
    name : "Pharmacy",
    total : 5648,
    day : "Friday",
}];
it('should determine the day made a lowest profit',function(){
      assert.notEqual(mostProfitableDay(days),'Wednesday' );
    });
    it('should check the department which come more than once',function(){
            assert.notDeepEqual(mostProfitableDay(days),'Bakery' );
});
it('should determine which of day made the most profit',function(){
  assert.equal(mostProfitableDay(days), 'Tuesday');

});

});
