function reverse(s){
    return s.split("").reverse().join("");
}

function abc(){
	var rstr = document.getElementById("wrd").value;
	var str = rstr;
	if(str == reverse(rstr))
	{
		document.write('<br/>'+"It is a palindrome");
	}
	else
		document.write('<br/>'+"It is not a palindrome");
}
