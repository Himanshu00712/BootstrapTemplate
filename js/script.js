$(document).ready(function(){
	
	
	$(".menue li a").click(function(e){
		
		let target = $(this).attr("href");
		$("html,body").animate({
			scrollTop:$(target).offset().top-58,
		},10000);
		
		e.preventDefault();
	});
	
});