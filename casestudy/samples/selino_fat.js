// JavaScript Document
$(document).ready(function() {
	// initialize scrollables 
    $("div.port_scroll").scrollable({ 
        vertical:true,  
        size: 3,
		speed: 1500,
    }).mousewheel().circular().autoscroll({
		autoplay: true,
		steps: 3,
		interval: 6000
		});
	
	$("div.scrollable").scrollable({ 
	  size: 4
	}).circular();
	
	// overlay
	$("a[rel]").overlay({ 
 
        expose: 'black', 
        effect: 'apple', 
 
        onBeforeLoad: function() { 
 
            // grab wrapper element inside content 
            var wrap = this.getContent().find(".contentWrap"); 
 
            // load the page specified in the trigger 
            wrap.load(this.getTrigger().attr("href")); 
        } 
 
    });
	
    setTimeout(function(){$("#wrapper").fadeIn();},2000);
	
	// set default scroller items
	switchReal (
				'welcome',
				'Welcome!',
				'<p>Planning, designing, and building high profile web sites has been a passion of mine for over a decade. Whether it&acute;s a corporate information destination with over 3 million visits per month or an ultra-hip lifestyle application, each project has unique challenges. It&acute;s how the developer meets those challenges that makes all the difference when your team is under the gun.</p><p>Extensive experience with HTML/CSS/Javascript (including JQuery & Prototype), Flash, JSP, PHP, MySQL. Expert integration of large scale database applications into consumer UI and UX. Adobe CS4 professional with extended focus on Photoshop/Illustrator creativity and Fireworks productivity.</p><p>Thanks for visiting my web site and feel free contact me with any questions or comments.</p>'
				);		
	// Hide the feature content
	$('#featureExpanded').hide(); // just in case... yeh, I'm paranoid
	$('#toggleFeature').html('&mdash; &darr; read more &darr;');
		
	// Google Analytic Event Tracking
	$('#historyItem').bind('click', function() { googleEvent('Bottom Items', 'Click', 'History'); });
	$('#toolsItem').bind('click', function() { googleEvent('Bottom Items', 'Click', 'Tools'); });
	//$('#buzzwordItem').bind('click', function() { googleEvent('Bottom Items', 'Click', 'Buzzword Compliance'); });
	$('#casestudyItem').bind('click', function() { googleEvent('Bottom Items', 'Click', 'Case Studies'); });
	$('#musicItem').bind('click', function() { googleEvent('Bottom Items', 'Click', 'Music'); });
	
	//Bind toggle to feature link
	$('#toggleFeature').bind('click', function() {
		if ($('#featureExpanded').is(':visible')) { // check if the feature is showing
			$('#featureExpanded').slideUp(); // hide it if showing
			$('#toggleFeature').html('&mdash; &darr; read more &darr;');
			googleEvent('Links', 'Click', 'Read Less'); // Google Analytic Event Tracking
	  } else { // if the feature is hidden
		  $('#featureExpanded').load('articles/featured.html', function() { // load the html file
			$('#featureExpanded').slideDown(); // show the feature
			$('#toggleFeature').html('&mdash; &uarr; show less &uarr;');
			  googleEvent('Links', 'Click', 'Read More'); // Google Analytic Event Tracking
		  });
	  }
	});
	
	//Bind ajax call to beautyshot thumbnails
	$('.scrollEl img').bind('click', function() {
	 switchAjax($(this).attr("alt"));
	});
}); // end doc ready

//Google event tracking
function googleEvent(x,y,z) {
	try {
	pageTracker._trackEvent(x, y, z);
	} catch(err) {
		// console.log('Google tracking is turned off.');
	}
}

function switchAjax(itemName) {
	var errorSet=new Array( // create the default properties in case of failure
						  'welcome',
						  'Oops!',
						  'That item could not be loaded at this time. Please choose another project to examine.'
						  );	
	$.getJSON("widgets/switchmenu.php", { name: itemName}, function(bsInfo){ // ajax call to data
	  $("#beautyShot").fadeOut(function() { // fade first
			var myImg = new Image(); // create the img object
			$(myImg).load(function() { // once the img is loaded
				  switchReal(bsInfo.name,bsInfo.title,bsInfo.description);
			   }).error(function () { // if failed to load
				  switchReal(errorSet[0],errorSet[1],errorSet[2]);
			  }).attr('src', '/images/beautyshots/' + bsInfo.name + '.jpg'); // set the img src to url
		  });
	  });
}

function switchReal (name,title,description) {
  $("#beautyShot").css('backgroundImage','url(/images/beautyshots/'+name+'.jpg)'); // assign img to div background
  $("#descriptionTitle").html(title); // change the title
  $("#descriptionText").html(description); // change the description
  $("#beautyShot").fadeIn(); // fade back in
  googleEvent('Scroller', 'Click', name); // Google Analytic Event Tracking
}

(function($) {
	$.fn.extend({
		soundfx: function(options) {
			var defaults = {};
			var options = $.extend(defaults, options);
			return this.each(function() {
				var o = options;
				var isIE = navigator.appName.indexOf("MSIE") != -1;
				var flashobj = document.getElementById("soundfx");
				var speed = (isIE) ? 60 : 300;
				var hover_intent;
				var playtimer = ((o.tm) ? o.tm : 0)*1000;
				if(o.fx != null){
					$(this).ready(function() {
						setTimeout(function() {
							flashobj.playsfx(o.fx, o.vl);
						},	playtimer);
					});
				}
				if(o.md != null){
					$(this).mousedown(function() {
						flashobj.playsfx(o.md, o.vl);
					});
				}
				if(o.mu != null){
					$(this).mouseup(function() {
						flashobj.playsfx(o.mu, o.vl);
					});
				}
				if(o.mh != null){
					$(this).hover(function() {
						hover_intent = setTimeout(function() {
							flashobj.playsfx(o.mh, o.vl);
						},	speed);
					},
					function() {
						try {
							clearTimeout(hover_intent);
						} catch(e) {};
					});
				}
			});
		}
	});
})(jQuery);

var params = { swliveconnect:"true", quality:"low", bgcolor:"#000000", menu:"false" };
var attributes = { id:"soundfx", name:"soundfx" };
swfobject.embedSWF("/js/jquery/sound/soundfx.swf", "soundfx", "1", "1", "8", null, null, params, attributes, callbackFn);
function callbackFn(status) {
	if (status.success) {
		var obj = status.ref;
		window.onload = function() {
			if (obj && typeof obj.loadsndfx != "undefined") {
				//LOAD MP3'S
				obj.loadsndfx('/mp3/snd01.mp3|/mp3/button-20.mp3');
				//ATTACH SNDFX TO BUTTONS
				$('.scrollEl').soundfx({md:'0',vl:'1'});
				$('.bottomItem ul li').soundfx({md:'1',vl:'0.8'});
				$('#toggleFeature').soundfx({md:'1',vl:'0.8'});
				$('#contact_message').soundfx({md:'1',vl:'0.8'});
			}
		};
	}
};
