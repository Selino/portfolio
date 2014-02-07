// JavaScript Document
// depends on JQuery 1.4

function setSection() {
	var sNavSection = $('#sectionID').attr('class');
	$('ul.arrow li.item').after('<img class="icon-corner" src="/sfaf/images/icons/icon_corner_' + sNavSection + '.png" width="10" height="10" />');
	
	$('#' + sNavSection).addClass('active'); // set main nav tab on state
	$('#' + sNavSection).next().addClass('roll-next');
	  $('#section-sub').load('/sfaf/subnav_' + sNavSection + '.php', function() {
		  loadjscssfile("/sfaf/css/" + sNavSection + ".css", "css"); //dynamically load and add this .css file
		  setMenu();
		  activateTopnav();
		  activateSubnav();
		  if (sNavSection != 'home') {
			  $('#section-sub').fadeIn();
		  } else {
			  $('#section-sub').hide();
		  }
		  $('.wrapper-content').wait(500).fadeIn();
		});
}
function setLinks() { // sets links of items with class="link" to the rel attribute of that object
	$('.link').click(function() {
		window.location.href = $(this).attr('rel');
	});
}
function setMenu() { // sets the links and on class of current subnav page
	$('.nav-item').click(function(){ var id = $(this).attr('id'); window.location.href = '/sfaf/' + id + '.php'; });
	$('.btn-donate').click(function(){ var id = $(this).attr('id'); window.location.href = '/sfaf/' + id + '.php'; });
	
	var sSubId = $('#sectionID').attr('alt');
	$('#'+sSubId).addClass('subnav-on');
	
	$('.nav-item.active').unbind();
}

function activateTopnav() { // turns on the pulldown subnav
	$("li.nav-item:not(li.active)").hover(function() {
		$(this).addClass('roll');
		$(this).next().addClass('roll-next');
		$(this).find("ul.topnav").show();
		$(this).hover(function() {
		}, function(){
			$(this).find("ul.topnav").hide();
			$(this).removeClass('roll');
			$(this).next().removeClass('roll-next');
		});
		}).hover(function() {
			$(this).addClass("subhover");
		}, function() {
			$(this).removeClass("subhover");
	});
}

function activateSubnav() { // turns on the pulldown subnav
	$("ul.subnav2").parent().append("<span></span>");
	$("ul.subnav li").hover(function() {
		$(this).find("ul.subnav2").slideDown('fast').show();
		$(this).hover(function() {
		}, function(){
			$(this).find("ul.subnav2").slideUp('slow');
		});
		}).hover(function() {
			$(this).addClass("subhover");
		}, function() {
			$(this).removeClass("subhover");
	});
}

function loadjscssfile(filename, filetype){
	if (filetype=="js"){ //if filename is a external JavaScript file
	var fileref=document.createElement('script')
	fileref.setAttribute("type","text/javascript")
	fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
	var fileref=document.createElement("link")
	fileref.setAttribute("rel", "stylesheet")
	fileref.setAttribute("type", "text/css")
	fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined")
	document.getElementsByTagName("head")[0].appendChild(fileref)
}

// doc loaded and ready
$(document).ready(function() {
  setSection();
});