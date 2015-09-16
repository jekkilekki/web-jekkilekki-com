/*
 *	Functions.js
 */

/*
 * Initialize Foundation
 */
//$(document).foundation();




/*
 * 	Initialize Masonry inside Foundation 5.5 Tab component
 */
$(window).load(function() {
	$('.masonry-container').masonry({
		itemSelector: '.masonry-item'
	});
});

/*
 * Sources:
 * http://www.sitepoint.com/bootstrap-tabs-play-nice-with-masonry/
 * http://codepen.io/SitePoint/pen/mywEMR/ (CodePen for above)
 * https://github.com/desandro/masonry/issues/665 (setTimeout function ref)
 * http://stackoverflow.com/questions/16987782/how-to-trigger-reload-masonry-plugin-on-click (another setTimeout example)
 * https://css-tricks.com/forums/topic/masonry-and-tabs-conflict-issue/#post-208155 (Reply on CSS-Tricks)
 * http://codepen.io/jekkilekki/pen/YywQag (my CodePen)
 */
// Reinitialize masonry inside each panel after the relative tab link is clicked - 
$('.tab-title a').on('click', function() {
	// do async to allow menu to open
	setTimeout( function() {
		//$(document).foundation('tab', 'reflow');
		//$('.masonry-container').masonry('reload');
		$('.masonry-container').masonry({
			itemSelector: '.masonry-item'
		}, 500);
	});
});




/*
 *	Draw Google Pie Chart
 */
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
	
	var data = google.visualization.arrayToDataTable([
		['Aspect', 'Life Percentage'],
		['Physical', 1],
		['Spiritual', 1],
		['Social', 1],
		['Mental', 1],
		['Family', 1],
		['Finances', 1],
		['Career', 1],
		['Order', 1]
	]);
	
	var options = {
		// title: 'Wheel of Life',
		width: '100%',
		height: 400,
		colors: ['283a4d', '6ec2cb', 'd3502d', 'eba725', '4b8796', '644257', '999999', 'd2d2d2'], 
		legend: 'none',
		pieSliceText: 'label',
		enableInteractivity: true,
		pieSliceBorderColor: 'none',
		pieStartAngle: -45
	};
	/* 
	 * Redraw chart on window resize to make it responsive
	 * Source: http://stackoverflow.com/questions/8950761/google-chart-redraw-scale-with-window-resize
	  */
	function redraw() {
		var chart = new google.visualization.PieChart(document.getElementById('piechart'));
		chart.draw(data, options);
	}

	window.onload = redraw();
	window.onresize = redraw;
}




/*
 * Load RSS Feeds
 */
jQuery(function($) {
	$("#feed").rss(
		"http://keytokorean.com/feed/",
		{
			limit: 4,
			// offsetStart: false,
			// offsetEnd: false,
			// ssl: true,
			// host: 'my-own-feedr-instance.com',
			layoutTemplate: '<ul id="container" class="small-block-grid-2 medium-block-grid-3 large-block-grid-4">{entries}</ul>',
			entryTemplate: '<li class="item"><a href="{url}">{teaserImage}</a><div class="panel"><small style="margin-left: 0;">{date}</small><dl><dt><a href="{url}">{title}</a></dt><dd>{shortBodyPlain}</dd></dl></div></li>',
			// tokens: {},
			dateFormat: 'MMMM Do, YYYY', // formats the date with moment.js (optional)
			// dateFormatFunction: function(date) {},
			//effect: 'slideFastSynced',
			// error: function() {},
			// success: function() {},
			// onData: function() {},
		}
		// function callback() {}
	);
	$("#read-feed-wpmu").rss(
		"http://premium.wpmudev.org/blog/feed/",
		{
			limit: 8,
			layoutTemplate: '<ul class="masonry-container small-block-grid-2 medium-block-grid-3 large-block-grid-4">{entries}</ul>',
			entryTemplate: '<li class="masonry-item"><a href="{url}">{teaserImage}</a><div class="panel"><small style="margin-left: 0;">{date}<br>by {author}</small><dl><dt><a href="{url}">{title}</a></dt><dd></dd></dl></div></li>',
			dateFormat: 'MMMM Do, YYYY', // formats the date with moment.js (optional)
		}
	);
	$("#read-feed-sitepoint").rss(
		"http://www.sitepoint.com/feed/",
		{
			limit: 8,
			layoutTemplate: '<ul class="masonry-container small-block-grid-2 medium-block-grid-3 large-block-grid-4">{entries}</ul>',
			entryTemplate: '<li class="masonry-item"><a href="{url}">{teaserImage}</a><div class="panel"><small style="margin-left: 0;">{date}<br>by {author}</small><dl><dt><a href="{url}">{title}</a></dt><dd></dd></dl></div></li>',
			dateFormat: 'MMMM Do, YYYY', // formats the date with moment.js (optional)
		}
	);
	$("#read-feed-tuts").rss(
		"http://code.tutsplus.com/posts.atom",
		{
			limit: 8,
			layoutTemplate: '<ul class="masonry-container small-block-grid-2 medium-block-grid-3 large-block-grid-4">{entries}</ul>',
			entryTemplate: '<li class="masonry-item"><a href="{url}">{teaserImage}</a><div class="panel"><small style="margin-left: 0;">{date}<br>by {author}</small><dl><dt><a href="{url}">{title}</a></dt><dd></dd></dl></div></li>',
			dateFormat: 'MMMM Do, YYYY', // formats the date with moment.js (optional)
		}
	);
});