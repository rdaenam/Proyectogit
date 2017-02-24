angular
    .module('main')
    .config(RestangularConfig);

function RestangularConfig(RestangularProvider, $httpProvider){
    RestangularProvider.setBaseUrl('https://maps.googleapis.com/maps/api/place/nearbysearch');
}