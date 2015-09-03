var entrar = 0;
var altura = 100;

if (altura > 50 && altura < 100){
	entrar = 1;
}else if(altura > 100 && altura < 150){
	entrar = 2;
}

console.log(entrar)



function doble(x){
	x = x * x;
	return x;
}
x = doble(2);

var y = 1;
for (x = 0; x < 10; x++){
	y++;
	x = x + y;
}
x 

________________________________________________________________________

var n = 2;
var no = "no";
while(n){
	no += no;
	n-= 1;
	console.log(n);
	console.log(no);
}

no;