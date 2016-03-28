describe("Testing Controller", function () {

    var testScope, personToDelete, numberOfPeople;

    beforeEach( function () {
        module( 'myEventHandlers' );
        inject( function ( $controller, $rootScope ) {
            testScope = $rootScope.$new();
            $controller( 'MainController', { $scope : testScope } );
            personToDelete = testScope.people[2];
            numberOfPeople = testScope.people.length;
        });
    });

    it("testCase: remove(one)", function () {
        expect(testScope.people.length).toBe(numberOfPeople);

        testScope.remove(personToDelete);

        expect(testScope.people.length).toBe(numberOfPeople - 1);

    });

    it("test add a person", function () {
        var person = { "Name":"Jacob", "Age":31, "Gender":"Male", "Id":8 };
        expect(testScope.people.length).toBe(numberOfPeople);

        testScope.add(person);

        expect(testScope.people.length).toBe(numberOfPeople + 1);
    });
});
