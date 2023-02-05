const whatNew = document.getElementById("new");
const collaboration = document.getElementById("collaboration");
const world = document.getElementById("world");
const collection = document.getElementById("collection");
const orginals = document.getElementById("orginals");

document.getElementById("div-new").addEventListener("click", () => {
	console.log(window.getComputedStyle(whatNew).visibility);
	if (whatNew.style.display == "none") {
		whatNew.style.display = "block";
		collaboration.style.display = "none";
		world.style.display = "none";
		collection.style.display = "none";
		orginals.style.display = "none";
	} else {
		whatNew.style.display = "none";
		collaboration.style.display = "none";
		world.style.display = "none";
		collection.style.display = "none";
		orginals.style.display = "none";
	}
});

document.getElementById("div-colab").addEventListener("click", () => {
	console.log(window.getComputedStyle(collaboration).visibility);
	if (collaboration.style.display == "none") {
		whatNew.style.display = "none";
		collaboration.style.display = "block";
		world.style.display = "none";
		collection.style.display = "none";
		orginals.style.display = "none";
	} else {
		whatNew.style.display = "none";
		collaboration.style.display = "none";
		world.style.display = "none";
		collection.style.display = "none";
		orginals.style.display = "none";
	}
});

document.getElementById("div-world").addEventListener("click", () => {
	console.log(window.getComputedStyle(world).visibility);
	if (world.style.display == "none") {
		whatNew.style.display = "none";
		collaboration.style.display = "none";
		world.style.display = "block";
		collection.style.display = "none";
		orginals.style.display = "none";
	} else {
		whatNew.style.display = "none";
		collaboration.style.display = "none";
		world.style.display = "none";
		collection.style.display = "none";
		orginals.style.display = "none";
	}
});

document.getElementById("div-colec").addEventListener("click", () => {
	console.log(window.getComputedStyle(whatNew).visibility);
	if (whatNew.style.display == "none") {
		whatNew.style.display = "noe";
		collaboration.style.display = "none";
		world.style.display = "none";
		collection.style.display = "block";
		orginals.style.display = "none";
	} else {
		whatNew.style.display = "none";
		collaboration.style.display = "none";
		world.style.display = "none";
		collection.style.display = "none";
		orginals.style.display = "none";
	}
});

document.getElementById("div-org").addEventListener("click", () => {
	console.log(window.getComputedStyle(whatNew).visibility);
	if (whatNew.style.display == "none") {
		whatNew.style.display = "none";
		collaboration.style.display = "none";
		world.style.display = "none";
		collection.style.display = "none";
		orginals.style.display = "block";
	} else {
		whatNew.style.display = "none";
		collaboration.style.display = "none";
		world.style.display = "none";
		collection.style.display = "none";
		orginals.style.display = "none";
	}
});
