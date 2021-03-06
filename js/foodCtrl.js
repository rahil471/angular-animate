var foodApp = angular.module('foodApp',['ngAnimate']);

foodApp.controller('foodCtrl',function($scope){
	$scope.selectedRow = 0;
	$scope.showTable = true;
	$scope.foodItems = [{
		name:'Noodles',
		price:'10',
		quantity:'1'
	},
	{
		name:'Pasta',
		price:'20',
		quantity:'2'
	},
	{
		name:'Pizza',
		price:'30',
		quantity:'1'
	},
	{
		name:'Chicken tikka',
		price:'100',
		quantity:'1'
	},{
		name:'Hotdog',
		price:'10',
		quantity:'1'
	},
	{
		name:'Burger',
		price:'20',
		quantity:'2'
	},
	{
		name:'frankie',
		price:'30',
		quantity:'1'
	},
	{
		name:'Sandwich',
		price:'100',
		quantity:'1'
	},{
		name:'Shezwan',
		price:'10',
		quantity:'1'
	},
	{
		name:'Biryani',
		price:'20',
		quantity:'2'
	},
	{
		name:'Raan',
		price:'30',
		quantity:'1'
	},
	{
		name:'Tuna',
		price:'100',
		quantity:'1'
	}];
	$scope.setClickedRow = function(index){
		$scope.selectedRow = index;
	}
	
	$scope.$watch('selectedRow', function() {
	});
});

foodApp.directive('arrowSelector',['$document',function($document){
	return{
		restrict:'A',
		link:function(scope,elem,attrs,ctrl){
			var elemFocus = false;             
			elem.on('mouseenter',function(){
				elemFocus = true;
			});
			elem.on('mouseleave',function(){
				elemFocus = false;
			});
			$document.bind('keydown',function(e){
				if(elemFocus){
					if(e.keyCode == 38){
						
						if(scope.selectedRow == 0){
							return;
						}
						scope.$apply(function(){
							scope.selectedRow--;
						});
						e.preventDefault();
					}
					if(e.keyCode == 40){
						if(scope.selectedRow == scope.foodItems.length - 1){
							return;
						}
						scope.selectedRow++;
						scope.$apply();
						e.preventDefault();
					}
				}
			});
		}
	};
}]);