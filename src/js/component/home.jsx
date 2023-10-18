import React from "react";
import PropTypes from "prop-types";
//include images into your bundle


//create your first component
const Home = (props) => {
	return (
		
		<div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
		<div className="text-center mt-5 mx-auto col-2 bg-dark text-light">
			<div className="row d-flex justify-content-center">
			<h3 class="fw-bold ">React Simple Counter </h3>
				<div className="col-2">
				
				<i class="fas fa-clock fs-1 text ms-0 "></i>
					
				</div>
				
                
				<div className="col-1 fs-3 text"></div>
				<div className="col-1 fs-3 text">0</div>
				<div className="col-1 fs-3 text">{props.digit4 % 10}</div>
				<div className="col-1 fs-3 text">{props.digit3 % 10}</div>
				<div className="col-1 fs-3 text">{props.digit2 % 10}</div> 
				<div className="col-1 fs-3 text">{props.digit1 % 10}</div>
			</div>
		</div>
		</div>
	);
	
	};

Home.propTypes = {
	digit1: PropTypes.number,
	digit2: PropTypes.number,
	digit3: PropTypes.number,
	digit4: PropTypes.number,

};




export default Home;
