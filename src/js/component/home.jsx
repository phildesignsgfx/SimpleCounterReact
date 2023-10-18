import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="text-center mt-5 mx-auto col-2 bg-dark text-light">
			<div className="row d-flex justify-content-center">
				<div className="col-2">
					{/* <i class="fas fa-clock fs-2 text"></i> */}
				</div>
                
				<div className="col-1 fs-1 text">0</div>
				<div className="col-1 fs-1 text">0</div>
				<div className="col-1 fs-1 text">0</div>
				<div className="col-1 fs-1 text">0</div>
				<div className="col-1 fs-1 text">0</div> 
				<div className="col-1 fs-1 text">0</div>
			</div>
		</div>
	);
	
};




export default Home;
