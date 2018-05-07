describe('mostProfitable',function(){

it('should determine which of their department are most profitable',function(){
var most = [
            {"name":"Butchery","total":6001},
            {"name":"Bakery","total":7801},
            {"name":"Fresh fruits","total":4519}]

assert.deepEqual(mostProfitable(most), 'Bakery')


});
it('should determine the department which has a highest total',function(){
var list = [
            {"name":"Butchery","total":60012},
            {"name":"Bakery","total":7801},
            {"name":"Fresh fruits","total":4151}]

assert.deepEqual(mostProfitable(list), "Butchery")




  });
  it('should calculate the total of the most profit list',function(){
 var list = [
             {"name":"Butchery","total":6001},
             {"name":"Bakery","total":7801},
             {"name":"Fresh fruits","total":451911}]

 assert.deepEqual(mostProfitable(list), "Fresh fruits")


    });

});
