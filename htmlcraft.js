var recipes;
var path_to_mcicons = "http://hydra-media.cursecdn.com/minecraft.gamepedia.com/4/44/InvSprite.png";

/* HTMLCRAFT by Ratzz0 
if you were ripping our website and encountered this file;
this parses the recipes in conjunction with htmlcraft.css which
stilizes them

the recipe format is as following:

<recipe type="3x3">
	<ingredients>
		apple apple apple
		apple apple apple
		apple apple apple
	</ingredients>
	<result>
		packed-ice
	</result>
</recipe>

this file depends on sections.js which contains all the name-id conversion to offsets in InvSprite.png so it must be included
before this

Yes, I know, my code is very awful, but it works on ie at least.

*/

document.createElement('recipe');
document.createElement('ingredients');
document.createElement('result');

function deleteElement(element){
	element.parentNode.removeChild(element);
}

function cleanSplit(str){
	var stra = str.match(/\S+/g);
	return stra;
}

//pretty expensive shit, but whatever 
function id_lookup(str){
	str = str.toLowerCase();
	for(var i = 0; i < mc_id_table.length; i++){
		if(mc_id_table[i][0].toLowerCase() == str){
			return mc_id_table[i][1] - 1;
		}
	}
	return 0;
}

function bodyOnLoad(){
	//do all the parsing and stuff
	recipes = document.body.getElementsByTagName("recipe");
	
	
	for(var i = 0; i < recipes.length; i++){
		var type = recipes[i].getAttribute("type");
			if(type == "3x3") {
				var ingredients = recipes[i].getElementsByTagName("ingredients")[0];
				var result;
				//var ingredients = string.explode();
				var ings = cleanSplit(ingredients.innerHTML);
			//	console.log(ings);
				if(ings.length == 9)
				{
					//so this creates a 3x3 table
					var newTable = document.createElement("table");
					newTable.className = "mcrecipe";
					var newtr;
					var cellnumber = 0;
					var o = 0;
					var n;
					for(o; o < 3; o++){
						newtr = newTable.appendChild(document.createElement("tr"));
						for(n = 0; n < 3; n++){
							var thiscell = newtr.appendChild(document.createElement("td"));
							cellnumber++;
							var thisdiv = thiscell.appendChild(document.createElement("div"));
							thisdiv.className = "imgdiv";
							var sprindex = 3*o + n; //quite expensive but noone cares if it's only 9 elements :D
							thisdiv.style.background = "url(" + path_to_mcicons + ")";
							var pos;
							pos = id_lookup(ings[sprindex]);
							thisdiv.style.backgroundPosition = -pos%32*32 + "px " + -(pos-pos%32)+ "px";
						}
					var p = 0;
					for(p; p < 2; p++){
						var thiscell = newtr.appendChild(document.createElement("td"));
						cellnumber++;
						if(!(cellnumber == 10)){
							thiscell.className = "blank";
						}
						else
						{
							result = recipes[i].getElementsByTagName("result")[0];
							var thisdiv = thiscell.appendChild(document.createElement("div"));
							thisdiv.className = "imgdiv";
							thisdiv.style.background = "url(" + path_to_mcicons + ")";
							var pos;
							
							pos = id_lookup(cleanSplit(result.innerHTML)[0]);
							
							thisdiv.style.backgroundPosition = -pos%32*32 + "px " + -(pos-pos%32)+ "px";
						}
						if(cellnumber == 9){
							thiscell.innerHTML = "=>";
							thiscell.className = "yields";
						}
					}	
					}
				//	console.log(cellnumber);
					
					recipes[i].appendChild(newTable);
					deleteElement(ingredients);
					deleteElement(result);
					recipes[i].style.display = "inline";
					
					
				}
				else
				{
				ingredients.innerHTML = "Invalid ingredient formatting!";
				}
			}
			else if(type == "2x2")
			{
				
			}
			
	}
	
	
}
