// Reduce() executes a provided function for each value of the array (from left-to-right)
// The return value of the function is stored in an accumulator (result/total).
var sum = [40, 10, 50].reduce(function(total, num) { // Callback - function as parameter
		return total + num;
	}, 0);

console.log(sum);

// Functional programming - Is the process of building software by composing pure functions