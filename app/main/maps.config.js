angular
    .module('main')
    .config(MapsConfig);

function MapsConfig(uiGmapGoogleMapApiProvider){
    uiGmapGoogleMapApiProvider.configure({
       key:'AIzaSyBsVe1TRFqtARyavp0SAw0hBrfNNAKe6As',
       libraries: 'weather,geometry,visualization'

    });
}