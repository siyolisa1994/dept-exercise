describe('mostProfitable',function(){

it('should determine which of their department are most profitable',function(){
var most = [
            {"name":"Butchery","total":6001},
            {"name":"Bakery","total":7801},
            {"name":"Fresh fruits","total":4519}]

assert.deepEqual(mostProfitable('Bakery',(most)))


});
it('should calculate the lowest profit',function(){
var most = [
            {"name":"Butchery","total":6001},
            {"name":"Bakery","total":7801},
            {"name":"Fresh fruits","total":4519}]

assert.deepEqual(mostProfitable('Fresh fruits',(most)))


  });
  it('should calculate the total of the department',function(){
  var most = [
              {"name":"Butchery","total":6001},
              {"name":"Bakery","total":7801},
              {"name":"Fresh fruits","total":4519}]

  assert.deepEqual(mostProfitable(18321,(most)))


    });

});
