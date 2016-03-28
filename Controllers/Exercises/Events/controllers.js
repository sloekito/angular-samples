/*
Using the data, controller, and modules below

You want to add three event handlers
    One for adding a team
    One for removing a team that accepts a team as an arguement
    One for restoring all deleted teams
    
You will also need a way to manage the assignemnt of the ID field on the team
when it has been added. This ID needs to be unique.
*/
    

var data = [
       { "Name":"Pirates", "League":"NL", "Division":"Central", "Wins":101, "Loses":49, "Id":1 },
       { "Name":"Cardinals", "League":"NL", "Division":"Central", "Wins":49, "Loses":101, "Id":2 },
       { "Name":"Brewers", "League":"NL", "Division":"Central", "Wins":78, "Loses":82, "Id":3 },
       { "Name":"Cubs", "League":"NL", "Division":"Central", "Wins":70, "Loses":90, "Id":4 },
       { "Name":"Reds", "League":"NL", "Division":"Central", "Wins":85, "Loses":75, "Id":5 }
   ];

var app = angular.module("myTeamApp", []);
app.controller("ListController", ["$scope", "$log", function ($scope, $log) {
    $scope.teams = data;
}])