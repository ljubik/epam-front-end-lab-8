var Num = prompt("введіть число", "321");

function reverseNumber(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverseNumber(Num));
