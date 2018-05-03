
describe('likedBy',function(){

it('should check there is no likes',function(){

assert.equal(likedBy([]), "0 likes");
});

it('should check it liked by two people ',function(){

assert.equal(likedBy(["Liwa", "Lindani"]), "Liked by Liwa and Lindani");
});

it('should check it liked by  three people ',function(){

assert.equal(likedBy(["Liwa", "Lindani", "Lindelwa"]), "Liked by Liwa and 2 others");

});

it('should check  it liked by five people ',function(){

assert.equal(likedBy(["Liwa", "Lindani", "Lindelwa", "Odwa", "Peter"]), "Liked by Liwa, Lindani and 3 others");

});

});
