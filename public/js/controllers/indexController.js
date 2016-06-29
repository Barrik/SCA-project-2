angular.module('app')
  .controller('indexCtrl', function indexCtrl($scope, $http) {
    var vm= this;
    console.log('indexController.js loaded');

    $scope.something = "test text";
    $scope.countNumber = 0;

    //$http.get('/main', function(req, res) {findCount.getCountNumber(req, res);});
    function refreshCount() { $http.get('/main').then(
      function(successData){
        //success
        var getResult = successData.data.count;
        $scope.countNumber = (getResult);
        console.log(getResult);
      },
      function(failData){
        //fail

      });}

    refreshCount();

    function updateCount() { $http.post('/update', {'newNumber': $scope.countNumber}).then(
      function(successData){
        //success
        console.log(successData);
      },
      function(failData){
        //fail
        console.log(failData);
      });}

    $scope.countUp = function() {
      $scope.countNumber++;
      console.log($scope.countNumber);
      updateCount();
      // refreshCount();
    };

    $scope.countDown = function() {
      $scope.countNumber--;
      console.log($scope.countNumber);
      updateCount();
    };

});
