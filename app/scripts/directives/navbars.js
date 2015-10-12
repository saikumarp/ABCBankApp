App.directive('headerDirective', function(){
	return {
		restrict: 'A',
		template: '<div class="navbar header">ABC Bank<span class="corner top-left"></span><span class="corner top-right"></span><span class="corner bottom-left"></span><span class="corner bottom-right"></span></div>',
	}
}).directive('footerDirective', function(){
	return {
		restrict: 'A',
		template: '<div class="navbar footer">Your IN good hands<span class="corner top-left"></span><span class="corner top-right"></span><span class="corner bottom-left"></span><span class="corner bottom-right"></span></div>',
	}
});;