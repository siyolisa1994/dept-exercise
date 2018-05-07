describe('mostProfitableDay function', function(){

    it('should check a day which come more than once',function(){

            var days = [
            {
                name : "Bakery",
                total : 7801,
                day : "Monday",
            },{
                name : "Butchery",
                total : 4426,
                day : "Tuesday",
            },{
                name : "Bakery",
                total : 9976,
                day : "Tuesday",
            },{
                name : "Pharmacy",
                total : 5648,
                day : "Friday",
            }];
  assert.deepEqual(mostProfitableDay(days),"Tuesday" );
});
it('should determine which of day made the most profit',function(){
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
      total : 56481,
      day : "Friday",
  }];
  assert.equal(mostProfitableDay(days), 'Friday');

});

});
