//parseFloat Функция parseFloat() принимает строку в качестве аргумента и возвращает десятичное число (число с плавающей точкой)
//Метод toFixed() форматирует число, используя запись с фиксированной запятой
var sideA = parseFloat(prompt("Введіть довжину сторони А")); 
var sideB = parseFloat(prompt("Введіть довжину сторони В")); 
var sideC = parseFloat(prompt("Введіть довжину сторони С"));
// p = (a + b + c)/ 2 
var perymeter = (sideA + sideB + sideC)/2;
//S = √(p(p - a)(p - b)(p - c))
var area =  Math.sqrt(perymeter*((perymeter-sideA)*(perymeter-sideB)*(perymeter-sideC)));
//Math.sqrt Метод sqrt возвращает квадратный корень из числа. Если число отрицательно, то возвращается NaN. Примеры:
console.log(area);
var typeOfTriangle;
// || - оператор або,  && - оператор і, Приоритет оператора И && больше, чем ИЛИ ||, так что он выполняется раньше 
// ! - оператор НЕ)
//Больше/меньше: a > b, a < b.
//Больше/меньше или равно: a >= b, a <= b.
//Равно a == b. Для сравнения используется два символа равенства '='. Один символ a = b означал бы присваивание.
//«Не равно». В математике он пишется как ≠, в JavaScript – знак равенства с восклицательным знаком перед ним !=.

if ( sideA * sideA + sideB * sideB == sideC * sideC || sideA * sideA + sideC * sideC == sideB * sideB || sideC * sideC + sideB * sideB == sideA * sideA) {
	typeOfTriangle = "прямокутний рівнобедрий трикутник";
} 

else if (sideA == sideB && sideB == sideC) {
	typeOfTriangle = "рівносторонній трикутник";
} 

else if (sideA == sideB || sideA == sideC || sideB == sideC){
	typeOfTriangle = "рівнобедрий трикутник";
} 

else if (sideA !== sideB && sideA !== sideC && sideB !== sideC) {
	typeOfTriangle = "різнобічний трикутник";
}
//Значение NaN – единственное в своем роде, которое не равно ничему, включая себя isNaN(n) функція, которая преобразует аргумент к числу и возвращает true, если получилось NaN, и false – для любого другого значения
//√10·5·5·0	 = √0= 0  це при умові 5 5 10 та подвоєнні, 5.5.15 не існує

else if (sideA <= 0 || sideB <= 0 || sideC <= 0 || area <= 0 || isNaN(area)) {
	console.log("некоректні дані");
	alert("некоректні дані");
}

else {
	alert("Площа трикутника становить " + area + "Трикутник є " + typeOfTriangle);
	console.log("Площа трикутника становить " + area + ", Трикутник є " + typeOfTriangle);
}



