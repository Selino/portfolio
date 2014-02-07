// JavaScript Document

$(document).ready(function() {
	$('#more-years-trigger').toggle(function(){
		$('#more-years').slideDown();
		$('#more-years-trigger').html('Show Less');
	}, function(){
		$('#more-years').slideUp();
		$('#more-years-trigger').html('Show More');
	});
});
