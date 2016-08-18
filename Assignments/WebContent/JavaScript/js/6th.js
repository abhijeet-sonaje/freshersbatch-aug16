function abc(){
	var a= document.getElementById("1stno").value;
	var b= document.getElementById("2ndno").value;
	var flag;
	while(a<b)
	{
		flag=0;
        for(i=2; i<=a/2; i++)
        {
            if(a%i == 0)
            {
                flag=1;
                break;
            }
        }

        if (flag == 0)
            document.write(a + '<br/>');

        a++;
	}
	
}

