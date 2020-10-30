import React from 'react'

import "./Rover.scss"

function Rover() {
    return (
        <div className="">
        <main className="scene">
		<div className="sky" id="sky">
			<canvas id="canvas"></canvas>
		</div>
		<div className="ground">
			<div className="rover">
				<div className="rover-tracks"></div>
				<div className="wheel-row">
					<div className="wheel"></div>
					<div className="wheel"></div>
					<div className="wheel"></div>
				</div>
				<div className="wheel-row rear">
					<div className="wheel"></div>
					<div className="wheel"></div>
					<div className="wheel"></div>
				</div>
				<div className="chassis">
					<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" id="chassis">
						<polyline points="480,120 340,30 250,10 150,55" className="darker"/>
						<polyline points="480,120 340,30 250,10 150,55"/>
						<polyline points="45,100 45,55 260,55 260,100" className="darker"/>
						<polyline points="45,100 45,55 260,55 260,100"/>
						<circle cx="150" cy="55" r="15"/>
					</svg>					
				</div>
				<div className="chassis rear">
					<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" id="chassis">
						<polyline points="45,100 45,55 260,55 260,100" className="darker"/>
						<polyline points="480,120 340,30 250,10 150,55" className="darker"/>
						<polyline points="45,100 45,55 260,55 260,100"/>
						<polyline points="480,120 340,30 250,10 150,55"/>
						<circle cx="150" cy="55" r="15"/>
					</svg>					
				</div>
				<div className="body"></div>
				<div className="panels"></div>
				<div className="camera-mount">
					<div className="camera-lower"></div>
					<div className="camera-upper"></div>
				</div>
				<div className="antenna"></div>
				<div className="light blink"></div>
			</div>
		</div>
		
	</main>
    </div>
    )
}

export default Rover


// Code Illustration credit: Alex Geoff