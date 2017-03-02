$(document).ready(function(){
	$('.mydiv').on('click', function(event){
		// Set all elements to display:none
		$("[id^=details]").each(function() {
			this.style.display = "none";
		});

		// Then, toggle the selected element down
		var class2 = this.className.split(' ')[1];
		var num = class2.slice(-1);
		var slide =`#details${num}`;
		$(slide).slideDown();

	});
	
});