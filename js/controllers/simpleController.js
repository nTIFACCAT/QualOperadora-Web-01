function simpleController($scope) {
  $scope.teste = function () {
    alert('Telefone digitado: ' + $scope.telefone);
  }
}