describe('The fromWhere function', function(){

    it('should find out if the parameter passed in is a reg number from Bellville', function(){
        assert.equal(isFromBellville('CY'), true);
    });
    it('should find out if the parameter passed in is a reg number from Paarl', function(){
       assert.equal(isFromBellville('CJ'), false);

    });



	it('should find out if the parameter passed in is a reg number from Cape Town', function(){
       assert.equal(isFromBellville('CA'), false);

    });
	it('should find out if the parameter passed in is a reg number from some other place!', function(){
       assert.equal(isFromBellville('CL'), false);

    });


});
