
function captcha(){
	var numero = Math.random();
	numero = numero.toString();
	res = numero.substring(2);
	res = res.substring(4, -5);
	document.getElementById('viewCaptcha').innerHTML=res;
	document.getElementById('randCaptcha').value=res;
}

function validaCaptcha(){
	var mc = document.getElementById('meuCaptcha').value;
	var rc = document.getElementById('randCaptcha').value;
	
	if(mc != rc){
		alert("Erro! Código verificador incorreto!");
		document.getElementById('meuCaptcha').value="";
		formCaptcha.meuCaptcha.focus();
		return (false); 
	}
}