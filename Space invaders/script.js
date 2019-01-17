	// Recuperation du canvas
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

	// Taille du canvas
canvas.width = 700;
canvas.height = 700;

	// Rafraichissement du canvas
let fps = setInterval(clearCanvas, 5);

	// Fonction appellé au chargement de la page
function onLoad(){
		// Fonction draw pour dessiner les élement de départ
	draw();
	
}
	// Fusee 1 
let fusee1img = new Image();
fusee1img.src="img/fusee.png";
let fusee1 = {x:0, y:canvas.height-50, width:50, height:50};

	// Fusee 2
let fusee2img = new Image();
fusee2img.src = "img/fusee2.png";
let fusee2 = {x:canvas.width/2, y:0, width:50, height:50};

/************	Evenements des touches	************/ 


	// liste des touches enfoncées
let touches = [];
	// Ajouter la touche à la liste
window.addEventListener("keypress", function(e){

	
	// Switch des differentes touches
	switch(e.key){
				// Touche Z
			case "z":
			if(touches.includes("z") == false){
				touches.push("z");
			}
			break;

				// Touche A
			case "a":
			if(touches.includes("a") == false){
				touches.push("a");
			}
			break;

				// Fleche de gauche
			case "ArrowLeft":
			if(touches.includes("ArrowLeft") == false){
				touches.push("ArrowLeft");
			}
			break;

				// Bas2
			case "ArrowRight":
			if(touches.includes("ArrowRight") == false){
				touches.push("ArrowRight");
			}
			break;

	}

})

	// Retirer la touche de la liste 
window.addEventListener("keyup", function(e){
	switch(e.key){
		// Touche Z
		case "z":
			touches.splice(touches.indexOf("z"), 1);
		break;
		// Touche A
		case "a":
			touches.splice(touches.indexOf("a"), 1);
		break;
		// Fleche de gauche
		case "ArrowLeft":
			touches.splice(touches.indexOf("ArrowLeft"), 1);
		break;
		// Bas2
		case "ArrowRight":
			touches.splice(touches.indexOf("ArrowRight"), 1);
		break;

	}
})

let testTouche = setInterval(move, 1);

	// Fonction pour faire bouger la position de la fusee
function move(){
		// Fleche de gauche
	if(fusee1.x > 0){
		if(touches.includes("ArrowLeft")){
			fusee1.x -=2;
		}
			}
	
			// Fleche de droite
	if(fusee1.x < canvas.width-fusee1.width){
		if(touches.includes("ArrowRight")){
			fusee1.x +=2;
		}
			}
	
			// Touche A
	if (fusee2.x >0){
		if(touches.includes("a")){
			fusee2.x -=2;
			console.log("a");
		}
			}
	
			// Touche Z
	if(fusee2.x < canvas.width  - fusee2.width){
		if(touches.includes("z")){
			fusee2.x +=2;
			console.log("z");
		}
			}



}


/************	Evenements des touches	************/

	// Dessiner les élements du jeu
function draw(){
		// Dessin de la fusée 1
	ctx.drawImage(fusee1img, 20, 20, 1000, 1000, fusee1.x, fusee1.y, 50, 50);
		// Dessin de la fusée 2
	ctx.drawImage(fusee2img, 20, 20, 1000, 1000, fusee2.x, fusee2.y, 50, 50);
		// drawImage(image, sx, sy, sLargeur, sHauteur, dx, dy, dLargeur, dHauteur);
}

function clearCanvas(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	draw();
}