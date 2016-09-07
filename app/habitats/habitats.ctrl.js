angular.module('Zoolandia')
    .controller('HabitatsCtrl', ['$scope', '$http', 'RootFactory', function($scope, $http, RootFactory) {

        $scope.title = "Habitats";

        $scope.apiRoot = null;
        $scope.habitats = null;

        RootFactory.getApiRoot()
            .then((data) => {
                $scope.apiRoot = data;
                $http.get($scope.apiRoot.habitats)
                    .then((res) => {
                        $scope.habitats = res.data;
                    })
            })

    }
]);
