function cal(){
	var x = document.getElementById("username").value;
	var y= document.getElementById("age").value;
	var d=new Date();
	var year = d.getFullYear();
	var birthyear= year-y;
	document.write("Brith year of " + x +" is : "+ birthyear);
}