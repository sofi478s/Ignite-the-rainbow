window.addEventListener("load", sidenVises);

function sidenVises() {
	console.log("siden vises");

	//Hvad der skal ske
	showStart();
}


function showStart() {
	console.log("show start");

	document.querySelector("#game").classList.add("hide");
	document.querySelector("#start").classList.add("pulse");
	document.querySelector("#start").addEventListener("click", hideMenu);
}


function hideMenu() {
	console.log("hide menu");
	document.querySelector("#start").removeEventListener("click", hideMenu);
	document.querySelector("#start").classList.remove("pulse");
	document.querySelector("#menu_background").classList.add("fade_out");

	document.querySelector("#start").classList.add("fade_out");
	document.querySelector("#start").addEventListener("animationend", startGame);
}

function startGame() {
	console.log("start game");
	document.querySelector("#start").removeEventListener("animationend", startGame);
	document.querySelector("#menu_background").classList.remove("fade_out");
	document.querySelector("#menu_background").classList.add("hide");
	document.querySelector("#game").classList.remove("hide");



}
