function abc(){
	var s= document.getElementById("str").value;
	var x=s.split("");
	var ca = 0,ce = 0,ci = 0 ,co = 0,cu = 0;
	for(i=0;i<x.length;i++)
	{
		switch(x[i])
		{
			case "a": ca++;
				  break;
			case "e": ce++;
		  		  break;
			case "i": ci++;
		  		  break;
			case "o": co++;
		  		  break;
			case "u": cu++;
		  		  break;
		}
	}
	document.write("Count of vowel a in string : "+ ca + '<br/>');
	document.write("Count of vowel e in string : "+ ce + '<br/>');
	document.write("Count of vowel i in string : "+ ci + '<br/>');
	document.write("Count of vowel o in string : "+ co + '<br/>');
	document.write("Count of vowel u in string : "+ cu + '<br/>');
	
}