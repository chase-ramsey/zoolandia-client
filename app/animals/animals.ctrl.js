angular.module('Zoolandia')
    .controller('AnimalsCtrl', ['$scope', '$http', 'RootFactory', function($scope, $http, RootFactory) {

        $scope.title = "Animals";

        $scope.apiRoot = null;
        $scope.animals = null;

        RootFactory.getApiRoot()
            .then((data) => {
                $scope.apiRoot = data;
                $http.get($scope.apiRoot.animals)
                    .then((res) => {
                        $scope.animals = res.data;
                    })
            })

    }
]);
