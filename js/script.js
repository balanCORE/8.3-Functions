'use strict'

var btnCtoF = document.getElementById('CtoF_btn');
var btnFtoC = document.getElementById('FtoC_btn');

var resultBox = document.getElementById('output');


function CtoF(tempC) {
	var tempF = tempC * 1.8 +32;
	return tempF + " Faranhajt";
};


function waterStatusC(temp) {
	if (temp < 0) {return "woda jest w stanie stałym"}
	else if (temp > 0 && temp < 100) {return "woda jest w stanie płynnym"}
	else {return "woda jest w stanie lotnym"}
};

function waterStatusF(temp) {
	return waterStatusC((temp - 32) / 1.8)
};


function FtoC(tempF) {
	var tempC = ( tempF - 32 ) / 1.8;
	return tempC + " Celsjusz"
};

function showResult(info) {
	resultBox.innerHTML = "<div>" + info + "</div>" + "<br>" + resultBox.innerHTML;
};



btnCtoF.addEventListener('click', function(){

	var tempC = prompt('Proszę podać jaką wartość przeliczyć na stopnie Faranhajt?');

	if ( !isNaN(parseInt(tempC) )) {
		showResult(CtoF(tempC) + " " + waterStatusC(tempC));	
	} else {
		showResult('proszę o podanie wartości liczbowej');
	}

	
});

btnFtoC.addEventListener('click', function(){

	var tempF = prompt('Proszę podać jaką wartość przeliczyć na stopnie Faranhajt?');

	if ( !isNaN(parseInt(tempF) )) {
		showResult(FtoC(tempF) + " " + waterStatusF(tempF));	
	} else {
		showResult('proszę o podanie wartości liczbowej');
	}

	
});