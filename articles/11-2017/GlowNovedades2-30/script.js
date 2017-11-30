//busca el xml
var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
        contenido(this);
		}
};
xhttp.open("GET", "articulo.xml", true);
xhttp.send();

//Lee el xml (Estado alpha, el script necesita ser mejorado)
function contenido(xml) {
    var xmlDoc = xml.responseXML;
    var ID
    var title = xmlDoc.getElementsByTagName("title")[0].childNodes[0];
	var content = xmlDoc.getElementsByTagName("content")[0].childNodes[0];
    var author = xmlDoc.getElementsByTagName("author")[0].childNodes[0];
	var date = xmlDoc.getElementsByTagName("date")[0].childNodes[0];
	var disqus = xmlDoc.getElementsByTagName("disqus")[0].childNodes[0];
		document.getElementById("title").innerHTML = title.nodeValue;
		document.getElementById("content").innerHTML = content.nodeValue;
		document.getElementById("author").innerHTML = author.nodeValue;
		document.getElementById("date").innerHTML = date.nodeValue;
        document.getElementById("disqus").innerHTML = disqus.nodeValue;
}