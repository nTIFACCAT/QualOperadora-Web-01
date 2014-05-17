$(document).ready(function(){
	$('#verificar').unbind("click").click(function(a) {
		a.preventDefault();
		$.ajax({
		  type: "GET",
		  url: "http://private-61fc-rodrigoknascimento.apiary-mock.com/consulta/5199999999",
		  dataType: "json",
		  success: function (data) {
		  	$('.telefone').text(data.telefone);
		  	$('.operadora').text(data.operadora);

		  }
		});
	});


});