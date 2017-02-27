describe('The isFromBellville function', function(){

    it('should find out if the parameter passed in is a reg number from paarl', function(){
        assert.equal(isFromBellville('CY'), true);
    });
    it('should find out if the parameter passed in is a reg number from paarl', function(){
       assert.equal(isFromBellville('CF'), false);

    });
});
