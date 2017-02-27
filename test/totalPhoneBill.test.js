describe('The totalPhoneBill function', function(){

    it('should return the totalPhoneBill for the data provided', function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45')
    });

	
});
