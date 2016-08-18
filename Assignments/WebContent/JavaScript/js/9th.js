
function arr(){
	var str = document.getElementById("array").value;
	var a=str.split(" ");
	var min=a[0],max=a[0],avg=0;
	var sum=0;
	for(i=0;i<a.length;i++)
	{
		sum += parseInt(a[i]);
		if(a[i] < min)
			min=a[i];
		if(a[i] > max)
			max=a[i];
		
	}
	avg = sum/a.length;
	document.write("The min of arrray is : "+ min +'<br />'+"The max of arrray is : "+ max +'<br />'+ "The sum of arrray is : "+ sum +'<br />'+"The avg of arrray is : "+ avg +'<br />');
}