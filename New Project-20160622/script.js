var app = angular.module("myApp",[]);

app.controller("shippingController",['$scope',function(scope){
    
    var shippingDetails=
    {
        "Name": "Sudham",
        "Street": "1st main",
        "Numberr": "99999999",
        "City": "Bangalore",
        "Zipcode": "560058",
        "gender": "male",
        "LoackAddress": "YES"
      
    }
    

 var  availableOptions= [
      {id: '1', name: 'Option A'},
      {id: '2', name: 'Option B'},
      {id: '3', name: 'Option C'}
    ];
    
    scope.name=shippingDetails.Name;
    scope.street=shippingDetails.Street;
    scope.number=shippingDetails.Numberr;
    scope.city=shippingDetails.City;
    scope.zipCode=shippingDetails.Zipcode;
    scope.gender=shippingDetails.gender;
    scope.lockAddress=shippingDetails.LoackAddress;
    
    scope.dropdownoptions=availableOptions;
    
}]);