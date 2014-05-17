$(document).ready(function () {
  $('#verificar').unbind("click").click(function (a) {
    a.preventDefault();
    var tel = $("#telefone").val();

    $("#verificar").val('Pesquisando...');
    $.ajax({
      type    : "GET",
      url     : "http://qualoperadora.herokuapp.com/consulta/" + tel,
      dataType: "json",
      success : function (data) {
        $('.telefone').text(data.telefone);
        $('.operadora').text(data.operadora);
        if (data.portabilidade) {
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