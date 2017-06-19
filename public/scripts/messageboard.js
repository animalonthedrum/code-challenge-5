var myApp = angular.module('myApp', []);

myApp.controller('MessageController', function(MessageService) {
  var vm = this;
  console.log('NG');

  vm.newMessage = function() {
    console.log('in newMessage');
    var messageToAdd = {
      name: vm.nameIn,
      message: vm.locationIn
    }; //end peepToAdd
    MessageService.addMessage(messageToAdd);
    vm.getMessage();
  }; //end



  vm.getMessage = function() {
    console.log('in getMessage');
    MessageService.getMessage().then(function() {
      console.log('back in controller:', MessageService.allMessages);
      vm.theMessages = MessageService.allMessages.data;
      console.log(vm.theMessages);
    });
  }; //end getMessage


}); //end controller
