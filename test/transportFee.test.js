describe('The transportFee function', function(){

    it('should return R20 if === morning', function(){
        assert.equal(transportFee('morning'), 'R20');
    });
    it('should return R10 if === afternoon', function(){
       assert.equal(transportFee('afternoon'), 'R10');

    });



	it('should return free if === night', function(){
       assert.equal(transportFee('night'), 'free');

    });
});
