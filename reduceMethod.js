// Reduce() executes a provided function for each value of the array (from left-to-right)
// The return value of the function is stored in an accumulator (result/total).
var sum = [40, 10, 50].reduce(function(total, num) { // Callback - function as parameter
		return total + num;
	}, 0);

console.log(sum);

// array.reduce(function(accumulator, item), 0); the 0 initializes thr accumulator in 0
// array.reduce(function(accumulator, item), 0); the first param accumulator have the aculation of the sum
// array.reduce(function(accumulator, item), 0); the second param is each item of the array

// Functional programming - Is the process of building software by composing pure functions