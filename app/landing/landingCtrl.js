angular.module('Zoolandia')
    .controller('LandingCtrl', ['$scope', '$http', 'RootFactory', function($scope, $http, RootFactory) {

        $scope.title = "I'm on the landing page.";

        $scope.apiRoot = null;

        RootFactory.getApiRoot()
            .then((data) => {
                $scope.apiRoot = data;
            })

    }
]);
