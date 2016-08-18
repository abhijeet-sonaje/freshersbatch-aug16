var i=0;

function val(){
	var x = document.getElementById("username").value;
	var y= document.getElementById("pass").value;
	while(i<3)
	{
		if(x=="abhi123")
		{
			if(y=="abhi123")
				document.write("Login Successful");
			else
			{
				var op=confirm("Entered details are wrong" + i);
				if(op==true)
				{
					i++;
					break;
				}
			}	
		}
		else
		{
			var op=confirm("Entered details are wrong" + i);
			if(op==true)
			{
				i++;
				break;
			}
		}
	}
	if(i==3)
		document.write("You can not login now."+'<br/>'+"You have entered wrong details three times ")
}