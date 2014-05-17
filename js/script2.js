function simpleController($scope, $http) {

  $scope.verificar = 'Verificar';

  $scope.verifica = function () {

    $scope.verificar = 'Pesquisando...'

    $http({
      method: 'GET',
      url   : 'http://qualoperadora.herokuapp.com/consulta/' + $scope.telefone
    }).success(function (data) {
      $scope.dados = data;
      if ($scope.dados.portabilidade) {
        $scope.dados.portabilidade = 'Sim'
      } else {
        $scope.dados.portabilidade = 'Não'
      }
      $scope.verificar = 'Verificar';
    });

  };
}
