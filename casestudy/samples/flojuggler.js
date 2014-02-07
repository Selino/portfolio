// JavaScript Document
$.ajaxSettings.cache = false; // Turn off cache for all JQuery ajax requests

function openPhotosWindow(id) {
	window.location.href='/uploads/upload/'+id;
}

function viewGallery(id) {
	window.location.href='/uploads/gallery/'+id;
}

// thumbnail 
function setThumbnail(img_name,flo_id) {
	toggleThumbCntrl();
	thumbWidth = $('#galleryImg').width();
	thumbHeight = $('#galleryImg').height();
	$('#floThumbNail').attr({src: '/img/gallery/' + flo_id + '/thumbnails/' + img_name, height: thumbHeight});	
	api = $.Jcrop('#galleryImg',{setSelect: [ 100, 100, 200, 200 ],aspectRatio: 1, onChange: updateCoords});
}

function showCoords(c) {
	$('#x').val(c.x);
	$('#y').val(c.y);
	$('#x2').val(c.x2);
	$('#y2').val(c.y2);
	$('#w').val(c.w);
	$('#h').val(c.h);
};

function showPreview(coords) {	
	if (parseInt(coords.w) > 0)
	{
		var rx = 32 / coords.w;
		var ry = 32 / coords.h;

		$('#floThumbNail').css({
			width: Math.round(rx * thumbWidth) + 'px',
			height: Math.round(ry * thumbHeight) + 'px',
			marginLeft: '-' + Math.round(rx * coords.x) + 'px',
			marginTop: '-' + Math.round(ry * coords.y) + 'px'
		});
	}
}
function updateCoords(c) {
	showPreview(c);
	  $('#x').val(c.x);
	  $('#y').val(c.y);
	  $('#w').val(c.w);
	  $('#h').val(c.h);
  };

function checkCoords() {
	  if (parseInt($('#w').val())) return true;
	  alert('Please select a crop region then press submit.');
	  return false;
  };

function cancelCrop(element,image) {
	$('#floThumbNail').attr({src: image});
	$('#floThumbNail').css({marginTop: '0px', marginLeft: '0px', width: '32px', height: '32px'});
	toggleThumbCntrl();
	api.destroy();
	$('.jcrop-holder').remove();
}

function toggleThumbCntrl() {
	$('#setThumbPhotoBtn').toggle('fast');
	$('#deletePhotoBtn').toggle('fast');
	$('#cropThumbBtn').toggle('fast');
	$('#cancelThumbBtn').toggle('fast');
}
  
function setThumbPhoto(img_name,flo_id,pict_id) {
	$.post("/flos/setthumbnail/t_" + img_name + "/" + flo_id + "/" + pict_id, function(){
	var $myAlert="<div title=\"Thumbnail Set\">Note: This photo has been set as the thumbnail.</div>";
	$($myAlert).dialog('destroy');
		$($myAlert).dialog({
			bgiframe: true,
			resizable: false,
			modal: true,
			draggable: false,
			overlay: {
				backgroundColor: '#000',
				opacity: 0.6
			},
			buttons: {
				Ok: function() {
					$(this).dialog('close');
					toggleThumbCntrl();
				}
			}
		});
		  api.destroy();
		  $('.jcrop-holder').remove();
		  $.post("/crop.php", $("#cropForm").serialize());
	});
}
/// nav
function goHome() {
	window.location.href='/login';
}

function deletePhoto(id,flo_id) {
  var $myAlert="<div id=\"delete_alert\" title=\"Delete Photo?\">WARNING: This action cannot be undone! Once a photo is deleted it cannot be recovered.</div>";
  $($myAlert).dialog('destroy');
	  $($myAlert).dialog({
		  bgiframe: true,
		  resizable: false,
		  modal: true,
		  draggable: false,
		  overlay: {
			  backgroundColor: '#000',
			  opacity: 0.6
		  },
		  buttons: {
			  'Delete': function() {
				  // $(this).dialog('close');
				  window.location.href='/uploads/delete/' + flo_id + "/" + id;
			  },
			  Cancel: function() {
				  $(this).dialog('close');
			  }
		  }
	  });
}

function sysAlert(msg) {
  var $myAlert="<div id=\"sys_alert\" title=\"System Alert\">WARNING: " + msg + "</div>";
  $($myAlert).dialog('destroy');
	  $($myAlert).dialog({
		  bgiframe: true,
		  resizable: false,
		  modal: true,
		  draggable: false,
		  overlay: {
			  backgroundColor: '#000',
			  opacity: 0.6
		  },
		  buttons: {
				Ok: function() {
					$(this).dialog('close');
					toggleThumbCntrl();
				}
			}
	  });
}

// Delay Plugin for jQuery
// - http://www.evanbot.com
// - copyright 2008 Evan Byrne
/*
 * Jonathan Howard
 * jQuery Pause
 * version 0.2
 * Requires: jQuery 1.0 (tested with svn as of 7/20/2006)
 * Feel free to do whatever you'd like with this, just please give credit where
 * credit is do.
 * pause() will hold everything in the queue for a given number of milliseconds,
 * or 1000 milliseconds if none is given.
 */
// Wait Plugin for jQuery
// http://www.inet411.com
// based on the Delay and Pause Plugin
 (function($) {
    $.fn.wait = function(option, options) {
        milli = 1000; 
        if (option && (typeof option == 'function' || isNaN(option)) ) { 
            options = option;
        } else if (option) { 
            milli = option;
        }
        // set defaults
        var defaults = {
            msec: milli,
            onEnd: options
        },
        settings = $.extend({},defaults, options);

        if(typeof settings.onEnd == 'function') {
            this.each(function() {
                setTimeout(settings.onEnd, settings.msec);
            });
            return this;
        } else {
            return this.queue('fx',
            function() {
                var self = this;
                setTimeout(function() { $.dequeue(self); },settings.msec);
            });
        }

    }
})(jQuery);