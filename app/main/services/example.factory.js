angular
    .module('main')
    .factory('Example', Example);


function Example(Restangular) {



    var service = {
        getPosts:getPosts
    };

    return service;

    function getPosts() {
        //Regresa una promesa no resuelta
        return Restangular.all('posts').getList();
    }




}