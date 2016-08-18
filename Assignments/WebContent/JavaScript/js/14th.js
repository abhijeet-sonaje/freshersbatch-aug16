function count(){
	var s=document.getElementById("str").value;
	var str = s.split("");
	var count=0;
	for(i=0;i<str.length;i++)
	{
		if('str[i]' >= 'a'  || 'str[i]' >= 'A' || 'str[i]' <= 'z'  || 'str[i]' <= 'Z' )
			count++;
	}
	document.write("Number of characters in string is : "+ count);
}