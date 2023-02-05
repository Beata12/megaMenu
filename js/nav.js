const features = document.getElementById("features");
const another = document.getElementById("another");

document.getElementById("div-feature").addEventListener("click", () => {
	console.log(window.getComputedStyle(features).visibility);
	if (features.style.display == "none") {
		features.style.display = "block";
		another.style.display = "none";
	} else {
		features.style.display = "none";
		another.style.display = "none";
	}
});

document.getElementById("div-another").addEventListener("click", () => {
	console.log(window.getComputedStyle(features).visibility);
	if (another.style.display == "none") {
		another.style.display = "block";
		features.style.display = "none";
	} else {
		features.style.display = "none";
		another.style.display = "none";
	}
});
