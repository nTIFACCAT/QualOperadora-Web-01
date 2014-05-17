$(document).ready(function(){
	$('#verificar').unbind("click").click(function(a) {
		a.preventDefault();
		$("#verificar").val('Pesquisando...');
		var tel = $("#telefone").val();
		$.ajax({
		  type: "GET",
		  url: "http://qualoperadora.herokuapp.com/consulta/"+tel,
		  dataType: "json",
		  success: function (data) {
		  	$('.telefone').text(data.telefone);
		  	$('.operadora').text(data.operadora);
		  	if(data.portabilidade) {
		  		$('.portabilidade').text('Sim');
		  	} else {
		  		$('.portabilidade').text('Não');
		  	}
		  	$('.estado').text(data.estado);

		  	$("#resultado").show();
		  	$("#verificar").val('Verificar');

		  }
		});
	});


});