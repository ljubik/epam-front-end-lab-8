var FirstArr = [1, 7, 20];
var TransformArr = [];
var num = 0;
function getTransformedArray(FirstArr, addF){
	TransformArr = FirstArr;
	forEach(TransformArr, addF);
		//return TransformArr;
		console.log(FirstArr, TransformArr);
};

function addF(){
	num = num + 3;
	TransformArr.push((FirstArr)+addF(num));
	return TransformArr;
};
