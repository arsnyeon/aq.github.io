var url = window.location.href;
if (url.indexOf("https") < 0) {
url = url.replace("http:", "https:");
window.location.replace(url);
}

var system ={};  
var p = navigator.platform;       
system.win = p.indexOf("Win") == 0;  
system.mac = p.indexOf("Mac") == 0;  
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);     
if(system.win||system.mac||system.xll){
	window.location.href = "/use";  
}