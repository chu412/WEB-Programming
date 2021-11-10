window.onload = function() {
    var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
    var newText = document.createTextNode("Loaded in " + loadTime.toString() + " ms");
	document.getElementsByTagName("FOOTER")[0].appendChild(newText);
	
    let links = document.getElementsByClassName("nav_element");
    for (let i = 0; i < links.length; i++)
    {
        if (links[i].href === window.location.href)
        {
            links[i].classList.add("nav_element_active");
        }
    }

    
}
