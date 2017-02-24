'use strict';

angular
    .module('main')
    .controller('GaugeCtrl', GaugeCtrl);

function GaugeCtrl(Example) {
    var vm = this;
    vm.gauge = {
        value: 50,
        intervals : {
            values: [0,10,20,30] // The interval is sorted and repeated values are removed
        },
        options : {
            needleColor: 'grey',
            min: 0,
            max: 100
            // Other options...
        }
    };
    activate();


    function activate() {
        Example.getPosts().then(function (res) {
            vm.resultado = res;
        }).catch(function (err) {

        })
    }



}