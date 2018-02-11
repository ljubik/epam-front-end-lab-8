const USD = 27.12402300;
const EUR = 33.23235300;

var amountEUR = prompt("введіть суму EUR", "");
var amountUSD = prompt("Введіть суму USD", "");


if (amountUSD >= 0  || amountEUR >= 0){
	console.log(amountEUR +" Євро еквівалентно " +((EUR * amountEUR).toFixed(2)) +" гривні " +amountUSD +" Долара (ів) еквівалентно " +((USD * amountUSD).toFixed(2)) +" гривні одне Євро еквівалентно " +((EUR/USD).toFixed(4)) +" долара (м)");
	alert(amountEUR +" Євро еквівалентно " +((EUR * amountEUR).toFixed(2)) +" гривні " +amountUSD +" Долара (ів) еквівалентно " +((USD * amountUSD).toFixed(2)) +" гривні одне Євро еквівалентно " +((EUR/USD).toFixed(4)) +" долара (м)");
}

else if (typeof(amountUSD) !== "number"  || typeof(amountEUR) !== "number"){
	console.log("Введіть вірні дані");
	alert("Введіть вірні дані");

}

else {
	console.log("Введіть вірні числові дані");
	alert("Введіть вірні числові дані");
}
