
				 

			var app = angular.module('myApp', []);
               app.controller('myCtrl', function($scope) {

               		console.log("inside controller");

               		$scope.temp = {};
               		$scope.city;
	               
	               function fromFtoC (degree)
        			{
               			 var FtoC = (degree -  273.15);
                		 return FtoC;
       			    }
 				
					$scope.inputInfo = function(){
				     	console.log($scope.city);
							$.ajax({
					
						url: "http://api.openweathermap.org/data/2.5/forecast?q="+$scope.city+",EG&mode=json&appid=a3f592c8526d2e33f35622797fbe615e",
						type: "GET",
						success: function( response , status , http ) {
							if (response.cod == "404"){
								alert("Not Found");
							}
							else
							{
							
							console.log(response);
							$scope.temp.humidity = response.list[0].main.humidity;
							$scope.temp.city = response.city.name;
							$scope.temp.temp = Math.floor(fromFtoC (response.list[0].main.temp));
							$scope.temp.temp_min = Math.floor(fromFtoC (response.list[0].main.temp_min));
							$scope.temp.temp_max = Math.floor(fromFtoC (response.list[0].main.temp_max));
							$scope.$apply();
							console.log($scope.temp); }
						},
						error: function( http , status , error ) {
							alert("Some Error Occured : " + error );
						}
					});
							
					};
					$scope.city = "cairo";
							$scope.inputInfo();

				});



