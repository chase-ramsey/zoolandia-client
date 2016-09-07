angular.module('Zoolandia')
    .controller('EmployeesCtrl', ['$scope', '$http', 'RootFactory', function($scope, $http, RootFactory) {

        $scope.title = "Employees";

        $scope.apiRoot = null;
        $scope.employees = null;

        RootFactory.getApiRoot()
            .then((data) => {
                $scope.apiRoot = data;
                $http.get($scope.apiRoot.employees)
                    .then((res) => {
                        $scope.employees = res.data;
                    })
            })

    }
]);
