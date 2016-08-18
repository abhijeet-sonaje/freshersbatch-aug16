function abc(){
	var n= document.getElementById("no").value;
	for(i=1; i<11;i++)
	{
		var temp=i*n;
		document.write(temp + '<br/>');
	}
	document.write('<input type="submit" value="Want to Create more table" onClick="window.location.reload()"></input>')
}

