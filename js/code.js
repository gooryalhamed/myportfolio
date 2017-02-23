$(document).ready(function(){

	$('.mydiv').on('click', function(){
		var class2 = this.className.split(' ')[1];
		var num = class2.slice(-1);
		var slide =`#details${num}`;
		$(slide).slideToggle();
	});
});