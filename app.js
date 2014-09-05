(function(){
  var app = angular.module('classPage', []);

  app.controller('ClassListController',['$http', function($http){
    var teacher = this;
    teacher.classes = [];
    $http.get('ClassData.json').success(function(data){
        teacher.classes = data;
    });
  }]);

  app.controller('TabController', function(){
  	this.tab = 0;
    this.tab2 = 0;
    this.setTab = function(tab){
    	this.tab = tab;
    };
    this.isSet = function(tab){
    	return this.tab == tab;
    };
  });


})();
