const d = document;

const svg = d.getElementById("svg");

const propertiesSvg = {
	width: 900,
	height: 700,
	viewBox: [250, 230, 900, 700],
};

const svgValues = ["width", "height", "viewBox"];

const resetProperties = () => {
	svg.setAttribute(svgValues[0], 1440);
	svg.setAttribute(svgValues[1], 500);
	svg.setAttribute(svgValues[2], [100, 300, 1440, 500]);
};

function changeSvgSize(e) {
	console.log(e);
	if (window.visualViewport.width <= 600) {
		console.log(window.visualViewport);
		svg.setAttribute(svgValues[0], propertiesSvg.width);
		svg.setAttribute(svgValues[1], propertiesSvg.height);
		svg.setAttribute(svgValues[2], propertiesSvg.viewBox);
		console.log("aqui");
	}
	if (window.visualViewport.width > 600) {
		resetProperties();
		console.log("hola");
	}
}
window.addEventListener("resize", changeSvgSize);
d.addEventListener("resize", changeSvgSize);
