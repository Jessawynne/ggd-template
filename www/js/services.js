angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('SocketService', ['socketFactory', function(socketFactory){
  return socketFactory({
    ioSocket: io.connect('http://localhost:3000')
  });
}]);

