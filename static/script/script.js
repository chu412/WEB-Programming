window.onload = function() {
    var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
    var newText = document.createTextNode("Loaded in " + loadTime.toString() + " ms");
	document.getElementsByTagName("FOOTER")[0].appendChild(newText);

    
}
