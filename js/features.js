const about = document.getElementById("aboutChange");
const experience = document.getElementById("experience");
const work = document.getElementById("work");

document.getElementById("div-about").addEventListener("click", () => {
	about.hidden = false;
	experience.hidden = true;
	work.hidden = true;
});

document.getElementById("div-exp").addEventListener("click", () => {
	about.hidden = true;
	experience.hidden = false;
	work.hidden = true;
});

document.getElementById("div-work").addEventListener("click", () => {
	about.hidden = true;
	experience.hidden = true;
	work.hidden = false;
});
