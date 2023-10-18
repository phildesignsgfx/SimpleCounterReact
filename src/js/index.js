//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;
setInterval(() => {
	counter++;
	let num1 = Math.floor(counter / 1);
	let num2 = Math.floor(counter / 10);
	let num3 = Math.floor(counter / 100);
	let num4 = Math.floor(counter / 1000);

	//render your react application
	ReactDOM.render(
		<Home digit1={num1} digit2={num2} digit3={num3} digit4={num4} />,
		document.querySelector("#app")
	);
}, 1000);
