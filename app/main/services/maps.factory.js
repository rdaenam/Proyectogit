angular
    .module('main')
    .factory('MapsFactory',MapsFactory);

function MapsFactory(Restangular) {
    return {
        lookup:lookup
    };

    function lookup(location, radius, keyword, type) {
        return Restangular.all('json').customGET('',{
            'key':'AIzaSyCn3TZz26BB9Dw31gjfAs4w73URL1nXsvE',
            'location':location,
            'radius':radius,
            'keyword': keyword,
            'type':type
        });
    }
}