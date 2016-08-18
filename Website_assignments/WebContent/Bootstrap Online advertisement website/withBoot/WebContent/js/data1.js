
function Menu() 
{
	var count=0;
	var newdata = [{
		id:"Mobiles & Tablets",img:"mob1.jpg",pname:"Samsung Galaxy J2-GOLD",price:"Rs. 7,599",uname:"Ram",ucontact:"9856147895",loc:"Nashik"
	},
	{
		id:"Mobiles & Tablets",img:"mob2.jpg",pname:"Motorola Moto G4 Plus",price:"Rs. 15,499",uname:"Sham",ucontact:"9547852468",loc:"Pune"
	},
	{
		id:"Mobiles & Tablets",img:"mob3.jpg",pname:"Apple Iphone 5s Silver",price:"Rs. 21,898",uname:"Gita",ucontact:"9764974112",loc:"Delhi"
	},
	{
		id:"Electrical Appliances",img:"acc2.jpg",pname:"Sony Power Bank",price:"Rs. 1250",uname:"Gupta",ucontact:"9578454569",loc:"Mumbai"
	},
	{
		id:"Electrical Appliances",img:"acc3.jpg",pname:"Samsung Power Bank",price:"Rs. 2500",uname:"Abhishek",ucontact:"9578453214",loc:"Indore"
	},
	{
		id:"Electrical Appliances",img:"acc4.jpg",pname:"Samsung Bluetooth Headphone",price:"Rs. 3650",uname:"Amit",ucontact:"9578456541",loc:"Delhi"
	},
	{
		id:"Electrical Appliances",img:"acc5.jpg",pname:"Bose Headphone",price:"Rs. 2750",uname:"Mohit",ucontact:"9578459874",loc:"Pune"
	},
	{
		id:"Houses/Flats",img:"home1.jpg",pname:"3BHK House",price:"Rs. 20,00,000",uname:"Q",ucontact:"9960514225",loc:"Pune"
	},
	{
		id:"Houses/Flats",img:"home2.jpg",pname:"4BHK House",price:"Rs. 30,00,000",uname:"P",ucontact:"9960514444",loc:"Mumbai"
	},
	{
		id:"Houses/Flats",img:"home3.jpg",pname:"2BHK House",price:"Rs. 60,00,000",uname:"A",ucontact:"9960515775",loc:"Bhopal"
	},
	{
		id:"Houses/Flats",img:"home4.jpg",pname:"3BHK House",price:"Rs. 25,00,000",uname:"Z",ucontact:"9960517777",loc:"Indore"
	},
	{
		id:"Cars/Bikes",img:"bike1.jpg",pname:"Honda Stunner(White)",price:"Rs. 25,000",uname:"Z",ucontact:"9365285412",loc:"Indore"
	},
	{
		id:"Cars/Bikes",img:"bike2.jpg",pname:"Honda Splendor(Black)",price:"Rs. 10,000",uname:"C",ucontact:"9365285412",loc:"Nashik"
	},
	{
		id:"Cars/Bikes",img:"car0.jpg",pname:"1966 Volkswagen Beetle",price:"Rs. 60,000",uname:"V",ucontact:"9365285412",loc:"Mumbai"
	},
	{
		id:"Cars/Bikes",img:"car2.jpg",pname:"Hyundai i10 (Blue)",price:"Rs. 1,20,000",uname:"Q",ucontact:"9365285412",loc:"Bhopal"
	},
	{
		id:"Furniture",img:"fur1.jpg",pname:"Dining Table",price:"Rs. 1250",uname:"W",ucontact:"9874512345",loc:"Pune"
	},
	{
		id:"Furniture",img:"fur2.jpg",pname:"Indore Furniture",price:"Rs. 2500",uname:"Q",ucontact:"9878678643",loc:"Indore"
	},
	{
		id:"Furniture",img:"fur3.jpg",pname:"TV Stand with 1 door and shelf",price:"Rs. 3650",uname:"Y",ucontact:"9874465767",loc:"Bhopal"
	},
	{
		id:"Furniture",img:"fur4.jpg",pname:"Book case",price:"Rs. 4050",uname:"C",ucontact:"9871234567",loc:"Mumbai"
	},
	{
		id:"Books",img:"book2.jpg",pname:"The Immortals of Meluha by Amish",price:"Rs. 250",uname:"",ucontact:"9578956412",loc:"Delhi"
	},
	{
		id:"Books",img:"book3.jpg",pname:"Sachin Tendulkar Playing It My Way by Sachin Tendulkar",price:"Rs. 350",uname:"",ucontact:"9578956412",loc:"Mumbai"
	},
	{
		id:"Books",img:"book4.jpg",pname:"Forge Your Future by Abdul Kalam",price:"Rs. 450",uname:"",ucontact:"9578956412",loc:"Delhi"
	},
	{
		id:"Books",img:"book5.jpg",pname:"Straight from the Heart by Kapil Dev",price:"Rs. 370",uname:"",ucontact:"9578956412",loc:"Nashik"
	},
	{
		id:"Services",img:"carp1.jpg",pname:"RamPrasad Tiwari",price:"Rs. 150 Service Charges",uname:"Admin",ucontact:"8136342174",loc:"Bhopal"
	},
	{
		id:"Services",img:"carp2.jpg",pname:"Om Kumar",price:"Rs. 250 Service Charges",uname:"Admin",ucontact:"8136342174",loc:"Delhi"
	},
	{
		id:"Services",img:"electr1.jpg",pname:"Kishan Kumar",price:"Rs. 125 Service Charges",uname:"Admin",ucontact:"8136342174",loc:"Nashik"
	},
	{
		id:"Services",img:"electr2.jpg",pname:"Shyam",price:"Rs. 50 Service Charges",uname:"Admin",ucontact:"8136342174",loc:"Pune"
	},
	{
		id:"Menu",img:"mobile.png",pname:"Mobiles & Tablets",price:"",uname:"",ucontact:"",loc:""
	},
	{
		id:"Menu",img:"elecr.png",pname:"Electrical Appliances",price:"",uname:"",ucontact:"",loc:""
	},
	{
		id:"Menu",img:"house.png",pname:"Houses/Flats",price:"",uname:"",ucontact:"",loc:""
	},
	{
		id:"Menu",img:"car.png",pname:"Cars/Bikes",price:"",uname:"",ucontact:"",loc:""
	},
	{
		id:"Menu",img:"furniture.png",pname:"Furniture",price:"",uname:"",ucontact:"",loc:""
	},
	{
		id:"Menu",img:"acc.png",pname:"Electronic Accesories",price:"",uname:"",ucontact:"",loc:""
	},
	{
		id:"Menu",img:"book.png",pname:"Books",price:"",uname:"",ucontact:"",loc:""
	},
	{
		id:"Menu",img:"services.png",pname:"Services",price:"",uname:"",ucontact:"",loc:""
	},
	];
	
	localStorage.setItem(count, JSON.stringify(newdata));
	var udata=[{uname:"a",uemail:"a@a.in",upass:"a"}];	
	localStorage.setItem(10,JSON.stringify(udata));

	if(sessionStorage.loggeIn == 1)
	{
		var wel=document.getElementById("wel");
				wel.innerHTML = "<button type=\"button\" class=\"btn btn-primary\" data-whatever=\"@fat\"> Welcome "+sessionStorage.userName+"</button>";
		
				wel.innerHTML += "<a href=\"index.html\"><button type=\"button\" class=\"btn btn-primary\" data-whatever=\"@getbootstrap\" onclick=\"sessionStorage.loggeIn = -1;\">Logout</button></a>";
	}
	
	
}

