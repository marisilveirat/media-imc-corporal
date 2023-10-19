<meta charset="utf-8">
<script>

function pulalinha() {
	document.write("<br><br>");
	}
	
function mostra(frase) {
	document.write(frase);
	pulalinha()
	}
	
	function calculaimc (peso, alt) {
		var imc = peso / (alt * alt);
		mostra("Imc será " + imc);
	}
	
	var pesoMari = 65
	var alturaMari = 1.69
	calculaimc (65, 1.69);
	
	var pesoNico = 77
	var alturaNico = 1.90
	calculaimc (77, 1.90);
	
</script>
