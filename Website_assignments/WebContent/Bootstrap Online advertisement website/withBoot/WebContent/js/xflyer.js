function mySearch()
{
	var input, filter, mydiv, rdiv, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    mydiv = document.getElementById("mydiv");
    rdiv = mydiv.getElementsByTagName("div");
    for (i = 0; i < rdiv.length; i++) 
    {
        a = rdiv[i].getElementsByTagName('a')[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1)
        {
            rdiv[i].style.display = '';
        } else
        {
            rdiv[i].style.display = 'none';
        }
    }
}
  

function displayAll()
{	
	//var d=document.getElementById("dm");
	var value1=document.getElementById('lth').id;
	console.log(value1);
	var newdata=JSON.parse(localStorage.getItem(0));


	document.writeln("<div id='mydiv'>")
	for(var i = 0;i<newdata.length;i++)
	{	
		if(newdata[i].id != "Menu")
		{
			/*if(i%4==0)
			{
				document.writeln("<div class='row'>");
			}*/
			document.writeln("<div class='col-xs-6 col-md-3' id='ndiv'>");
		   	document.writeln("<a href='#' class='thumbnail'>");
		   	var s=("images/"+newdata[i].img);
		   	document.writeln("<img src='"+s+"'><br>Name : "+newdata[i].pname+"<br>Price : "+newdata[i].price+"<br>Posted by : "+newdata[i].uname+"<br>Contact : "+newdata[i].ucontact+"<br>Location : "+newdata[i].loc);
		   	document.writeln("</a></div>");
		   
		    /*if(i%4 == 0 && i>0)
		    {
		   	 	document.writeln("</div>");
		    }*/
		}
	}
	/*document.writeln("<div class='col-xs-6 col-md-3'>");
	document.writeln("<a href='#' class='thumbnail'>");
	s=("images/"+newdata[0].img);
	document.writeln("<img src='"+s+"'><br>Name : "+newdata[0].pname+"<br>Price : "+newdata[0].price+"<br>Posted by : "+newdata[0].uname+"<br>Contact : "+newdata[0].ucontact+"<br>Location : "+newdata[0].loc);
	document.writeln("</a></div></div>");*/
}

function sortbyprice()
{
	
	
}

function display()
{
	var ab=localStorage.getItem(5);
	var str;
	switch(parseInt(ab))
	{
		case 1: str = "Mobiles & Tablets";
				break;
		case 2: str = "Electrical Appliances";
				break;
		case 3: str = "Houses/Flats";
				break;
		case 4: str = "Cars/Bikes";
				break;
		case 5: str = "Furniture";
				break;
		case 6: str = "Books";
				break;
		case 7: str = "Services";
				break;
		case 8: str = "Mobiles & Tablets";
				break;
	}
	var newdata=JSON.parse(localStorage.getItem(0));
	document.writeln("<div id='mydiv'>")
	for(var i = 0;i<newdata.length;i++)
	{	
		if(newdata[i].id == str)
		{
			/*if(i%4==0)
			{
				document.writeln("<div class='row'>");
			}*/
			document.writeln("<div class='col-xs-6 col-md-3' id='ndiv'>");
		   	document.writeln("<a href='#' class='thumbnail'>");
		   	var s=("images/"+newdata[i].img);
		   	document.writeln("<img src='"+s+"'><br>Name : "+newdata[i].pname+"<br>Price : "+newdata[i].price+"<br>Posted by : "+newdata[i].uname+"<br>Contact : "+newdata[i].ucontact+"<br>Location : "+newdata[i].loc);
		   	document.writeln("</a></div>");
		   
		    /*if(i%4 == 0 && i>0)
		    {
		   	 	document.writeln("</div>");
		    }*/
		}
	}
}

function UserName() 
{
	var ab=document.getElementById("exampleInputEmail1").value;
	var pass=document.getElementById("exampleInputPassword1").value;
	var udata=JSON.parse(localStorage.getItem(10));
	for (var i = 0; i < udata.length; i++) 
	{
		if(ab==udata[i].uemail)
		{
			if (pass==udata[i].upass) 
			{
				$('#exampleModal1').modal('hide');
				sessionStorage.loggeIn = 1;
				sessionStorage.userName = udata[i].uname;

				var wel=document.getElementById("wel");
				wel.innerHTML = "<button type=\"button\" class=\"btn btn-primary\" data-whatever=\"@fat\"> Welcome "+udata[i].uname+"</button>";
		
				wel.innerHTML += "<a href=\"index.html\"><button type=\"button\" class=\"btn btn-primary\" data-whatever=\"@getbootstrap\" onclick=\"sessionStorage.loggeIn = -1;\">Logout</button></a>";
			}
		}
	}
}

function Register() 
{	

	var unm=document.getElementById("username1").value;
	var uem=document.getElementById("exampleInputEmail").value;
	var ups1=document.getElementById("exampleInputPassword").value;
	var ups2=document.getElementById("exampleInputPassword2").value;
	if (ups1!=ups2) 
	{

	}
	else
	{
		var ijk=JSON.parse(localStorage.getItem(10));
		ijk[ijk.length]={uname:unm,uemail:uem,upass:ups1};
		localStorage.setItem(10,JSON.stringify(ijk));
		alert("Signed Up Successfully.");
		ijk=JSON.parse(localStorage.getItem(10));
		for(var i=0;i<ijk.length;i++)
		{

			console.log(ijk[i].uname +" | "+ijk[i].uemail +" | "+ijk[i].upass +" | <br>");
		}
	}
	location.reload();

}

function ismail()   
{
	var email=document.getElementById("exampleInputEmail").value;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(email.match(mailformat))  
	{ 
      document.getElementById("exampleInputEmail").innerHTML = "Mail:";
	 
	   
	}  
	else  
	{  
		document.getElementsByName("email")[0].placeholder="Please Enter Valid Email";
	   document.getElementById("exampleInputEmail").focus();
	   document.getElementById("exampleInputEmail").value="";
	  
		  
    }
}

function postad()
{	
	
	
}

