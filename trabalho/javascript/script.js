
	function enviar()
	{

	    var nomeValue = document.querySelector(".js-input-name").value;
	    var emailValue = document.querySelector(".js-input-email").value;
	    var moradaValue = document.querySelector(".js-input-morada").value;
	    var idadeValue = document.querySelector(".js-input-idade").value;
	    var sexoValue = document.querySelector(".js-input-sexo").value;
	    var msgValue = document.querySelector(".js-input-msg").value;


	    var formValue = 
	    {       

	        name: nomeValue,
	        email: emailValue,
	        data: 
	        {                                     
	            morada: moradaValue, 
	            idade: idadeValue,
	            sexo: sexoValue,
	            msg: msgValue    
	        }
	    };

	    console.log(formValue);
}
