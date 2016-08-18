function abc(){
	var x = document.getElementById("1stno").value;
	var y = document.getElementById("2ndno").value;
	if(y == 0)
		alert("Divisor is 0 hence can not perform division operation");
	else
	{
		var z=x/y;
		alert("Division of two numbers is : "+ z);
	}
}