var isWeekday = function (day) {
console.log(day)
var weekend = day.startsWith ("S")
var weekday = !day.startsWith ("S")

return weekday;  

};

isWeekday("Sunday")
