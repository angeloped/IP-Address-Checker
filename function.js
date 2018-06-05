// var app = chrome.runtime.getBackgroundPage();
/*
document.addEventListener('DOMContentLoaded', function() {
  document.setTimeout(2000);
  document.getElementById("click-this").addEventListener("click", getThat;
});
function getThat(){
} */
function initialize(x) {
	var loc = "http://www.ip-tracker.org/locator/ip-lookup.php?ip=" + x;
		if(loc == "http://www.ip-tracker.org/locator/ip-lookup.php?ip=xxnonexx"){
			x = "error occured";
			document.getElementById("output").innerHTML = x;
			//document.getElementById("helpMe").setAttribute("href","404error.html");    //hey need to fix this!
			document.getElementById("output2").innerHTML = x;
			document.getElementById("locate").setAttribute("href","404error.html");
		}else{
			document.getElementById("output").innerHTML = x;
			document.getElementById("output2").innerHTML = x;
			document.getElementById("locate").setAttribute("href",loc);
		}
}
function readTextFile(file){
	var ipAddress = "xxnonexx"
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function (){
		if(rawFile.readyState === 4){
			if(rawFile.status === 200 || rawFile.status == 0){
					var ipAddress = rawFile.responseText;
					var ipAddress = ipAddress.slice(8,-2);
					initialize(ipAddress);
				}
			}else{
				initialize(ipAddress);
			}
			initialize(ipAddress);
		}
	initialize(ipAddress);
    rawFile.send(null);
}
readTextFile("http://l2.io/ip.js?var=myip");