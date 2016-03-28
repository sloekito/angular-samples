/*
Setup the ListController to filter on the name of the team to ensure that duplicate names
are not added. Keep in mind you are also dealing with the restore list. 
*/

var app = angular.module("myTeamApp", []);
app.controller("ListController", ["$scope", "$log", function ($scope, $log) {
    $scope.teams = [
       { "Name":"Pirates", "League":"NL", "Division":"Central", "Wins":101, "Loses":49, "Id":1 },
       { "Name":"Cardinals", "League":"NL", "Division":"Central", "Wins":49, "Loses":101, "Id":2 },
       { "Name":"Brewers", "League":"NL", "Division":"Central", "Wins":78, "Loses":82, "Id":3 },
       { "Name":"Cubs", "League":"NL", "Division":"Central", "Wins":70, "Loses":90, "Id":4 },
       { "Name":"Reds", "League":"NL", "Division":"Central", "Wins":85, "Loses":75, "Id":5 }
   ];
    $scope.deleted = [];
    $scope.newTeam = {};
    
    $scope.teamSequenceId = $scope.teams.length;
    
    $scope.addTeam = function () {        
        $scope.teamSequenceId++;
        $scope.newTeam.Id = $scope.teamSequenceId;
        $scope.teams.push($scope.newTeam);
        $log.info("Team with ID:" + $scope.teamSequenceId + " Has been added");
        
        $scope.newTeam = {};
    };
    
    $scope.removeTeam = function (team) {
        var location = $scope.teams.indexOf(team);
        if (location > -1) {
            $scope.deleted.push($scope.teams[location]);
            $scope.teams.splice(location, 1);
        }
    };
    
    $scope.restoreAll = function () {
        // Angular uses a lite version of underscore. Works as a foreach statement
        // you give it an array and an interator receiver which does work
        // for each record within the array.
        $scope.deleted.forEach(function (one) {
           $scope.teams.push(one); 
        });
        $scope.deleted = [];
    };
}])