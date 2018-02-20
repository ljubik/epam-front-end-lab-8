var myArray = new Array()
myArray[0] = 1
myArray[1] = 22
myArray[2] = 333
myArray[3] = 4444
myArray[4] = 55555


function getFilteredArray(a, b, predicateFunction)
{
		if(a.length > b.length) return 1;
		else
			if(a.length = b.length) return 0;
			else return -1;
			forEach(myArray, predicateFunction);
			console.log(myArray);
			
};



function predicateFunction(num) { 
return num > 3;
}; // returns boolean value

getFilteredArray([1, 7, 20], predicateFunction); // -> [7, 20]

myArray.sort(getFilteredArray);
alert('сортування по довжині:\n\n' + myArray.join('\n'))

myArray.sort();
alert('сортування по алфавіту:\n\n' + myArray.join('\n'))


myArray.reverse();
alert('сортування в зворотньому порядку:\n\n' + myArray.join('\n'))

