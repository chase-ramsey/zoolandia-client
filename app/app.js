angular.module('Zoolandia', ['ngRoute'])
    .factory('RootFactory', ($http, $timeout) => {

        let apiRoot = null;

        return {

            getApiRoot: () => {
                if (apiRoot !== null) {
                    return $timeout().then(() => {
                        return apiRoot
                    });
                } else {
                    return $http.get('http://localhost:8000')
                        .then((res) => {
                            apiRoot = res.data;
                            return apiRoot;
                        })
                }
            }

        }
    });
