app.controller("search-viewCtrl",
  ["$scope", "$http", function($scope, $http) {

    $scope.getResults = function() {
      var thing = document.getElementById("searchTopic").value.toLowerCase();

      $http.get('data/scores.json').success(function(data) {
        // you can do some processing here
        var list = [];

        for (var i = 0; i < data.length; i++) {
          var keys = Object.keys(data[i]);
          console.log(keys);
          for (var j = 0; j < keys.length; j++) {
            var places = keys[j].toLowerCase();
            var final = data[i][places].toLowerCase();
            console.log(final);
            console.log(thing);
            if (final.indexOf(thing) !== -1) {
              list.push(data[i]);
            }
          }
        }

        $scope.venues = list;

        console.log(list);
    });

  }

}]);
