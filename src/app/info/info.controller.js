(function(){
  'use strict';

  angular
	  .module('simpleApp')
	  .controller('InfoController',InfoController);

  function InfoController($scope){
    var vm = this;
    vm.myname = 'Nattaporn';
    vm.surname = 'Chatmalairut';

    vm.mobilePhone = '0819025183';

    vm.hello = function(){
    	alert('Hello');
    }

  }

})();