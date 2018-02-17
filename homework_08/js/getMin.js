var c = true;
var arr = [];

while (c === true) {
	arr.push(Number(prompt("Введіть числа для порівняння", 5))); 

	var c = confirm("Продовжити ввід числа для порівнняння ?");
		if (!c) {
			console.log(getMin(arr));
		}
}

function getMin(arr) {
  var len = arr.length, min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
};
