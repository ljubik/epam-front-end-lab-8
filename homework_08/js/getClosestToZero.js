function getClosestToZero() {
	
	var Arr = Array.from(arguments), res = Infinity;
		
		Arr.forEach(nom => {
			
			res = Math.abs(nom) < Math.abs(res) ? nom : res;
	}); 
	
return res;

}