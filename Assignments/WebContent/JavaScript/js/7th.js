function abc(){
	var n= document.getElementById("no").value;
	var fact=1;
	for(i=2; i<=n;i++)
    {
		fact *= i;
    }
	document.write("Factorial of " + n+" number : "+ fact);
}

