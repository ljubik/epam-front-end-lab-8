function reverseNumber(){
var a,no,b,temp = 0;

var no = Number(prompt("Введіть число"));

b=no;

while(no>0 || no<0)
{
a=no%10;
no=parseInt(no/10);
temp=temp*10+a;
}
alert("результат " + temp);

}