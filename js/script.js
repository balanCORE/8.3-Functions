'use strict'

//  Buttony
var countF = document.getElementById('CtoF_btn');
var countC = document.getElementById('FtoC_btn');

// Odpowiedzi na buttony
var ans_CtoF = document.getElementById('CtoF_out');
var ans_FtoC = document.getElementById('FtoC_out');

// Wykorzystanie buttonów

// Funkcje przeliczające
var tempC;
var tempF;

var CtoF = function(tempF) {
	tempC = (tempF-32)/1.8;
	ans_CtoF.innerHTML = tempC;
};

var FtoC = function(tempC) {
	tempF = tempC*1.8+32;
};

// wykorzystanie butonów

countF.addEventListener('click', function() {
	tempF = prompt('Podaj proszę temperaturę w Celsjuszach');

	if ( !isNaN(parseInt(tempF) )) {
		CtoF();
	} else {
		ans_CtoF.innerHTML = "liczbę proszę";
	}
});
