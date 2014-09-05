(function(){
  var app = angular.module('classPage', []);

  

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
