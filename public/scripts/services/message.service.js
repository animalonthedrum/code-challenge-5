myApp.service('MessageService', function($http) {
  var ms = this;


  ms.getMessage = function() {
    console.log('in getMessage');
    return $http({
      method: 'GET',
      url: '/message',
    }).then(function(response) {
      ms.allMessages = response;
    });
  };

  ms.addMessage = function(newMessage) {
    console.log("in post socks", newMessage);
    return $http({
      method: 'POST',
      url: '/message',
      data: newMessage
    }).then(function(response) {
      console.log('back from server with:', response);
      ms.allMessages = response;
    });
  };
}); //end service
