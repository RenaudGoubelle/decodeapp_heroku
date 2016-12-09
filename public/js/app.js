"use strict";


class App{
	constructor(){
	this.tanks=[{
		"id":1,
		"Tankimage":"http://www.tanks-encyclopedia.com/wp-content/uploads/2015/05/ISU-152-with-bl8.jpg",
		"TankName": "ISU-152 (beast killer)",
		"History": "The ISU-152 was an absolute nightmare for the Wehrmacht. Much like the SU-152, it was capable of blowing Tiger, Ferdinand, and Panther turrets/casemates open",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},{
		"id":2,
		"Tankimage":"http://www.hobbyboss.com/Uploads/201603/56fcc6049ebc1.jpg",
		"TankName": "ZIS-30",
		"History": "The ZiS-30 came to be in 1941, because the Soviets lacked everything but manpower to fight the war.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":3,
		"Tankimage":"http://www.militaryfactory.com/armor/imgs/somua-s35_4.jpg",
		"TankName": "SOMUA S35",
		"History": "In 1934, the French Army issued a new requirement for a cavalry tank in an attempt to modernized its inventory amidst growing regional unrest.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":4,
		"Tankimage":"http://www.army-technology.com/projects/leclerc/images/leclerc_11.jpg",
		"TankName": "Leclerc Main Battle Tank",
		"History": " The Leclerc main battle tank was developed by GIAT Industries. Its development began in 1978 and first prototypes were built in 1989. Production of the Leclerc MBT started in 1991.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":5,
		"Tankimage":"http://www.tanks-encyclopedia.com/ww2/US/photos/Super_Pershing.jpg",
		"TankName": "M26 Pershing",
		"History": "The M26 Pershing descends from a long series of heavy and “universal tank” prototypes, dating back from 1936.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":6,
		"Tankimage":"http://www.military-today.com/tanks/m1a2_abrams.jpg",
		"TankName": "M1A2 Abrams Main Battle Tank",
		"History": "Approved for production in 1990, the M1A2 represents the U.S. Army’s technological improvement of the basic M1A1 design and the most modern battle tank in the world.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":7,
		"Tankimage":"http://www.military-today.com/tanks/t90.jpg",
		"TankName": "T-90 Main Battle Tank",
		"History": "The T-90 main battle tank is a further development of the T-72. It was accepted to service with Russian army in 1993 and its low-rate production commenced in 1994.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":8,
		"Tankimage":"http://ic.pics.livejournal.com/yuripasholok/765139/2483686/2483686_original.jpg",
		"TankName": "T-60 (A brother's grave for two) ",
		"History": "The T-60 was the result of the ongoing development of light tanks that had started well before WWII.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":9,
		"Tankimage":"https://upload.wikimedia.org/wikipedia/commons/6/6c/T-70,_technical_museum,_Togliatti-4.jpg",
		"TankName": "T-70",
		"History": "The T-70 was yet another stop-gap in Soviet tank production.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":10,
		"Tankimage":"http://atvtank.ru/files/pictureBox/catalogItem/335/5.jpg",
		"TankName": "T-80",
		"History": "The most remarkable trait about this Soviet MBT was its turbine, used as main motricity power. It was indeed the first conventional MBT equipped with a turbine, preceding the M1 Abrams from two years in service.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{	
		"id":11,
		"Tankimage":"http://armedforcesmuseum.com/wp-content/uploads/2012/04/Tank-M4-Sherman.jpg",
		"TankName": "M4 Sherman",
		"History": "The American M4 Sherman Medium Tank formed the backbone of the World War 2 Allied armored offensive.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{
		"id":12,
		"Tankimage":"http://www.warlordgames.com/wp-content/uploads/2016/11/ST03.jpg",
		"TankName":"M3 Stuart",
		"History":"American light tank development in the USA was confounded with tank development itself.",
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"
	},
	{	
		"id":13,
		"Tankimage":"http://wotlabs.net/articles/wp-content/uploads/2014/03/kv-2-heavy-tank-05.png" ,
		"TankName":"KV-2 (The Bunker Buster)" ,
		"History":"The Russo-Finnish war proved the soundness of the decision to manufacture the KV-1." ,
		"link1": "Update",
		"link2": "Delete",
		"link3": "More"

	},
	{
		"id":14,
		"Tankimage":"http://www.achtungpanzer.com/images/hunpz4.jpg" ,
		"TankName":" Panzerkampfwagen IV Ausf F(F1)" ,
		"History":"Panzerkampfwagen IV was the main German tank of World War II, in action from September 1st of 1939 to May 9th of 1945." ,
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
	Create_Tank(){
	let Cid = document.getElementById('Tank_id');
	let Tankimg= document.getElementById('Tank_photo');
	let TN = document.getElementById('Tank_Name');
	let H =document.getElementById('tank_description');

		let Tankcreate = {
			"id":Cid.value,
			"Tankimage":Tankimg.value,
			"TankName":TN.value,
			"History":H.value};
		this.tanks.push(Tankcreate);
		Cid.value='';
		 Tankimg.value ='';
		  TN.value ='';
		   H.value = '';
		// this.List_Of_Tanks();
		// $('#List_Of_Tanks').show();
		// $('#TankCreate').hide();

	// this.reRender(
	// 	`${html}`, document.getElementById("app"))
}
	findTankByID(id){
		let r = this.tanks;
		for(let i=0;i<r.length;i++){
			if(id==r[i].id){
				return r[i];
			}
		}
	}
	findTankbyName(TankName){
	let objects =[];
	let r= this.tanks;
	for(let i=0;i<r.length;i++){
	let expr=(r[i].TankName.toUpperCase().indexOf(TankName.toUpperCase())>-1);
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
	TankView(id){
	let r = this.findTankByID(id);

let html=`
	<h5 class="center-align">${r.name}</h5>
 			<div class="row">				
 				<div class="col s12 m12">
 					<div class="card horizontal small">
 						<div class="card-image">
 							<img src="${r.Tankimage}">
 						</div>
 						<div class="card-stacked">
 							<div class="card-content">
 								<p>${r.History}</p>
 							</div>
 							<div class="card-action small">								
 								<span onclick="component.delete(${r.id})" class="btn small red" data-badge-caption="">DELETE</span>
 								<span onclick="component.tankpediaLayout()" class="btn small" data-badge-caption="">BACK TO HOME</span>
 							</div>
 						</div>					
 					</div>				
 				</div>			
			</div>
		`;


this.reRender(
		`${html}`, document.getElementById("app"))
	$('#TankCreate').hide();
	$('#landingpage').hide();
	$('#List_Of_Tanks').hide();

}

tankpediaLayout(){
		let y = this.tanks;
		let index=0;
		let count=0;
		let html =`<div class="row">`;
		for(let index=0;index<y.length;index++){
	 		if(index === 2)break;
	 		html+=`
	 		
	 			<div class= "col s6 m6">
	 				<div class="card card-big #3e2723 brown darken-4  resizecard">
	 					<div class="card-image  #3e2723 brown darken-4">
	 						<img class="resizeimg" src=${y[index].Tankimage} >
	 						<span class="card-title " style="color:#ff0000; font-weight: bold;">${y[index].TankName}</span>
	 					</div>
	 					<div class="card-content #d50000 #3e2723 brown darken-4 white-text resizecontent">
	 						<p>${y[index].History}</p>
	 					</div>
	 					<div class="card-action #d50000 #3e2723 brown darken-4 white-text resizeaction">
	 						<a  class="waves-effect waves-teal btn-flat red-text small">${y[index].link1}</a>
	 						  <a class="waves-effect waves-teal btn-flat red-text small" onclick="component.Delete()">${y[index].link2}</a>
	 						<a  class="waves-effect waves-teal btn-flat red-text small" onlick="component.TankView()">${y[index].link3}</a>
	 					</div>
	 				</div>
	 			</div>
	 		
	 		`;
     }
     html+=`</div><br>
	 		<br>
	 		<br>
     <div class="row">`;
     	for(let index=2;index<y.length;index++){
     		if(index === 4)break;
	 		html+=`
	 		
	 			<div class= "col s7 m6">
	 				<div class="card card-big #3e2723 brown darken-4  resizecard">
	 					<div class="card-image  #3e2723 brown darken-4">
	 						<img class="resizeimg" src=${y[index].Tankimage} >
	 						<span class="card-title " style="color:#ff0000; font-weight: bold;">${y[index].TankName}</span>
	 					</div>
	 					<div class="card-content #d50000 #3e2723 brown darken-4 white-text resizecontent">
	 						<p>${y[index].History}</p>
	 					</div>
	 					<div class="card-action #d50000 #3e2723 brown darken-4 white-text resizeaction">
	 						<a  class="waves-effect waves-teal btn-flat red-text small">${y[index].link1}</a>
	 						  <a class="waves-effect waves-teal btn-flat red-text small" onclick="component.Delete()">${y[index].link2}</a>
	 						<a  class="waves-effect waves-teal btn-flat red-text small" onlick="component.TankView()">${y[index].link3}</a>
	 					</div>
	 				</div>
	 			</div>
	 		
	 		`;
     }

     html +=`<br>
	 		<br></div>	`;
		this.reRender( `${html}`,document.getElementById("app"));
        }

// `<div class="col s12 m7">
//     <h2 class="header">Horizontal Card</h2>
//     <div class="card horizontal">
//       <div class="card-image">
//         <img src="http://lorempixel.com/100/190/nature/6">
//       </div>
//       <div class="card-stacked">
//         <div class="card-content">
//           <p>I am a very simple card. I am good at containing small bits of information.</p>
//         </div>
//         <div class="card-action">
//           <a href="#">This is a link</a>
//         </div>
//       </div>
//     </div>


      // <table>
      //   <thead>
      //     <tr>
      //         <th data-field="id">Name</th>
      //         <th data-field="name">Item Name</th>
      //         <th data-field="price">Item Price</th>
      //     </tr>
      //   </thead>

      //   <tbody>
      //     <tr>
      //       <td>Alvin</td>
      //       <td>Eclair</td>
      //       <td>$0.87</td>
      //     </tr>
//   </div>}`

	List_Of_Tanks(){
		let y = this.tanks;
		let index =0;
		let html='';
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
	 					<img src=${y[index].Tankimage} >
	 				</div>
	 				<div class="card-stacked">
					<div class="card-content #d50000 #3e2723 brown darken-4 white-text">
					<h3 class="red-text"> ${y[index].TankName}</h3>
	 						<p>${y[index].History}</p>
	 					</div>
	 				
	 					<div class="card-action small #d50000 #3e2723 brown darken-4 white-text ">
	 						<a  class="waves-effect waves-teal btn-flat red-text small"onlick="">${y[index].link1}</a>
	 						  <a class="waves-effect waves-teal btn-flat red-text small" onclick="component.Delete()">${y[index].link2}</a>
	 						<a  class="waves-effect waves-teal btn-flat red-text small" onlick="component.TankView()">${y[index].link3}</a>
	 					</div>
	 				</div>		
	 			</div>
	 		</div>
	 	</div>
	 		`;
     }

		this.reRender(
			`${html}`,document.getElementById("app"))
		$('#landingpage').hide;
	}
TankCreate(){
	let html = `
			<div class="row">
				<form class="col s12">
				<h5 class="center-align">Create New Recipe</h5>
				<button class="btn waves-effect waves-light red" onclick="component.Create_Tank()">Deploy</button>
					<div class="row">
						<div class="input-field col s1 white">
							<input class="blue-text" disabled value="${this.tanks.length+1}" id="tank_id" type="text" class="validate">
						</div>
						<div class="input-field col s6 white">
							<input id="Tank_name" type="text" class="validate">
							<label for="Tank_name">Tank's name</label>
						</div>
					</div>
					<div class="row">
						<div class="input-field col s6 white">
							<input id="tank_description" type="text" class="validate">
							<label for="tank_description">History of tank</label>
						</div>
						<div class="input-field col s6 white">
							<input id="tank_photo" type="text" class="validate">
							<label for="tank_photo">URL photo of tank</label>
						</div>
					</div>
					<div class="row">
					
				</form>
			</div>			
		`;

		this.reRender(`
			${html}
			`,document.getElementById("app"));
		$('#TankCreate').show();
		$('#landingpage').hide();
		$('#List_Of_Tanks').hide();
}
Delete(key){
	let r = this.tanks;
	for(let i=0;i<r.length;i++){
		if(key === r[i].id){
			this.tanks.splice(i,1);
			break;
			}
		}		
		this.tankpediaLayout();
	}
	Update(){
	let html=`update tank`;
	this.reRender(
		`${html}`, document.getElementById("app"))
	$('#landing page').hide
}

//////////////
// recipeView(id){
// 		let r = this.findRecipeByID(id);

// 		let html = `
// 			<h5 class="center-align">${r.name}</h5>
// 			<div class="row">				
// 				<div class="col s12 m12">
// 					<div class="card horizontal small">
// 						<div class="card-image">
// 							<img src="${r.photo}">
// 						</div>
// 						<div class="card-stacked">
// 							<div class="card-content">
// 								<p>${r.description}</p>
// 							</div>
// 							<div class="card-action small">								
// 								<span onclick="component.deleteRecipe(${r.id})" class="new badge small red" data-badge-caption="">DELETE</span>
// 								<span onclick="component.recipeLayout()" class="new badge small" data-badge-caption="">BACK TO HOME</span>
// 							</div>
// 						</div>					
// 					</div>				
// 				</div>			
// 			</div>
// 		`;

// 		html += `
// 			<div class="row">
// 				<table class="striped">
// 					<thead>
// 						<tr>
// 							<th>Preparation Time</th>
// 							<th>Cooking Time</th>
// 							<th>Yields</th>
// 						</tr>
// 					</thead>
// 					<tbody>
// 						<tr>
// 							<td>${r.preparationtime}</td>
// 							<td>${r.cookingtime}</td>
// 							<td>${r.yields}</td>
// 						</tr>					
// 					</tbody>
// 				</table>
// 			</div>
// 		`;

// 		html += `
// 			<div class="row">				
// 				<div class="col s6 m6">
// 					<h6>Ingredients</h6>
// 					<ul class="collection">
// 		`;

// 		for(let i=0;i<r.ingredients.length;i++){
// 			let ri = r.ingredients[i];
// 			html += `
// 						<li class="collection-item avatar">
// 							<i class="material-icons circle">star</i>
// 							<span class="title">${ri.qty}</span>
// 							<p>${ri.name}<br>
								
// 							</p>
							
// 						</li>
// 			`;
// 		}

// 		html += `				
// 					</ul>
// 				</div>
// 				<div class="col s6 m6">
// 					<h6>Procedure</h6>
// 					<ul class="collection">
// 		`;

// 		for(let i=0;i<r.procedure.length;i++){
// 			let rp = r.procedure[i];
// 			html += `
// 						<li class="collection-item avatar">
// 							<i class="material-icons circle">done</i>
// 							<span class="title">Step ${i+1}</span>
// 							<p>${rp}<br>
								
// 							</p>
							
// 						</li>
// 			`;
// 		}	

// 		html += `
// 					</ul>
// 				</div>			
// 			</div>
// 		`;

// 		this.reRender(`		
// 			${html}			
// 			`,document.getElementById("recipeView"));
// 		$('#recipeView').show();
// 		$('#recipeRecent').hide();
// 		$('#recipeList').hide();
// 		$('#recipeCreate').hide();
// 	}
Create_Tank(){
	let Cid = document.getElementById('Tank_id');
	let Tankimg= document.getElementById('Tank_photo');
	let TN = document.getElementById('Tank_Name');
	let H =document.getElementById('tank_description');

		let Tankcreate = {
			"id":Cid.value,
			"Tankimage":Tankimg.value,
			"TankName":TN.value,
			"History":H.value};
		this.tanks.push(Tankcreate);
		Cid.value='';
		 Tankimg.value ='';
		  TN.value ='';
		   H.value = '';
		// this.List_Of_Tanks();
		// $('#List_Of_Tanks').show();
		// $('#TankCreate').hide();

	// this.reRender(
	// 	`${html}`, document.getElementById("app"))
}
searchtank(name){
		let html = ``;
		let r = this.findTankbyName(name);
		for(let i=0;i<r.length;i++){
			html= `
				<div class="col s12 m4">
					<div class="card small hoverable">
						<div class="card-image">
							<img src="${r[i].Tankimage}">
							<span class="card-title">${r[i].TankName}</span>
						</div>
						<div class="card-content">
							<p>${r[i].History}</p>
						</div>
						<div class="card-action">
							<a href="#" onclick="component.findTankByID(${r[i].id})">More</a>
						</div>
					</div>
				</div>
			`;
		}
		this.reRender(`
			${html}
			`,document.getElementById("recipeListItems"));
		$('#recipeList').show();
		$('#recipeView').hide();
		$('#recipeRecent').hide();	
		$('#recipeCreate').hide();
	
}
}
// function visitPage(){
//         window.location='http://www.google.com';
//     }
let component = new Component();
component.tankpediaLayout();

// 


//	deleteRecipe(key){
// 		let r = this.recipe;
// 		for(let i=0;i<r.length;i++){
// 			if(r[i].id == key){
// 				this.recipe.splice(i,1);
// 				break;
// 			}
// 		}		
// 		this.recipeLayout();
// 	}

// 	this.reRender(
// 		`${html}`, document.getElementById("app"))
// 	$('#landing page').hide
// }



// 		this.state = [
// 			{
// 				"bind": {
// 					"procedures":[],
// 					"ingredients_qty":[],
// 					"ingredients_name":[]
// 				}
// 			}
// 		];
// 	}

// 	render(html, component){

// 		component.innerHTML += html;
// 	}

// 	reRender(html, component){

// 		component.innerHTML = html;
// 	}

// 	createRecipe(){
// 		let id = document.getElementById('recipe_id');
// 		let name = document.getElementById('recipe_name');
// 		let description = document.getElementById('recipe_description');
// 		let photo = document.getElementById('recipe_photo');
// 		let preparationtime = document.getElementById('recipe_preparationtime');
// 		let cookingtime = document.getElementById('recipe_cookingtime');
// 		let yields = document.getElementById('recipe_yields');
		
// 		let dummyIngredients = [];
// 		for(let i=0;i<this.state[0].bind.ingredients_qty.length;i++){
// 			dummyIngredients.push({
// 				"qty" : this.state[0].bind.ingredients_qty[i],
// 				"name" : this.state[0].bind.ingredients_name[i]
// 			});
// 		}
// 		let ingredients = dummyIngredients;

// 		let dummyProcedure = [];
// 		for(let i=0;i<this.state[0].bind.procedures.length;i++){
// 			dummyProcedure.push(this.state[0].bind.procedures[i]);
// 		}
// 		let procedure = dummyProcedure;

// 		let recipe = {			
// 			"id": id.value,
// 			"name": name.value,
// 			"description": description.value,
// 			"photo": photo.value,
// 			"ingredients":ingredients,
// 			"preparationtime": preparationtime.value,
// 			"cookingtime": cookingtime.value,
// 			"yields": yields.value,
// 			"procedure": procedure
// 		};


// 		this.recipe.push(recipe);

// 		//Clear Fields
// 		this.state[0].bind.procedures = this.state[0].bind.ingredients_qty = this.state[0].bind.ingredients_name = [];
// 		id.value = name.value = description.value = photo.value = preparationtime.value = cookingtime.value = yields.value = ''; 
// 	}	

// 	deleteRecipe(key){
// 		let r = this.recipe;
// 		for(let i=0;i<r.length;i++){
// 			if(r[i].id == key){
// 				this.recipe.splice(i,1);
// 				break;
// 			}
// 		}		
// 		this.recipeLayout();
// 	}

// 	findRecipeByID(id){
// 		let r = this.recipe;
// 		for(let i=0;i<r.length;i++){
// 			if(id==r[i].id){
// 				return r[i];
// 			}
// 		}
// 	}	

// 	findRecipeByName(name){
// 		let objects = [];
// 		let r = this.recipe;
// 		for(let i=0;i<r.length;i++){
// 			let expr = (r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
// 			// console.log(name," vs ",r[i].name," = ",expr);
// 			if(expr){
// 				objects.push(r[i]);
// 			}
// 		}
// 		return objects;
// 	}

// 	bindRecipeNewProcedures(val,id){
// 		let bind = this.state[0].bind.procedures;
// 		bind[id] = val;
// 		// console.log(bind);
// 	}	

// 	bindRecipeNewIngredients(val,id,obj){
// 		let bind = null;
// 		if(obj === "qty"){
// 			bind = this.state[0].bind.ingredients_qty;
// 		}
// 		else if(obj === "name"){
// 			bind = this.state[0].bind.ingredients_name;
// 		}
// 		bind[id] = val;
// 		// console.log(bind);
// 	}	
// }

// class Component extends App{
// 	constructor(){
		
// 		super();
// 	}
// 	createMovie(){
// 		let t = document.getElementById('newTitle');
// 		let y = document.getElementById('newYear');
// 		let d = document.getElementById('newDirector');
// 		let p = document.getElementById('newPoster');
// 		let a = document.getElementById('newActors');

// 		let movie = {"Title":t.value,"Year":y.value,"Director":d.value,"Poster":p.value,"Actors":a.value};
// 		this.movies.push(movie);

// 		t.value = y.value = d.value = p.value = a.value = ''; //Clear Fields
// 		this.movieListInfo();
// 	}



// 	updateMovie(key){
// 		let t = document.getElementById('updateTitle');
// 		let y = document.getElementById('updateYear');
// 		let d = document.getElementById('updateDirector');
// 		let a = document.getElementById('updateActors');

// 		let m = this.movies[key];
// 		let movie = {"id":m.id,"Title":t.value,"Year":y.value,"Director":d.value,"Poster":m.Poster,"Actors":a.value};

// 		this.movies[key] = movie;
// 		let details = document.getElementById('movieDetails');
// 		details.innerHTML = "";
		
// 		this.movieListInfo();
// 		this.showMovieList();
// 	}
/*
	recipeLayout(){
		let html = `
			<div id="recipeLayout" class="container">
				<nav>
					<div class="nav-wrapper">
						<a href="#" onclick="component.recipeLayout()" class="brand-logo">&nbsp;&nbsp;SUD-AN</a>
						<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
						<ul class="right hide-on-med-and-down">
							<li><a href="#" onclick="component.recipeList()"><i class="material-icons left">assignment</i>Recipes</a></li>
							<li><a href="#" onclick="component.recipeCreate()"><i class="material-icons left">note_add</i>Create</a></li>
						</ul>
						<ul class="side-nav" id="mobile-demo">
							<li><a href="#" onclick="component.recipeList()"><i class="material-icons left">assignment</i>Recipes</a></li>
							<li><a href="#" onclick="component.recipeCreate()"><i class="material-icons left">note_add</i>Create</a></li>
						</ul>
					</div>
				</nav>

				<div id="recipeRecent"></div>
				<div id="recipeView"></div>
				<div id="recipeList"></div>
				<div id="recipeCreate"></div>

				<footer class="page-footer">
					<div class="container">
						<div class="row">
							<div class="col l6 s12">
								<h5 class="white-text">Recipe App</h5>
								<p class="grey-text text-lighten-4">Another decode demo app for students in web dev't and oop. A bisaya inspired recipe app that promotes native food and culture.</p>
							</div>
							<div class="col l4 offset-l2 s12">
								<h5 class="white-text">Links</h5>
								<ul>
									<li>
										<a class="grey-text text-lighten-3" href="#" onclick="component.recipeLayout()">
											<!-- <i class="material-icons left">dashboard</i> -->
											Home</a></li>
											<li><a class="grey-text text-lighten-3" href="#" onclick="component.recipeList()">
												<!-- <i class="material-icons left">assignment</i> -->
												Recipes</a></li>
												<li><a class="grey-text text-lighten-3" href="#" onclick="component.recipeCreate()">
													<!-- <i class="material-icons left">dashboard</i> -->
													Create</a></li>
												</ul>
											</div>
										</div>
									</div>
									<div class="footer-copyright">
										<div class="container">
											© 2016-2017 Copyright Text
											<img class="right" src="img/decode.png" style="margin-top:6px;" />

										</div>
									</div>
								</footer>	

							</div>
		`;

		this.reRender(`
			${html}

			`,document.getElementById("app"));
		this.recipeRecent();		
	}

	recipeRecent(){
		
		let html = `
			<h5 class="center-align">Recent Recipes</h5>
			<div class="row">
		`;

	

	recipeView(id){
		let r = this.findRecipeByID(id);

		let html = `
			<h5 class="center-align">${r.name}</h5>
			<div class="row">				
				<div class="col s12 m12">
					<div class="card horizontal small">
						<div class="card-image">
							<img src="${r.photo}">
						</div>
						<div class="card-stacked">
							<div class="card-content">
								<p>${r.description}</p>
							</div>
							<div class="card-action small">								
								<span onclick="component.deleteRecipe(${r.id})" class="new badge small red" data-badge-caption="">DELETE</span>
								<span onclick="component.recipeLayout()" class="new badge small" data-badge-caption="">BACK TO HOME</span>
							</div>
						</div>					
					</div>				
				</div>			
			</div>
		`;

		html += `
			<div class="row">
				<table class="striped">
					<thead>
						<tr>
							<th>Preparation Time</th>
							<th>Cooking Time</th>
							<th>Yields</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>${r.preparationtime}</td>
							<td>${r.cookingtime}</td>
							<td>${r.yields}</td>
						</tr>					
					</tbody>
				</table>
			</div>
		`;

		html += `
			<div class="row">				
				<div class="col s6 m6">
					<h6>Ingredients</h6>
					<ul class="collection">
		`;

		for(let i=0;i<r.ingredients.length;i++){
			let ri = r.ingredients[i];
			html += `
						<li class="collection-item avatar">
							<i class="material-icons circle">star</i>
							<span class="title">${ri.qty}</span>
							<p>${ri.name}<br>
								
							</p>
							
						</li>
			`;
		}

		html += `				
					</ul>
				</div>
				<div class="col s6 m6">
					<h6>Procedure</h6>
					<ul class="collection">
		`;

		for(let i=0;i<r.procedure.length;i++){
			let rp = r.procedure[i];
			html += `
						<li class="collection-item avatar">
							<i class="material-icons circle">done</i>
							<span class="title">Step ${i+1}</span>
							<p>${rp}<br>
								
							</p>
							
						</li>
			`;
		}	

		html += `
					</ul>
				</div>			
			</div>
		`;

		this.reRender(`		
			${html}			
			`,document.getElementById("recipeView"));
		$('#recipeView').show();
		$('#recipeRecent').hide();
		$('#recipeList').hide();
		$('#recipeCreate').hide();
	}

	recipeList(){
		let html = `
			<br/>
		  	<nav>
	    		<div class="nav-wrapper white">
					<form>
						<div class="input-field">				
							<input onkeyup="component.recipeListItems(this.value)" id="search" type="search" placeholder="Search" required>
							<label for="search"><i class="material-icons">search</i></label>
							<i class="material-icons">close</i>
						</div>
					</form>
				</div>
			</nav>
			<br/>
		`;

		html += `
			<div class="row" id="recipeListItems">
		`;
		let r = this.recipe;
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
							<a href="#" onclick="component.recipeView(${r[i].id})">More</a>
						</div>
					</div>
				</div>
			`;
		}

		html += `</div>`;

		this.reRender(`
			${html}
			`,document.getElementById("recipeList"));
		$('#recipeList').show();
		$('#recipeView').hide();
		$('#recipeRecent').hide();
		$('#recipeCreate').hide();		
	}

	recipeListItems(name){
		let html = ``;
		let r = this.findRecipeByName(name);
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
							<a href="#" onclick="component.recipeView(${r[i].id})">More</a>
						</div>
					</div>
				</div>
			`;
		}		
		this.reRender(`
			${html}
			`,document.getElementById("recipeListItems"));
		$('#recipeList').show();
		$('#recipeView').hide();
		$('#recipeRecent').hide();	
		$('#recipeCreate').hide();
	}

	recipeCreate(){
		let html = `
			<div class="row">
				<form class="col s12">
				<h5 class="center-align">Create New Recipe</h5>
				<button onclick="component.createRecipe()" class="btn waves-effect waves-light">Save</button>
					<div class="row">
						<div class="input-field col s6">
							<input disabled value="${this.recipe.length+1}" id="recipe_id" type="text" class="validate">
						</div>
						<div class="input-field col s6">
							<input id="recipe_name" type="text" class="validate">
							<label for="recipe_name">NAME</label>
						</div>
					</div>
					<div class="row">
						<div class="input-field col s6">
							<input id="recipe_description" type="text" class="validate">
							<label for="recipe_description">DESCRIPTION</label>
						</div>
						<div class="input-field col s6">
							<input id="recipe_photo" type="text" class="validate">
							<label for="recipe_photo">PHOTO</label>
						</div>
					</div>
					<div class="row">
						<div class="input-field col s4">
							<input id="recipe_preparationtime" type="text" class="validate">
							<label for="recipe_preparationtime">PREPARATION TIME</label>
						</div>
						<div class="input-field col s4">
							<input id="recipe_cookingtime" type="text" class="validate">
							<label for="recipe_cookingtime">COOKING TIME</label>
						</div>
						<div class="input-field col s4">
							<input id="recipe_yields" type="text" class="validate">
							<label for="recipe_yields">YIELDS</label>
						</div>
					</div>


					<div class="row">
						<div class="input-field col s6">
							<h6> INGREDIENTS</h6>
							<button onclick="component.recipeNewIngredients()" class="btn-floating waves-effect waves-light"><i class="material-icons">add</i></button>
							<div id="recipeNewIngredients"></div>
						</div>
						<div class="input-field col s6">
							<h6>PROCEDURES</h6>
							<button onclick="component.recipeNewProcedures()" class="btn-floating waves-effect waves-light"><i class="material-icons">add</i></button>
							<div id="recipeNewProcedures"></div>
						</div>
					</div>					
				</form>
			</div>			
		`;

		this.reRender(`
			${html}
			`,document.getElementById("recipeCreate"));
		$('#recipeCreate').show();
		$('#recipeList').hide();
		$('#recipeView').hide();
		$('#recipeRecent').hide();
		this.state[0].bind.procedures = [];		
		this.state[0].bind.ingredients_qty = [];		
		this.state[0].bind.ingredients_name = [];		
	}

	recipeNewProcedures(){
		let bind = this.state[0].bind.procedures;
		bind.push("");		
		
		let html = ``;
		for(let i=0;i<bind.length;i++){
			let decode_bind = `onkeyup="component.bindRecipeNewProcedures(this.value,${i})"`;
			html += `
				<div class="row">
					<div class="input-field col s12">
						<input ${decode_bind} value="${bind[i]}" type="text" />					
					</div>
				</div>		
			`;
		}

		this.reRender(`
			${html}
			`,document.getElementById("recipeNewProcedures"));
	}

	recipeNewIngredients(obj){
		let bind_qty = this.state[0].bind.ingredients_qty;
		let bind_name = this.state[0].bind.ingredients_name;
		bind_qty.push("");		
		bind_name.push("");		
		
		let html = ``;
		for(let i=0;i<bind_qty.length;i++){
			let decode_bind_qty = `onkeyup="component.bindRecipeNewIngredients(this.value,${i},'qty')"`;
			let decode_bind_name = `onkeyup="component.bindRecipeNewIngredients(this.value,${i},'name')"`;
			html += `
				<div class="row">
					<div class="input-field col s12">
						<input ${decode_bind_qty} value="${bind_qty[i]}" type="text" />					
					</div>
				</div>	
				<div class="row">
					<div class="input-field col s12">
						<input ${decode_bind_name} value="${bind_name[i]}" type="text" />					
					</div>
				</div>		
			`;
		}

		this.reRender(`
			${html}
			`,document.getElementById("recipeNewIngredients"));
	}	


}

let component = new Component();
component.recipeLayout();
*/

//////////////////////////////////////

/*
"use strict";

class App{
	constructor(){
		this.movies = [
			{
				"id": 1,
				"Title":"Winter Is Coming",
				"Year":"2011",
				"Director":"Timothy Van Patten",
				"Poster":"img/winteriscoming.jpg",
				"Actors":"Sean Bean, Mark Addy, Nikolaj Coster-Waldau, Michelle Fairley"
			},
			{
				"id": 2,
				"Title":"The North Remembers",
				"Year":"2012",
				"Director":"Alan Taylor",
				"Poster":"img/thenorthremembers.jpg",
				"Actors":"Peter Dinklage, Lena Headey, Nikolaj Coster-Waldau, Michelle Fairley"
			},
			{
				"id": 3,
				"Title":"Valar Dohaeris",
				"Year":"2013",
				"Director":"Daniel Minahan",
				"Poster":"img/valar.jpg",
				"Actors":"Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington"
			},
			{
				"id": 4,
				"Title":"Two Swords",
				"Year":"2014",
				"Director":"D.B. Weiss",
				"Poster":"img/twoswords.jpg",
				"Actors":"Peter Dinklage, Nikolaj Coster-Waldau, Lena Headey, Emilia Clarke"
			},
			{
				"id": 5,
				"Title":"The Wars to Come",
				"Year":"2015",
				"Director":"Michael Slovis",
				"Poster":"img/thewarstocome.jpg",
				"Actors":"Peter Dinklage, Nikolaj Coster-Waldau, Lena Headey, Emilia Clarke"
			},
			{
				"id": 6,
				"Title":"The Red Woman",
				"Year":"2016",
				"Director":"Jeremy Podeswa",
				"Poster":"img/redwoman.jpg",
				"Actors":"Peter Dinklage, Nikolaj Coster-Waldau, Lena Headey, Emilia Clarke"
			}
		];
	}

	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

	

	showLandingPage(){
		$('#landingpage').show();
		$('#createpage').hide();
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}	

	showMovieList(){
		$('#landingpage').hide();
		$('#createpage').hide();
		$('#readpage').show();
		$('#updatedeletepage').hide();
	}

	showMovieCreate(){
		$('#landingpage').hide();
		$('#createpage').show();		
		$('#readpage').hide();
		$('#updatedeletepage').hide();
	}

	showUpdateDelete(){
		$('#landingpage').hide();
		$('#createpage').hide();		
		$('#readpage').hide();
		$('#updatedeletepage').show();
	}	

	searchMovie(value=""){
		let objects = [];
		let r = this.movies;
		for(let i=0;i<r.length;i++){
			// console.log("r:",r[i].Title.toUpperCase().indexOf(title.toUpperCase()));
			let expr1 = (r[i].Title.toUpperCase().indexOf(value.toUpperCase()) > -1);
			let expr2 = (r[i].Year.toUpperCase().indexOf(value.toUpperCase()) > -1);
			// console.log(name," vs ",r[i].name," = ",expr);
			if(expr1 || expr2){
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

	movieList(){
		this.render(
			`	      
		<div class="header clearfix">
            <nav>
              <ul class="nav nav-pills float-xs-right">
                <li class="nav-item">
                  <a class="nav-link" href="#" onclick="component.showLandingPage()">
					<i class="fa fa-home"></i>
                  	Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#" onclick="component.showMovieList()">
					<i class="fa fa-list"></i>
                  	Movie List</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" onclick="component.showMovieCreate()">
					<i class="fa fa-film"></i>
                  	Movie Create</a>
                </li>
              </ul>
            </nav>            
            <h3 class="text-muted">
            	<img class="decode-logo" src="img/decode.png"  />
            	Movie App
            </h3>
          </div>


		<div id="landingpage">
          <div class="jumbotron">
            <h1 class="display-3">Movie App</h1>
            <p class="lead">A simple decode demo app about movie.</p>
            <i class="fa fa-film fa-5x red"></i>
          </div>

          <div class="row marketing">
            <div class="col-lg-6">              
              <h4>
              	<i class="fa fa-gears green"></i>
              	Create Movie</h4>
              <p>Provides an interface to allow adding new movie to the list. </p>

              <h4>
				<i class="fa fa-gears green"></i>
              	Read Movie</h4>
              <p>Provides a list view that supports movie search and show details features.</p>

            </div>

            <div class="col-lg-6">
              <h4>
              	<i class="fa fa-gears green"></i>
              	Update Movie</h4>
              <p>Allows the user to modify the content of a particular movie.</p>

              <h4>
              	<i class="fa fa-gears green"></i>
              	Delete Movie</h4>
              <p>Allows the user to remove a particular movie object from the list.</p>

            </div>
          </div>          

		</div>
				
				<div id="createpage" class="row marketing">
					<div class="col col-sm-12">
						<div id="movieCreate"></div>						
					</div>
				</div>

				<div id="readpage" class="row marketing">
					<div class="col col-sm-12">
						<h1>Movie List</h1>
						<table id="movieList" class="table">
							<thead>
								<tr>
									<th>Title</th>
									<th>Year</th>
									<th>Action</th>
								</tr>
							</thead>
							<div class="form-group">
							    <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
							    <div class="input-group">
							      <div class="input-group-addon">
									  <span class="fa fa-search"></span>
									  <!-- checkout other fontawesome icons at http://fontawesome.io/icons/ -->
							      </div>
							      <input oninput="component.movieListInfo(this.value)" type="text" class="form-control" placeholder="Search">
							    </div>
							  </div>
							<tbody id="movieListInfo"></tbody>
						</table>
					</div>
				</div>

				<div id="updatedeletepage" class="row marketing">
					<div id="movieDetails"></div>
				</div>
				
          <footer class="footer">
            <p>&copy; decode 2016</p>
          </footer>

			`
			,document.getElementById('app'));
		this.movieListInfo();
		$('#landingpage').show();
		$('#createpage').hide();		
		$('#readpage').hide();
	}

	movieListInfo(filter){
		// console.log(filter);
		let html = "";
		// let m = this.movies;
		let m = this.searchMovie(filter);
		for(let i=0;i<m.length;i++){	
			html += `
				<tr>
					<td>${m[i].Title}</td>
					<td>${m[i].Year}</td>
					<td><button class="btn btn-primary"  onclick="component.movieDetails(${i})">Show Details</button></td>
				</tr>
			`;
		}
		this.reRender(html,document.getElementById('movieListInfo'));
	}

	movieDetails(key){
		this.reRender(
			`
				<h1>Movie Details</h1>
				<div class="media">
				    <div class="media-left">
				        <a href="#">
				            <img class="media-object img-thumbnail" src="${this.movies[key].Poster}" width="220" />
				        </a>
				    </div>
				    <div class="media-body" id="movieDetailsInfo">
				        <h4 class="media-heading">${this.movies[key].Title}</h4>
				        Year: ${this.movies[key].Year}<br/>
						Director: ${this.movies[key].Director}<br/>
						Actors: ${this.movies[key].Actors}<br/>
						<button class="btn btn-success" onclick="component.movieUpdate(${key})">Update</button>
						<button class="btn btn-danger" onclick="component.deleteMovie(${key})">Delete</button>
						<button class="btn btn-info" onclick="component.showMovieList()">Back</button>
					</div>	
				</div>			
			`,document.getElementById('movieDetails'));
			this.showUpdateDelete();
	}

	movieCreate(){
		this.render(
			`
				<h1>Movie Create</h1>
				Title: <input class="form-control" id="newTitle" type="" placeholder="Enter Title" /><br/>
				Year: <input class="form-control" id="newYear" type="" placeholder="Enter Title" /><br/>
				Director: <input class="form-control" id="newDirector" type="" placeholder="Enter Director" /><br/>
				Poster: <input class="form-control" id="newPoster" type="" placeholder="Enter Poster" /><br/>
				Actors: <input class="form-control" id="newActors" type="" placeholder="Separate using comma" /><br/>
				<button class="btn btn-primary" onclick="component.createMovie()">Create</button>
			`,document.getElementById('movieCreate'));
	}

	movieUpdate(key){
		this.reRender(
			`
				<div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>ID</span>
		        	</span>
		        	<input readonly class="form-control" type="text" value="${this.movies[key].id}" /><br/>
		        </div>
		        <br/>
		        <div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>Title</span>
		        	</span>
		        	<input class="form-control" id="updateTitle" type="text" value="${this.movies[key].Title}" /><br/>
		        </div>
		        <br/>
		        <div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>Year</span>
		        	</span>
		        	<input class="form-control" id="updateYear" type="text" value="${this.movies[key].Year}" /><br/>
		        </div>
		        <br/>
		        <div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>Director</span>
		        	</span>
		        	<input class="form-control" id="updateDirector" type="text" value="${this.movies[key].Director}" /><br/>
		        </div>	
		        <br/>
		        <div class="input-group input-group-md">
		        	<span class="input-group-addon">
		        		<span>Actors</span>
		        	</span>
		        	<input class="form-control" id="updateActors" type="text" value="${this.movies[key].Actors}" /><br/>
		        </div>	
				<br/>
				<button class="btn btn-success btn-block" onclick="component.updateMovie(${key})">Save</button>
			`,document.getElementById('movieDetailsInfo'));
	}


	
}

let component = new Component();
component.movieList();
component.movieCreate();

*/