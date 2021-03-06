
"use strict";


class App{
	constructor(){
	this.tanks=[
	{
		"id":1,
		"photo":"http://www.tanks-encyclopedia.com/wp-content/uploads/2015/05/ISU-152-with-bl8.jpg",
		"Name": "ISU-152 (beast killer)",
		"description": "The ISU-152 was an absolute nightmare for the Wehrmacht. Much like the SU-152, it was capable of blowing Tiger, Ferdinand, and Panther turrets/casemates open",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":2,
		"photo":"http://www.hobbyboss.com/Uploads/201603/56fcc6049ebc1.jpg",
		"Name": "ZIS-30",
		"description": "The ZiS-30 came to be in 1941, because the Soviets lacked everything but manpower to fight the war.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":3,
		"photo":"http://www.militaryfactory.com/armor/imgs/somua-s35_4.jpg",
		"Name": "SOMUA S35",
		"description": "In 1934, the French Army issued a new requirement for a cavalry tank in an attempt to modernized its inventory amidst growing regional unrest.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":4,
		"photo":"http://www.army-technology.com/projects/leclerc/images/leclerc_11.jpg",
		"Name": "Leclerc Main Battle Tank",
		"description": " The Leclerc main battle tank was developed by GIAT Industries. Its development began in 1978 and first prototypes were built in 1989. Production of the Leclerc MBT started in 1991.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":5,
		"photo":"http://www.tanks-encyclopedia.com/ww2/US/photos/Super_Pershing.jpg",
		"Name": "M26 Pershing",
		"description": "The M26 Pershing descends from a long series of heavy and “universal tank” prototypes, dating back from 1936.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":6,
		"photo":"http://www.military-today.com/tanks/m1a2_abrams.jpg",
		"Name": "M1A2 Abrams Main Battle Tank",
		"description": "Approved for production in 1990, the M1A2 represents the U.S. Army’s technological improvement of the basic M1A1 design and the most modern battle tank in the world.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":7,
		"photo":"http://www.military-today.com/tanks/t90.jpg",
		"Name": "T-90 Main Battle Tank",
		"description": "The T-90 main battle tank is a further development of the T-72. It was accepted to service with Russian army in 1993 and its low-rate production commenced in 1994.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":8,
		"photo":"http://ic.pics.livejournal.com/yuripasholok/765139/2483686/2483686_original.jpg",
		"Name": "T-60 (A brother's grave for two) ",
		"description": "The T-60 was the result of the ongoing development of light tanks that had started well before WWII.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":9,
		"photo":"https://upload.wikimedia.org/wikipedia/commons/6/6c/T-70,_technical_museum,_Togliatti-4.jpg",
		"Name": "T-70",
		"description": "The T-70 was yet another stop-gap in Soviet tank production.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":10,
		"photo":"http://atvtank.ru/files/pictureBox/catalogItem/335/5.jpg",
		"Name": "T-80",
		"description": "The most remarkable trait about this Soviet MBT was its turbine, used as main motricity power. It was indeed the first conventional MBT equipped with a turbine, preceding the M1 Abrams from two years in service.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{	
		"id":11,
		"photo":"http://armedforcesmuseum.com/wp-content/uploads/2012/04/Tank-M4-Sherman.jpg",
		"Name": "M4 Sherman",
		"description": "The American M4 Sherman Medium Tank formed the backbone of the World War 2 Allied armored offensive.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":12,
		"photo":"http://www.warlordgames.com/wp-content/uploads/2016/11/ST03.jpg",
		"Name":"M3 Stuart",
		"description":"American light tank development in the USA was confounded with tank development itself.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{	
		"id":13,
		"photo":"http://wotlabs.net/articles/wp-content/uploads/2014/03/kv-2-heavy-tank-05.png" ,
		"Name":"KV-2 (The Bunker Buster)" ,
		"description":"The Russo-Finnish war proved the soundness of the decision to manufacture the KV-1." ,
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"

	},
	{
		"id":14,
		"photo":"http://www.achtungpanzer.com/images/hunpz4.jpg" ,
		"Name":" Panzerkampfwagen IV Ausf F(F1)" ,
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
		let id = document.getElementById('Tank_id');
		let name = document.getElementById('Tank_Name');
		let description = document.getElementById('Tank_description');
		let photo = document.getElementById('Tank_photo');
		
		let tanks = {			
			"id": id.value,
			"Name": Name.value,
			"description": description.value,
			"photo": photo.value,
		};
		this.tanks.push(tanks);
		//Clear Fields
		id.value = name.value = description.value = photo.value = ''; 
	}	

	deleteTank(key){
		let r = this.tanks;
		for(let i=0;i<r.length;i++){
			if(r[i].id == key){
				this.tanks.splice(i,1);
				break;
			}
		}		
		this.TankList();
	}

	updatethem(id){
  	id = id+1;
  	let baseDummy = {
    "id" :  id,
    
    "name" : $('#Tankname').val(),
    "description" : $('#tankdes').val(),
    "image" : $('#Tankphoto').val()
  }

  let r = this.coc;
  for(let i=0;i<r.length;i++){
    if(r[i].id == id){
      r[i] = baseDummy;
      break;
    }
  }

  this.List_Of_Tanks();
}

	findTankByID(id){
		let r = this.tanks;
		for(let i=0;i<r.length;i++){
			if(id==r[i].id){
				return r[i];
			}
		}
	}	

	findTankByName(name){
		let objects = [];
		let r = this.tanks;
		for(let i=0;i<r.length;i++){
			let expr = (r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
			// console.log(name," vs ",r[i].name," = ",expr);
			if(expr){
				objects.push(r[i]);
			}
		}
		return objects;
	}
	
}
//EXTEND MROE TCODES
class Component extends App{
	constructor(){

		super();
	}
	//homepage
	tankLayout(){
		let y = this.tanks;
		let count = 0;	
		let html =`
   <div class="row">`;
		for(let index=(y.length-1);index>=0;index--){
		if(count++ ===2)break;
		
	 		html+=`
	 		
	 			<div class= "col s6 m6">
	 				<div class="card card-big #3e2723 brown darken-4  resizecard">
	 					<div class="card-image  #3e2723 brown darken-4">
	 						<img class="resizeimg" src=${y[index].photo} >
	 						<span class="card-title " style="color:#ff0000; font-weight: bold;">${y[index].Name}</span>
	 					</div>
	 					<div class="card-content #d50000 #3e2723 brown darken-4 white-text resizecontent">
	 						<p>${y[index].description}</p>
	 					</div>
	 					<div class="card-action #d50000 #3e2723 brown darken-4 white-text resizeaction">
	 					<a  href="#" class="waves-effect waves-teal btn-flat red-text small" onlick="component.updateTank()">${y[index].link1}</a>
	 						  <a href="#" class="waves-effect waves-teal btn-flat red-text small" onclick="component.deleteTank()">${y[index].link2}</a>
	 						<a  href="#" class="waves-effect waves-teal btn-flat red-text small" onlick="component.TankView()">${y[index].link3}</a>

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
	 						<span class="card-title " style="color:#ff0000; font-weight: bold;">${y[index].Name}</span>
	 					</div>
	 					<div class="card-content #d50000 #3e2723 brown darken-4 white-text resizecontent">
	 						<p>${y[index].description}</p>
	 					</div>
	 					<div class="card-action #d50000 #3e2723 brown darken-4 white-text resizeaction">
							<a  href="#" class="waves-effect waves-teal btn-flat red-text small" onlick="component.updateTank()">${y[index].link1}</a>
	 						  <a href="#" class="waves-effect waves-teal btn-flat red-text small" onclick="component.deleteTank()">${y[index].link2}</a>
	 						<a  href="#" class="waves-effect waves-teal btn-flat red-text small" onlick="component.TankView()">${y[index].link3}</a>
	 					</div>
	 				</div>
	 			</div>
	 		
	 		`;

     }

     html +=`<br>
	 		<br></div>	`;
		this.reRender( `${html}`,document.getElementById("app"));
        }
        //List of tanks
     List_Of_Tanks(){
     	let y = this.tanks;
		let index =0;
		let html=`<nav>
 	 <div class="nav-wrapper #212121 grey darken-4 ">
     <div class="col s12 m12"> 
      <a href="#Landingpage" class="brand-logo" onclick="component.tankLayout()">Tankpedia</a>
       <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#listoftanks" onclick="component.List_Of_Tanks()">List of Tanks</a></li>
        <li><a href="#listoftanks" onclick="component.TankList()">Find Tank</a></li>
        <li><a href="#createtanks"  onclick="component.createTank()">Create Tank</a></li>
      </ul>
      </div>
    </div>
   </nav>`;
		for(let index=0;index<y.length;index++){
		 html+=`
		 <table>
		 <tbody>
		 <tr>
		 	<td>
		 	<div class="row">
		 		<div class= "col s12 m12 ">
	 			<div class="card horizontal small #3e2723 brown darken-4  resizecard">
	 				<div class="card-image #3e2723 brown darken-4">
	 					<img src=${y[index].photo} >
	 				</div>
	 				<div class="card-stacked">
					<div class="card-content #d50000 #3e2723 brown darken-4 white-text">
					<h3 class="red-text"> ${y[index].Name}</h3>
	 						<p>${y[index].description}</p>
	 					</div>
	 				
	 					<div class="card-action small #d50000 #3e2723 brown darken-4 white-text ">
	 					<a  href="#" class="waves-effect waves-teal btn-flat red-text small" onlick="component.updateTank()">${y[index].link1}</a>
	 						  <a href="#" class="waves-effect waves-teal btn-flat red-text small" onclick="component.deleteTank()">${y[index].link2}</a>
	 						<a  href="#" class="waves-effect waves-teal btn-flat red-text small" onlick="component.TankView()">${y[index].link3}</a>
	 					</div>
	 				</div>		
	 			</div>
	 		</div>
	 	</div>
	 		`;
     }

		this.reRender(
			`${html}`,document.getElementById("app"))
		$('#TankView').hide();
		$('#TankCreate').hide();
		$('#landingpage').hide();
		$('#List_Of_Tanks').show();

	}

	TankView(id){
		let r = this.findTankByID(id);

		let html = `
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
                <button onclick="component.List_Of_Tanks(${r.id})" class="btn waves-effect waves-light grey">Back to list</button>
				<button onclick="component.updateTank(${r.id})" class="btn waves-effect waves-light grey">Update</button>
         		<button onclick="component.updateTank(${r.id})" class="btn waves-effect waves-light grey">Update</button>
            </div>            
          </div>     
        </div>   

      </div>      
    </div>
		`;
		this.reRender(`		
			${html}			
			`,document.getElementById("TankView"));
		$('#TankView').show();
		$('#landingpage').hide();
		$('#TankCreate').hide();
		$('#List_Of_Tanks').hide();
	}

	TankList(){
		let html = `
    </di>

    <br/>
    <nav>
    <div class="nav-wrapper  Black lighten-1">
    <form>
    <div class="input-field">       
    <input onkeyup="component.cocItems(this.value)" id="search" type="search" placeholder="Search" required>
    <label for="search "><i class="material-icons ">search</i></label>
    <i class="material-icons">close</i>
    </div>
    </form>
    </div>
    </nav>
    <br/>

    `;

		html += `
			<div class="row" id="TankListV">
		`;
		let r = this.tanks;
		for(let i=0;i<r.length;i++){
			html+= `
				<div class="col s12 m4">
					<div class="card small hoverable">
						<div class="card-image">
							<img src="${r[i].photo}">
							<span class="card-title">${r[i].Name}</span>
						</div>
						<div class="card-content">
							<p>${r[i].description}</p>
						</div>
						<div class="card-action">
							<a href="#" onclick="component.TankView(${r[i].id})">More</a>
						</div>
					</div>
				</div>
			`;
		}
		html += `</div> <div align="center">
		<button onclick="component.landingPage()" class="btn waves-effect waves-light">Back</button>


    <button onclick="component.createBase()" class="btn waves-effect waves-light">Create Tank </button>`;

		this.reRender(`${html}`,document.getElementById("TankList"));
		$('#TankList').show();
		$('#TankView').hide();
		$('#tankLayout').hide();
		$('#TankCreate').hide();
		$('#List_Of_Tanks').hide();		
	}
		TankListV(name){
		let html = ``;
		let r = this.findTankByName(name);
		for(let i=0;i<r.length;i++){
			html+= `
				<div class="col s12 m4">
					<div class="card small hoverable">
						<div class="card-image">
							<img src="${r[i].photo}">
							<span class="card-title">${r[i].Name}</span>
						</div>
						<div class="card-content">
							<p>${r[i].description}</p>
						</div>
						<div class="card-action">
							<a href="#" onclick="component.TankView(${r[i].id})">More</a>
						</div>
					</div>
				</div>
			`;
		}		
		this.reRender(`
			${html}
			`,document.getElementById("TankListV"));
		$('#TankList').show();
		$('#TankView').hide();
		$('#tankLayout').hide();
		$('#List_Of_Tanks').hide();	
		$('#TankCreate').hide();
	}


	CreateTank(){
		let html = `
			
    <div class="form-style-3">

    <fieldset><legend>Tanks</legend>
    <center><label for="field1"><span>Number of Tanks <span class="required">*</span></span><input disabled value="${this.coc.length+1}" id="Tank_id" type="text" ></label></center>
    <center><label for="coc_name"><span>Enter Tank's Name <span class="required">*</span></span><input type="email" id="Tank_Name" /></label></center>
    <center><label for="coc_image"><span>Enter Image Address<span class="required">*</span></span><input type="email"id="Tank_photo"/></label></center>
    </select></label>
    </fieldset>
    <fieldset><legend>Description</legend>
    <center><label for="Tank_description"><span>Description*</span></span><textarea id="Tank_description" class="textarea-field "></textarea></label></center>
    
    <div class="center-align">
    <button onclick="component.cocList()" class="btn waves-effect waves-light green">Back to List</button>


    
    
    <button onclick="component.createTank()" class="btn waves-effect waves-light green">Save</button>
    </div>
    </fieldset>

    </div>
    
	`;
	this.reRender(`
			${html}
			`,document.getElementById("createTank"));
	$('#CreateTank').show();
		$('#TankList').hide();
		$('#TankView').hide();
		$('#tankLayout').hide();
		$('#List_Of_Tanks').hide();	}

	updateTank(id){
   	 id = id - 1;
   	 let html = `
   	 <div class="form-style-3">
  	 <div class="row">
    	<fieldset><legend>Tanks</legend>
   	 <center><h1>Update Tank </h1></center>
  	  <center><span>Update Tank <span class="required"value="${this.tanks[id].name}">*</span></span><input type="email"id="Tankname</label></center>
 	   <center><span>Update Image<span class="required"value="${this.tanks[id].image}">*</span></span><input type="email"id="Tankphoto"/></label></center>
  	  </select></label>
  	  </fieldset>
   	 <fieldset><legend>Description</legend>
    	<center><span>Update Description*</span></span><textarea id="tankdes" class="textarea-field "value="${this.tanks[id].description}"></textarea></label></center>


    <div class="center-align">
    <button onclick="component.List_Of_Tanks(${r.id})" class="btn waves-effect waves-light grey">Back to list</button>
	<button onclick="component.updatethem(${r.id})" class="btn waves-effect waves-light grey">Update</button>
    </div>
    </div>
    `;  
    this.reRender(`

      ${html}

      `,document.getElementById("updateBase"));   

    $('#List_Of_ Tanks').hide();
    $('#TankView').hide();
    $('#updateTank').show();
    $('#tankLayout').hide();
    $('#createTank').hide();    
    
    
    
  }

}
let component = new Component();
component.tankLayout();