
function val(){
	var str = document.getElementById("em").value;
	var a = str.indexOf("@");
	var b= str.lastIndexOf(".");
	var len=str.length;
	
	if(a == -1 && ((str.length-b-1)>2) && b<a)
	{
		document.write('<br/>'+"Email is not valid");
	}
	else
		document.write('<br/>'+"email is valid");
}
