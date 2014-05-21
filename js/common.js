$(document).ready(function() {
	$.fn.fullpage({
	    slidesColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#8470FF'],
		anchors: ['page1', 'page2', 'page3', 'page4'],
		menu: '#menu'
	});
    loadcommit();
    
});
function loadcommit(){
    /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
    var disqus_shortname = 'fopen'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function () {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
}