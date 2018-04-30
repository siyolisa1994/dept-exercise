describe('likedBy', function(){

    it('should count the total of likes of Lindani', function(){
        assert.equal('Liked by l, i and 3 others', likedBy('likes'));
    });

    it('should return likes which are more than 5', function(){
        assert.equal(( 'Liked by 0,   and 5 others'), likedBy('0 likes'));

      });

      it('should return likes of liwa and lindani', function(){
        assert.equal(likedBy(["Liwa", "Lindani"]), "Liked by Liwa and Lindani");
});
});
