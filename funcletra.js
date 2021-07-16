function arraynumber() {
	var numeros = document.getElementById('nmb').value;
	var arraynumeros = numeros.split(",");
	var i = 0;
	var j = 0;
	var contador = 0;
	var repetidos = [];
	var breakpoint;
 
	if(arraynumeros.indexOf("0") != -1){
		breakpoint = arraynumeros.indexOf("0");
	}
	else {
		breakpoint = arraynumeros.length;
	}
 
 
	for (i=0; i<arraynumeros.length; i++){
		for (j=0; j<arraynumeros.length; j++){
			if (parseInt(arraynumeros[i]) == parseInt(arraynumeros[j])) {
				contador = contador + 1;
			}
		}
		if (contador > 1 && repetidos.indexOf(parseInt(arraynumeros[i])) == -1){
			repetidos.push(parseInt(arraynumeros[i]));
			document.getElementById("contador").innerHTML = ("El numero " + arraynumeros[i] + " se repite " + contador + " veces");
			contador=0;
		}
		contador=0;
	}
}