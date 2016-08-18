function bank(accName,accNo,accBal){
	this.accName = accName;
	this.accNo = accNo;
	this.accBal = accBal;
}

function withdraw(){
	var wname=document.getElementById("accName").value;
	var wnum=document.getElementById("accNum").value;
	var wbal=document.getElementById("accBal").value;
	var wamt=document.getElementById("amt").value;
	
	var wbank= new bank(wname,wnum,wbal);
	
	wbank.accBal= wbank.accBal-wamt;
	
	document.getElementById("accBal").value = wbank.accBal;
} 

function deposite(){
	var dname=document.getElementById("accName").value;
	var dnum=document.getElementById("accNum").value;
	var dbal=document.getElementById("accBal").value;
	var damt=document.getElementById("amt").value;
	
	var dbank= new bank(dname,dnum,dbal);
	
	dbank.accBal = parseInt(dbank.accBal) + parseInt(damt);
	
	document.getElementById("accBal").value = dbank.accBal;
} 