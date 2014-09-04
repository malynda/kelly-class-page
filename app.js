(function(){
  var app = angular.module('classPage', []);

  var classes = [{title: "Alegbra 1", time: "2nd Hour", description:"This class focuses on basic principles of algebra..."},{title: "Algebra 2", time: "5th Hour", description: "This class focuses on more advanced algebra topics. Algebra 1 is a prerequisite."}]

  app.controller('ClassListController', function(){
    this.classes = classes;
  });

  app.controller('TabController', function(){
  	this.tab = 1;
    this.setTab = function(tab){
    	this.tab = tab;
    };
    this.isSet = function(tab){
    	return this.tab == tab;
    };
  });



})();
