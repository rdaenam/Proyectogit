angular
    .module('main')
    .controller('ListCtrl',ListCtrl);


function ListCtrl($state) {
    var vm = this;

    vm.velocidad = 20.0;

    vm.clickVelocimetro = clickVelocimetro;

    function clickVelocimetro() {
        if(vm.velocidad<30){
            $state.go('main.listDetail');
        }
        else{
            alert('Exceso de Velocidad!');
        }
    }
}