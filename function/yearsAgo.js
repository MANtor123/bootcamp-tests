var yearsAgo = function (previousYear){

	var today = new Date()
	var currentYear = today.getFullYear ()
	var year = currentYear - previousYear
	console.log (year);
  
	return year;  
};

yearsAgo ('2010');
