const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const instructions = document.getElementById("instruction");

form.addEventListener('submit', e => {
    e.preventDefault();
   let searchVal = search.value;
   if(searchVal === ''){
       alert("Enter a Meal!");
   } else{
	   findMeals(searchVal);
}
}
)

function findMeals(searchVal) {
	result.innerHTML = "";
try{
	fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+searchVal)
.then(a => a.json() )
.then(response =>{
	console.log(response);
	const l=  response.meals;
	if(l=== null){
		result.innerHTML+='<h2> No recipes found for ' + searchVal + '</h2>'
	} else
		for(var i = 0; i<l.length; i++){
			result.innerHTML+='<div><h2>'+l[i].strMeal+'</h2>'+
			'<h3> '+l[i].strCategory+'</h3><br><img src =' + l[i].strMealThumb + '><h2 id="inst">Instructions: </h2><div><h4>'+l[i].strInstructions+'</h4></div><br><a href =' + l[i].strSource + '><button>Read More</button></a><br><br><br><br></div>'
	
		}
	
	
});
} 
catch(e){
	console.log(e);
}
}

function gridView() {
	for (var i = 0; i < elements.length; i++) {
	  elements[i].style.width = "50%";
	}
  }

