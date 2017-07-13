// Reduce() executes a provided function for each value of the array (from left-to-right)
// The return value of the function is stored in an accumulator (result/total).
var word = ['Hi', 'how', 'are', 'you'].reduce(function(accumulator, letter){
	return accumulator + ' ' + letter;
});

console.log(word);
// Functional programming - Is the process of building software by composing pure functions