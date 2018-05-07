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

    it('should check the department which come more than once',function(){
            assert.equal(mostProfitableDay('name'),'' );
});
it('should determine which of day made the most profit',function(){
  assert.equal(mostProfitableDay(days), 'Tuesday');

});

});
