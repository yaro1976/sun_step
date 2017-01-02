/*
	L'objectif de cet exercice est de cr�er une
	animation dans un balise canvas. Il s'agit
	d'animer un lever - couch� de soleil sur une
	plaine.

	- Cr��z une balise canvas;
	- Cr�ez un dessin qui repr�sente le ciel;
	- Cr�er un dessin qui repr�sente le soleil;
	- Cr�ez un dessin qui repr�sente votre plaine;
	- Le soleil doit d�crire un arc de cercle au dessus de la plaine;
	- La luminosit� ambiante doit varier en fonction de la hauteur
	  du soleil dans l'espace de dessin.
*/

(function () {
	// get Canvas element
	var canvas = document.getElementById("canvas");
	var soleil = new Image();
	var plaine = new Image();
	var ciel = new Image();
	var angle = 0;

	// Initialize the scene
	var init = function () {
		soleil.src = 'img/sun.png';
		plaine.src = 'img/cracked-ground.jpg';
		ciel.src =   'img/sky.jpg';

		// Use to draw the animation
		// Call every 60s.
		// window.requestAnimationFrame(draw);
		window.setInterval(draw, 60);
	};

	var draw = function () {
		if (canvas.getContext) {
			// Get context
			var ctx = canvas.getContext('2d');
			// code de dessin

			// Erase the context
			ctx.clearRect(0, 0, 800, 800);

			// Draw the sky
			ctx.drawImage(ciel, 0, 0, 600, 150);
			// ctx.save();

			// Draw the plane
			// ctx.drawImage(plaine, 0, 120, 1284, 400, 0, 100, 1284, 50);
			ctx.drawImage(plaine, 1280, 854, -840, -300, 0, 90, 1284, 80);
			ctx.save();

			// Sun
			
			ctx.translate(-10 + 90 * (Math.PI / 180 * angle), 40 - (40 * Math.sin(Math.PI / 180 * angle)));
			
			ctx.drawImage(soleil, 0, 0, 30, 30);
			
			ctx.restore();
			if (angle <= 360) {
				angle += 1;
			}
			else {
				angle = 0;
			}


			// Change contrast of image
			if (angle <= 25) {
				ctx.fillStyle = "rgba(4, 13, 38  , .8)";
				ctx.fillRect(0, 0, 650, 180);
			}
			if ( angle > 25 && angle < 35) {
				ctx.fillStyle = "rgba(4, 13, 38 , .6)";
				ctx.fillRect(0, 0, 650, 180);
			}
			if (angle >=35 && angle <=45 ) {
				ctx.fillStyle = "rgba(4, 13, 38 , .4)";
				ctx.fillRect(0, 0, 650, 180);
			}
			
			if (angle > 45 && angle < 135) {

			}
			
			if (angle >= 135 && angle <=145 ){
				ctx.fillStyle = "rgba(4, 13, 38 , .4)";
				ctx.fillRect(0, 0, 650, 180);
			}
			if (angle > 145 && angle < 155) {
				ctx.fillStyle = "rgba(4, 13, 38 , .6)";
				ctx.fillRect(0, 0, 650, 180);
			}
			if (angle >= 155) {
				ctx.fillStyle = "rgba(4, 13, 38 , .8)";
				ctx.fillRect(0, 0, 650, 180);
			}
		}
		else {
			// code si canvas n'est pas pris en charge
		}


		// Use to draw the animation
		// Call every 60s.
		// window.requestAnimationFrame(draw);

	};

	init();
})();
