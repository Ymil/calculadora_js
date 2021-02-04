
var calculadoraApp = angular.module('calculadoraApp', []);
calculadoraApp.controller('calculadoraController', function calculadoraController($scope) {

    $scope.calculadoraVars = {'value': '', 'ans': ''};
    $scope.calculadoraArray = [
        [7, 8, 9, "+"],
        [4, 5, 6, "-"],
        [1, 2, 3, "/"],
        [0, "*", "AC", "DEL"],
        ["=", ".", 'Ans']
    ];

    $scope.click = function(e){
        var valueAssigment = $scope.calculadoraVars['value'];        
        if( e == 'DEL'){
            valueAssigment = valueAssigment.slice(0, -1);
        }else if( e == 'AC' ){
            valueAssigment = "";
        }else if( e == "="){                  
            valueAssigment = $scope.$eval(valueAssigment).toString();
            $scope.calculadoraVars['ans'] = valueAssigment;            
        }else if( e == "Ans"){
            valueAssigment += $scope.calculadoraVars['ans'].toString();
        }else{
            valueAssigment +=  e;
        }            
        
        $scope.calculadoraVars['value'] = valueAssigment;
        
    }
});