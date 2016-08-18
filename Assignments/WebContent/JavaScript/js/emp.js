function Emp(empId,empName,empSal,empDno){
	this.empId=empId;
	this.empName= empName;
	this.empSal= empSal;
	this.empDno=empDno;

	this.empsort=function(list)
	{
		list.sort(function(a, b){return a.empId-b.empId});
		
		document.write("<h1> Employee List After Sorting by the Emp_ID: </h1>");
		for(i=0;i<list.length;i++)
		{
			document.write("<br><br>empId: "+list[i].empId+"<br>empName: "+list[i].empName+"<br> empSalary: "+list[i].empSal+"<br> empDept_Id: "+list[i].empDno);
		}
	}
	
	
}



function EmpList(){
	
	var emp1 =new Emp("12","Abhijeet","820345"," D1");
	var emp2 =new Emp("15","Jeet","520345"," Q1");
	var emp3 =new Emp("2","Sameer","111115"," H5");
	var emp4 =new Emp("17","Rohan","203545","H5");
	var emp5 =new Emp("11","Mohit","120345","Q9");
	var emp6 =new Emp("18","Jeet","50000","A1");
	var emp7 =new Emp("6","Kunal","30345","Z8");
	var EMPList = [emp1,emp2,emp3,emp4,emp5,emp6,emp7];

	
	
	document.write("<h1> Employee List Before Sorting: </h1>");
	
	for(i=0;i<EMPList.length;i++)
	{
		document.write("<br>empId: "+EMPList[i].empId+"<br>empName: "+EMPList[i].empName+"<br> empSalary: "+EMPList[i].empSal+"<br> empDept_Id: "+EMPList[i].empDno+"<br>");
	}
	emp1.empsort(EMPList);
		
}
