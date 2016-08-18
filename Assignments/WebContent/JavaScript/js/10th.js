
function arra(){
	var str = document.getElementById("array").value;
	var a=str.split(" ");
	/*for(i=0;i<a.length;i++)
	{
		a[i]= parseInt(a[i]);
	}*/

	a.sort(function(x, y){return x - y});
	document.write('<br/>'+a);
}

function arrd(){
	var str = document.getElementById("array").value;
	var a=str.split(" ");
	
	a.sort(function(x, y){return x - y});
	a.reverse();
	document.write(a);
}