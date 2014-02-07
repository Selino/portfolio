// JavaScript Document
$(document).ready(function() {
	$('.participate li').hover(function(){
		$(this).find('div.over').show();
	}, function() {
		$(this).find('div.over').hide();
	});
});
