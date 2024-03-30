import React from "react";
/* implemented in react */

//a function to generate a react element
// function generateReactElement() {
// 	const element = React.createElement(
// 		"a",
// 		{
// 			href: "https://www.google.com",
// 			style: {
// 				color: "white",
// 			},
// 		},
// 		"click here to vist Google"
// 	);
// 	return element;
// }

function customRender() {
	const path = document.getElementById("appendTothiDiv");
	const anchorElement = document.createElement("a");
	anchorElement.setAttribute("href", "https://www.google.com");
	anchorElement.style.color = "white";
	anchorElement.textContent = "click here to visit Google";
	path.appendChild(anchorElement);
}

function ReactElement() {
	const loadOnce = React.useRef(false);
	React.useEffect(() => {
		if (loadOnce.current) {
			customRender();
		}
		loadOnce.current = true;
	}, []);
	return <div id="appendTothiDiv"></div>;
}

export default ReactElement;
