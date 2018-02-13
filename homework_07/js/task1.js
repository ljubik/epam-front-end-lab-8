
var N = parseFloat(prompt("Введіть число N від 0 до 20")); 
var P = "[~]";

if ( N > 0 && N <= 20 ) {
	let i = 1;
	let j = 1;
		while (i <= N) {
			
		    console.log(i);	
			console.log(P);	
			++P
		
			//alert( i );
		i++;
		}
	//console.log(P + "\n");
	
} 

else {
	console.error("Невірні дані " + N);
}

