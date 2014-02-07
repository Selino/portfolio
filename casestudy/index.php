<style type="text/css">
<!--
.content {
	float: left;
	width: 220px;
	clear: right;
}
.movie {
	width: 320px;
	margin-right: 10px;
	float: left;
}
.title {
	font-size: 18px;
	font-weight: bold;
	margin: 0px;
	color: #FC0;
	text-transform: uppercase;
}
.codesample {
	margin: 0px 0px 10px 0px;
}
.codesample img {
	margin: 10px 5px 0px 0px;
	opacity:0.8;
	filter:alpha(opacity=80);
}
.codesample img:hover {
	opacity:1;
	filter:alpha(opacity=100);
}
.client, .client:before {
	color: #FC0;
	font-weight: bold;
	margin: 0px;
	content: "Client: ";
}
.type, .type:before {
	color: #FC0;
	font-weight: bold;
	margin: 0px;
	content: "Type: ";
}
.section {
	margin-top: 40px;
}
.wrapper {
	padding: 10px;
	font-family: Tahoma, Geneva, sans-serif;
}
.clearfloat { /* this class should be placed on a div or break element and should be the final element before the close of a container that should fully contain a float */
	clear:both;
    height:0;
    font-size: 1px;
    line-height: 0px;
}
.wrapper h1 {
	font-size: 32px;
	text-shadow:#000 2px 2px 2px;
	margin: 0px;
	text-transform: uppercase;
	border-bottom: 1px solid #666;
	color: #FC0;
}
body {
	margin: 0;
	padding: 0;
	background-color: #4e5c2c;
	font-size: 12px;
}
-->
</style>
<div class="wrapper">
<h1>Technical Case Studies</h1>
<div class="section">
  <div class="movie">
    <object width="320" height="200">
      <param name="movie" value="http://www.youtube.com/v/vlAqKO1XEW4&hl=en_US&fs=1&rel=0&color1=0x3a3a3a&color2=0x999999&hd=1&border=1">
      </param>
      <param name="allowFullScreen" value="true">
      </param>
      <param name="allowscriptaccess" value="always">
      </param>
      <embed src="http://www.youtube.com/v/vlAqKO1XEW4&hl=en_US&fs=1&rel=0&color1=0x3a3a3a&color2=0x999999&hd=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="320" height="200"></embed>
    </object>
  </div>
  <div class="content">
    <p class="title">Selino.com</p>
    <p class="type">Small Portfolio</p>
    <div class="codesample"> <a href="/css/selino.css" title="review CSS code" target="_blank"><img src="/casestudy/images/css.png" width="16" height="16" alt="CSS" /></a> <a href="/casestudy/samples/selino_fat.js" title="review Javascript code" target="_blank"><img src="/casestudy/images/page_code.png" width="16" height="16" alt="Javascript" /></a> <a href="/casestudy/samples/scroller.txt" title="review PHP code" target="_blank"><img src="/casestudy/images/page_white_php.png" width="16" height="16" alt="PHP" /></a></div>
    <p>After years of having a very static site up here it became obvious that selino.com needed a major facelift both visually and functionally. Now the site is a mini-example of some of the major methods that prospective clients and managers almost always ask me about. This site is 100% hand coded without any WordPress or Drupal framework to do all the lifting.</p>
    
    <p>The scrolling menu is dynamically populated from a database of thumbnails, beauty shots, and descriptions. This was done by modifying the JQuery Tools slider. I'm basically building Javascript dynamically with PHP there. When you click on a thumbnail the database is queried and the area is updated via JQuery ajax calls. Find the Snowdrift item to see how I handle failure on the data return.</p>
    
    <p>Google analytics are tracked on any relevant Javascript event. People often assume that you have to have href's to track an event but there's no reason that you can't track any event in a Web 2.0 application. Given my audience, no IE6/7 users, there was no reason for a progressive enhancement approach.</p>
    </div>
	<br class="clearfloat" />
</div>

<div class="section">
  <div class="movie">
    <object width="320" height="200">
      <param name="movie" value="http://www.youtube.com/v/CCB9pBr-cJw&hl=en_US&fs=1&rel=0&color1=0x3a3a3a&color2=0x999999&hd=1&border=1">
      </param>
      <param name="allowFullScreen" value="true">
      </param>
      <param name="allowscriptaccess" value="always">
      </param>
      <embed src="http://www.youtube.com/v/CCB9pBr-cJw&hl=en_US&fs=1&rel=0&color1=0x3a3a3a&color2=0x999999&hd=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="320" height="200"></embed>
    </object>
  </div>
  <div class="content">
    <p class="title">Flojuggler.com</p>
    <p class="type">Multi User Application</p>
    <div class="codesample"> <a href="/casestudy/samples/flojuggler.css" title="review CSS code" target="_blank"><img src="/casestudy/images/css.png" width="16" height="16" alt="CSS" /></a> <a href="/casestudy/samples/flojuggler.js" title="review Javascript code" target="_blank"><img src="/casestudy/images/page_code.png" width="16" height="16" alt="Javascript" /></a> <a href="/casestudy/samples/flojuggler.txt" title="review PHP code" target="_blank"><img src="/casestudy/images/page_white_php.png" width="16" height="16" alt="PHP" /></a> </div>
    	<p>This site was built from the ground up in CakePHP. The objective was to create a Ruby on Rails style app completely in PHP. Some of the key tasks included the ImageUploader integration, custom thumbnail cropper/creator, Web 2.0 application interface with JQueryUI integration, and more. The entire site was hand coded so I could get a handle on CakePHP. The only plug-n-play items are the Javascript widgets from JQueryUI.</p>
        <p>The best way to get a feel for the app is to log in and try it.</p>
        
        <p><a href="http://www.flojuggler.com" target="_blank">http://www.flojuggler.com</a><br />
        login:juggler@flojuggler.com<br />
        password:passthis</p>
        </div>
    <br class="clearfloat" />
</div>
</div>