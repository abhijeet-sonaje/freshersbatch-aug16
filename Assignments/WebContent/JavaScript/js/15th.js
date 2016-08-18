

function rem(){
	var s=document.getElementById("str").value;
	var str = s.replace( /[\s\n\r]+/g, ' ' );
	document.write(str);
}

