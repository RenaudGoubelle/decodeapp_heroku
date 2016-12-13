"use strict";


class App{
	constructor(){
	this.AllTanks=[
	{
		"id":1,
		"photo":"http://www.tanks-encyclopedia.com/wp-content/uploads/2015/05/ISU-152-with-bl8.jpg",
		"name": "ISU-152 (beast killer)",
		"description": "The ISU-152 was an absolute nightmare for the Wehrmacht. Much like the SU-152, it was capable of blowing Tiger, Ferdinand, and Panther turrets/casemates open",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":2,
		"photo":"http://www.hobbyboss.com/Uploads/201603/56fcc6049ebc1.jpg",
		"name": "ZIS-30",
		"description": "The ZiS-30 came to be in 1941, because the Soviets lacked everything but manpower to fight the war.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":3,
		"photo":"http://www.militaryfactory.com/armor/imgs/somua-s35_4.jpg",
		"name": "SOMUA S35",
		"description": "In 1934, the French Army issued a new requirement for a cavalry tank in an attempt to modernized its inventory amidst growing regional unrest.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":4,
		"photo":"http://www.army-technology.com/projects/leclerc/images/leclerc_11.jpg",
		"name": "Leclerc Main Battle Tank",
		"description": " The Leclerc main battle tank was developed by GIAT Industries. Its development began in 1978 and first prototypes were built in 1989. Production of the Leclerc MBT started in 1991.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":5,
		"photo":"http://www.tanks-encyclopedia.com/ww2/US/photos/Super_Pershing.jpg",
		"name": "M26 Pershing",
		"description": "The M26 Pershing descends from a long series of heavy and “universal tank” prototypes, dating back from 1936.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":6,
		"photo":"http://www.military-today.com/tanks/m1a2_abrams.jpg",
		"name": "M1A2 Abrams Main Battle Tank",
		"description": "Approved for production in 1990, the M1A2 represents the U.S. Army’s technological improvement of the basic M1A1 design and the most modern battle tank in the world.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":7,
		"photo":"http://www.military-today.com/tanks/t90.jpg",
		"name": "T-90 Main Battle Tank",
		"description": "The T-90 main battle tank is a further development of the T-72. It was accepted to service with Russian army in 1993 and its low-rate production commenced in 1994.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":8,
		"photo":"http://ic.pics.livejournal.com/yuripasholok/765139/2483686/2483686_original.jpg",
		"name": "T-60 (A brother's grave for two) ",
		"description": "The T-60 was the result of the ongoing development of light tanks that had started well before WWII.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":9,
		"photo":"https://upload.wikimedia.org/wikipedia/commons/6/6c/T-70,_technical_museum,_Togliatti-4.jpg",
		"name": "T-70",
		"description": "The T-70 was yet another stop-gap in Soviet tank production.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":10,
		"photo":"http://atvtank.ru/files/pictureBox/catalogItem/335/5.jpg",
		"name": "T-80",
		"description": "The most remarkable trait about this Soviet MBT was its turbine, used as main motricity power. It was indeed the first conventional MBT equipped with a turbine, preceding the M1 Abrams from two years in service.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{	
		"id":11,
		"photo":"http://armedforcesmuseum.com/wp-content/uploads/2012/04/Tank-M4-Sherman.jpg",
		"name": "M4 Sherman",
		"description": "The American M4 Sherman Medium Tank formed the backbone of the World War 2 Allied armored offensive.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":12,
		"photo":"http://www.warlordgames.com/wp-content/uploads/2016/11/ST03.jpg",
		"name":"M3 Stuart",
		"description":"American light tank development in the USA was confounded with tank development itself.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{	
		"id":13,
		"photo":"http://wotlabs.net/articles/wp-content/uploads/2014/03/kv-2-heavy-tank-05.png" ,
		"name":"KV-2 (The Bunker Buster)" ,
		"description":"The Russo-Finnish war proved the soundness of the decision to manufacture the KV-1." ,
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"

	},
	{
		"id":14,
		"photo":"http://www.achtungpanzer.com/images/hunpz4.jpg" ,
		"name":" Panzerkampfwagen IV Ausf F(F1)" ,
		"description":"Panzerkampfwagen IV was the main German tank of World War II, in action from September 1st of 1939 to May 9th of 1945." ,
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	}
	]
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}
	createTank(){
let id = document.getElementById('tank_id');
let name = document.getElementById('tank_name');
let description = document.getElementById('tank_description');
let photo = document.getElementById('tank_photo');


let AllTanks = {      
"id": id.value,
"name": name.value,
"description": description.value,
"photo": image.value,

};


this.AllTanks.push(AllTanks);


id.value = name.value = description.value = photo.value = ''; 
} 

deletetank(key){
let r = this.AllTanks;
for(let i=0;i<r.length;i++){
if(r[i].id == key){
  this.AllTanks.splice(i,1);
  break;
}
}   
this.homepage();
}

updateTank(id){

id = id+1;
let baseDummy = {
"id" :  id,
"name" : $('#tankname').val(),
"description" : $('#tankdes').val(),
"photo" : $('#tankphoto').val()
}

let r = this.AllTanks;
for(let i=0;i<r.length;i++){
if(r[i].id == id){
  r[i] = baseDummy;
  break;
}
}

this.Tanksearch();
}



searchTankById(id){
let r = this.AllTanks;
for(let i=0;i<r.length;i++){
if(id==r[i].id){
  return r[i];
}
}
}
searchTank(name){
let objects = [];
let r = this.AllTanks;
for(let i=0;i<r.length;i++){
let expr = (r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
if(expr){
  objects.push(r[i]);
}
}
return objects;
}
}
class Component extends App{
constructor(){
	super();
	}
	
//homepage
homepage(){
		let y = this.AllTanks;
		let count = 0;	
		let html =`<div id="Mores"></div> 
		<div class="blue darken-4">
		   <h3 align="center" class="blue darken-4 grey-text text-lighten-5"> Welcome to Tankpedia !</h3>
		   <br><p align="center" class="blue darken-4 grey-text text-lighten-5">In here you can Post and read Information on the tanks of all over the world posted by the community!</p>
		   </font><br>
		   </div>
		   
   		   <div class="row">`;
		for(let index=(y.length-1);index>=0;index--){
		if(count++ ===2)break;
		
	 		html+=`
	 		
	 			<div class= "col s6 m6">
	 				<div class="card card-big #3e2723 brown darken-4  resizecard">
	 					<div class="card-image  #3e2723 brown darken-4">
	 						<img class="resizeimg" src=${y[index].photo} >
	 						<span class="card-title " style="color:#ff0000; font-weight: bold;">${y[index].name}</span>
	 					</div>
	 					<div class="card-content #d50000 #3e2723 brown darken-4 white-text resizecontent">
	 						<p>${y[index].description}</p>
	 					</div>
	 					<div class="card-action #d50000 #3e2723 brown darken-4 white-text resizeaction">
	 						<a  href="#" class="waves-effect waves-teal btn-flat red-text small" onlick="component.Tankupdate(${y[index].id})">${y[index].link1}</a>
	 						<a href="#" class="waves-effect waves-teal btn-flat red-text small" onclick="component.deletetank(${y[index].id})">${y[index].link2}</a>
	 						<a  href="#" class="waves-effect waves-teal btn-flat red-text small" onlick="component.More(${y[index].id})">${y[index].link3}</a>

	 					</div>
	 				</div>
	 			</div>
	 		
	 		`;
	 		
     }
     html+=`</div><br>
	 		<br>
	 		<br>
     <div class="row">`;
     let count2= 2;
     	for(let index=(y.length-3);index>=0;index--){
		if(count2++ === 4)break;
	 		html+=`
	 		
	 			<div class= "col s7 m6">
	 				<div class="card card-big #3e2723 brown darken-4  resizecard">
	 					<div class="card-image  #3e2723 brown darken-4">
	 						<img class="resizeimg" src=${y[index].photo} >
	 						<span class="card-title " style="color:#ff0000; font-weight: bold;">${y[index].name}</span>
	 					</div>
	 					<div class="card-content #d50000 #3e2723 brown darken-4 white-text resizecontent">
	 						<p>${y[index].description}</p>
	 					</div>
	 					<div class="card-action #d50000 #3e2723 brown darken-4 white-text resizeaction">
							<a  href="#" class="waves-effect waves-teal btn-flat red-text small" onlick="component.Tankupdate(${y[index].id})">${y[index].link1}</a>
	 						  <a href="#" class="waves-effect waves-teal btn-flat red-text small" onclick="component.deletetank((${y[index].id})">${y[index].link2}</a>
	 						<a  href="#" class="waves-effect waves-teal btn-flat red-text small" onlick="component.More(${y[index].id})">${y[index].link3}</a>
	 					</div>
	 				</div>
	 			</div>
	 		
	 		`;

     }

     html +=`<br>
	 		<br></div>	`;
		this.reRender( `${html}`,document.getElementById("app"));
        ('#findtank').hide();
$('#More').hide();
$('#homepage').show();
$('#updateTank').hide();  
$('#createTank').hide();
$('#horizontaList').hide();    
	
        }

horizontaList(){
	let y = this.AllTanks;
		let index =0;
		let html=``;
		for(let index=0;index<y.length;index++){
		html+=`
<div id="Tank_list" class="container" >
<div class="row center">
<div class="col s12 m12 l12 ">

<div class="card horizontal ">
<div class="card-image  ">
<img class="image" src=${y[index].photo}>
</div>
<div class="card-stacked">
<div class="card-content ">
<h5>${y[index].name}</h5>
<p>${y[index].description}</p>
</div>
<div class="card-action small #d50000 #3e2723 brown darken-4 white-text ">
<a  href="#" class="waves-effect waves-teal btn-flat red-text small" onlick="component.Tankupdate(${y[index].id})">${y[index].link1}</a>
<a  href="#" class="waves-effect waves-teal btn-flat red-text small" onclick="component.deletetank(${y[index].id})">${y[index].link2}</a>
<a  href="#" class="waves-effect waves-teal btn-flat red-text small" onlick="component.More(${y[index].id})">${y[index].link3}</a>
</div>
</div>
</div>
</div>
</div>
</div>
`;
}
this.reRender(`${html}`,document.getElementById("app"))		
		('#findtank').hide();
$('#More').hide();
$('#homepage').hide();
$('#updateTank').hide();  
$('#createTank').hide();
$('#horizontaList').show();    

    }
More(id){
let r = this.searchTankById(id);

let html=`



<div class="row">       
<div class="col s12 m12">
<div class="card horizontal">
<div class="card-image">
<img src="${r.photo}">
</div>
<div class="card-stacked">
<div class="card-content">
<h5 class="center-align">${r.name}</h5>
<p>${r.description}</p>
</div>
<div class="card-action small">               
<span onclick="component.horizontaList()" class="new badge small" data-badge-caption="">Back to list</span>
</div>            
</div>     
</div>   

</div>      
</div>

`;

this.reRender(`   
  ${html}     
  `,document.getElementById("app"));
('#findtank').hide();
$('#More').show();
$('#homepage').hide();
$('#updateTank').hide();  
$('#createTank').hide();
$('#horizontaList').hide();    

}
Tankupdate(id){

id = id - 1;

let html = `

<legend>Tanks</legend>
<h1>Update tank </h1>
<span>Update Tank <span class="required"value="${this.AllTanks[id].name}">*</span></span><input type="email"id="tankname" />
<span>Update Image<span class="required"value="${this.AllTanks[id].image}">*</span></span><input type="email"id="tankphoto"/>
<legend>Description</legend>
<span>Update Description*</span></span><textarea id="tankdes" class="textarea-field "value="${this.AllTanks[id].description}"></textarea>
<div class="center-align">
<a onclick="component.horizontaList()" class="waves-effect blue waves-light btn">Back to List</a>
<a onclick="component.updateTank(${id})" class="waves-effect blue waves-light btn">Update</a>


`;  


this.reRender(`

  ${html}

  `,document.getElementById("app"));   
('#findtank').hide();
$('#More').hide();
$('#homepage').hide();
$('#updateTank').show();  
$('#createTank').hide();
$('#horizontaList').hide();    


}

findtank(){
	let html = `




</di>

<br/>
<nav>
<div class="nav-wrapper  blue accent-1">
<form>
<div class="input-field ">       
<input onkeyup="component.findtankItem(this.value)" id="search" type="search" placeholder="Search" required>
<label for="search "><i class="material-icons ">search</i></label>
<i class="material-icons">close</i>
</div>
</form>
</div>
</nav>
<br/>

`;

html += `
<div class="row" id="findtankItem">
`;
this.reRender(`
  ${html}
  `,document.getElementById("app"));
$('#findtank').show();
$('#More').hide();
$('#homepage').hide();
$('#updateTank').hide();  
$('#createTank').hide();
$('#horizontaList').hide();   
}
findtankItem(){
let html = ``;
let r = this.searchTank(name);
for(let i=0;i<r.length;i++){
  html+= `
  <div class="col s12 m4">
  <div class="card small hoverable">
  <div class="card-image">
  <img src="${r[i].photo}">
  <span class="card-title">${r[i].name}</span>
  </div>
  <div class="card-content">
  <p>${r[i].description}</p>
  </div>
  <div class="card-action">
  <a href="#" onclick="component.More(${r[i].id})">More</a>
  </div>
  </div>
  </div>
  `;
}
this.reRender(`
  ${html}
  `,document.getElementById("findtankItem"));
$('#findtank').show();
$('#More').hide();
$('#homepage').hide();
$('#updateTank').hide();  
$('#createTank').hide();
$('#horizontaList').hide();    


}
}
let component = new Component();
component.homepage();
