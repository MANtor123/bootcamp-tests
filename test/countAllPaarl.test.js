describe('The countAllPaarl function', function(){

    it('should find out if the parameter passed in starts with 'CJ', function(){
        assert.equal(isFromPaarl('CJ'), true);
    });
    it('should find out if the parameter passed in is a reg number from paarl', function(){
       assert.equal(isFromBellville('CF'), false);

    });
});
