let startTime = 0;

(function() {
    startTime = (new Date).getTime();
})();


window.onload = function() {
    let endTime = (new Date).getTime();
    let load =  (endTime - startTime);
    newText = document.createTextNode("Loaded in " + load.toString() + " ms");
	document.getElementsByTagName("FOOTER")[0].appendChild(newText);

    let links = document.getElementsByClassName("nav_element");
    for (let i = 0; i < links.length; i++)
    {
        if (links[i].href === window.location.href)
        {
            links[i].classList.add("a-now");
        }
    }
}