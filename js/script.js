$(document).ready(function(){
	$('#verificar').unbind("click").click(function(a) {
		a.preventDefault();
		var tel = $("#telefone").val();
		$.ajax({
		  type: "GET",
		  url: "http://qualoperadora.herokuapp.com/consulta/"+tel,
		  dataType: "json",
		  success: function (data) {
		  	$('.telefone').text(data.telefone);
		  	$('.operadora').text(data.operadora);

		  }
		});
	});


});