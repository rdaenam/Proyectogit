angular
    .module('main')
    .controller('MapsCtrl',MapsCtrl);

function MapsCtrl(MapsFactory, $http, uiGmapGoogleMapApi, uiGmapIsReady) {
    var vm = this;
    vm.map = {
        center: { latitude: 19.5063773, longitude: -99.1443311 },
        zoom: 15
    };
    vm.places = [];
    vm.onClick = onClick;


    var current_location = new google.maps.LatLng(19.5063773,-99.1443311);

    uiGmapIsReady.promise(1).then(function (instances) {
        instances.forEach(function(inst) {
            var map = inst.map;
            vm.map  = map;
            var uuid = map.uiGmap_id;
            var mapInstanceNumber = inst.instance; // Starts at 1.
            var request = {
                location: current_location,
                radius: '1000',
                types: ['gas_station']
            };
            service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, callback);

        });
    });

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            _.map(results,function (item) {
                item.coordinates = {
                    longitude:item.geometry.location.lng(),
                    latitude:item.geometry.location.lat()
                };
                item.show = false;
                item.maps_url = null;
            });
            vm.places = results;

        }
    }

    function onClick(marker, eventName, model) {
        model.show = !model.show;
        if(model.show && (model.maps_url==null || model.maps_url== undefined ) )
        {
            service = new google.maps.places.PlacesService(vm.map);
            service.getDetails({placeId:model.place_id}, function (place, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    var index = _.findIndex(vm.places,{id:place.id});
                    if(index!=-1)
                    {
                        vm.places[index].maps_url = place.url;
                    }
                }
            });

        }

    }



}