const d = document;

const btnArrow = d.getElementById("btnArrow");

function showBtn() {
	btnArrow.classList.add("show");
}
function hideBtn() {
	btnArrow.classList.remove("show");
}
function scrollToUp(e) {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
btnArrow.addEventListener("click", scrollToUp);
window.addEventListener("scroll", (e) => {
	if (scrollY >= 689) {
		showBtn();
	} else {
		hideBtn();
	}
});
