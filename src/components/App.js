import React, { Component, useEffect  } from 'react';
import WebMidi, { InputEventNoteon, InputEventNoteoff } from "webmidi";
import './MenuBar.css';

import LaunchpadProMk2 from "./launchpads/LaunchpadProMk2";
import LaunchpadMk2 from "./launchpads/LaunchpadMk2";
import LaunchpadX from './launchpads/LaunchpadX';
import LaunchpadProMk3 from './launchpads/LaunchpadProMk3';
import Matrix from './launchpads/Matrix';
import MidiFighter64 from './launchpads/MidiFighter64';

// import LaunchpadProMk2 from './launchpads/LaunchpadProMk2';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			velocityPalette: [
				[0, 16, 32, 63, 63, 63, 32, 16, 63, 63, 32, 16, 63, 63, 32, 16, 33, 20, 10, 5, 18, 0, 0, 0, 18, 0, 0, 0, 18, 0, 0, 0, 18, 0, 0, 0, 18, 0, 0, 0, 18, 0, 0, 0, 11, 0, 0, 0, 26, 11, 6, 3, 63, 63, 32, 16, 63, 63, 32, 16, 63, 37, 29, 8, 0, 0, 0, 0, 0, 4, 31, 7, 63, 46, 43, 24, 3, 0, 0, 0, 6, 22, 43, 10, 63, 33, 28, 0, 14, 21, 13, 22, 12, 26, 52, 63, 63, 45, 35, 32, 14, 0, 3, 5, 5, 25, 32, 54, 53, 63, 39, 25, 5, 54, 31, 38, 35, 15, 28, 55, 39, 13, 6, 1, 45, 15, 44, 18],
				[0, 16, 32, 63, 15, 0, 0, 0, 46, 15, 8, 4, 43, 63, 32, 16, 63, 63, 32, 16, 63, 63, 32, 16, 63, 63, 32, 16, 63, 63, 32, 16, 63, 63, 32, 16, 48, 41, 21, 11, 33, 21, 11, 6, 9, 0, 0, 0, 13, 0, 0, 0, 15, 0, 0, 0, 16, 0, 0, 0, 3, 13, 20, 13, 14, 18, 5, 0, 17, 0, 31, 7, 0, 63, 58, 63, 34, 63, 41, 10, 0, 0, 6, 4, 12, 55, 63, 63, 63, 63, 63, 34, 20, 20, 7, 0, 17, 41, 63, 22, 10, 18, 19, 5, 7, 14, 0, 16, 18, 47, 55, 44, 5, 52, 58, 37, 25, 15, 28, 63, 0, 0, 51, 16, 43, 12, 20, 5],
				[0, 16, 32, 63, 15, 0, 0, 0, 26, 0, 0, 0, 11, 0, 0, 0, 12, 0, 0, 0, 18, 0, 0, 0, 23, 6, 3, 1, 22, 21, 11, 6, 45, 37, 18, 9, 63, 63, 32, 16, 63, 63, 32, 16, 63, 63, 32, 16, 62, 63, 32, 16, 63, 63, 32, 16, 27, 20, 10, 5, 0, 0, 0, 1, 0, 6, 27, 63, 19, 50, 31, 7, 0, 11, 1, 2, 0, 23, 63, 63, 63, 63, 30, 0, 0, 1, 5, 0, 9, 27, 50, 63, 48, 57, 63, 22, 0, 0, 0, 1, 0, 3, 8, 10, 22, 6, 0, 10, 4, 9, 11, 3, 11, 26, 34, 63, 63, 15, 28, 63, 0, 0, 0, 0, 0, 0, 0, 0]
			],
			availableInputs: WebMidi.inputs,
			viewedLaunchpad: 1,
			midiInputDevice: 0,
			rotation: 0,
			legacy : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 99, 91, 92, 93, 94, 95, 96, 97, 98, 11, 12, 13, 14, 21, 22, 23, 24, 31, 32, 33, 34, 41, 42, 43, 44, 51, 52, 53, 54, 61, 62, 63, 64, 71, 72, 73, 74, 81, 82, 83, 84, 15, 16, 17, 18, 25, 26, 27, 28, 35, 36, 37, 38, 45, 46, 47, 48, 55, 56, 57, 58, 65, 66, 67, 68, 75, 76, 77, 78, 85, 86, 87, 88, 89, 79, 69, 59, 49, 39, 29, 19, 80, 70, 60, 50, 40, 30, 20, 10, 1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 0, 0],
			phantoms: 0
		}

	}



	componentDidMount() {
		
		// document.getElementById() funktioniert mit React anscheinend
		// console.log(document.getElementById("DL").className);

		var velocityPalette = this.state.velocityPalette;
		var midiInputDevice = this.state.midiInputDevice;
		var xy_dr = this.state.legacy;

		WebMidi.enable(function (err) {

			const getRgbFromVelocity = (velocity) => {
				var r = velocityPalette[0][velocity] * 3 + 80;
				var g = velocityPalette[1][velocity] * 3 + 80;
				var b = velocityPalette[2][velocity] * 3 + 80;
				
				if(r >= 255) r = 255;
				if(g >= 255) g = 255;
				if(b >= 255) b = 255;
	
				return `rgb(${r}, ${g}, ${b})`;
			}

			var inputsDisplay = document.getElementById("inputArray");
			//var outputsDisplay = document.getElementById("inputArray");
			for(var i in WebMidi.inputs) {
				const inputId = i;

				var midiInputButton = document.createElement("button");
				midiInputButton.innerHTML = WebMidi.inputs[i].name;
				midiInputButton.className = "menuBarInnerButton";
				midiInputButton.style = "width: 200px;";
				midiInputButton.onclick = () => {

					WebMidi.inputs[midiInputDevice].removeListener("noteon");
					WebMidi.inputs[midiInputDevice].removeListener("noteoff");

					midiInputDevice = inputId;

					WebMidi.inputs[midiInputDevice].addListener("noteon", "all", (event) => {
						var lpBtn = document.getElementById("lpBtn" + xy_dr[event.note.number]);
						lpBtn.style = `background-color: ${getRgbFromVelocity(event.rawVelocity)};`;
					})
		
					WebMidi.inputs[midiInputDevice].addListener("noteoff", "all", (event) => {
						var lpBtn = document.getElementById("lpBtn" + xy_dr[event.note.number]);
						lpBtn.style = `background-color: ${getRgbFromVelocity(0)};`;
					})
				}

				inputsDisplay.appendChild(midiInputButton);
			}

			/*for(var i in WebMidi.outputs) {
				const outputId = i;

				var midiOutputButton = document.createElement("button");
				midiOutputButton.innerHTML = WebMidi.outputs[i].name;
				midiOutputButton.className = "menuBarInnerButton";
				midiOutputButton.style = "width: 200px;";
			}*/
		});
	}

	render() {

		const getRgbFromVelocity = (velocity) => {
			var r = this.state.velocityPalette[0][velocity] * 3 + 80;
			var g = this.state.velocityPalette[1][velocity] * 3 + 80;
			var b = this.state.velocityPalette[2][velocity] * 3 + 80;
			
			if(r >= 255) r = 255;
			if(g >= 255) g = 255;
			if(b >= 255) b = 255;

			return `rgb(${r}, ${g}, ${b})`;
		}

		const uploadPaletteClick = () => 
		{
			document.getElementById("paletteInput").title = "Open Custom-Palette File";
			document.getElementById("paletteInput").click();
		}

		const stringToPalette = (input) => {
			var inputLines = input.split(';');

			for(var lineIndex in inputLines) {
				inputLines[lineIndex] = inputLines[lineIndex].replace(',', '');
				var paletteValues = [];
				paletteValues.push(parseInt(inputLines[lineIndex].split(' ')[1]));
				paletteValues.push(parseInt(inputLines[lineIndex].split(' ')[2]));
				paletteValues.push(parseInt(inputLines[lineIndex].split(' ')[3]));

				if(!isNaN(paletteValues[0])) {
					this.state.velocityPalette[0][lineIndex] = paletteValues[0];
					this.state.velocityPalette[1][lineIndex] = paletteValues[1];
					this.state.velocityPalette[2][lineIndex] = paletteValues[2];
				}
			}
		}

		const uploadPaletteFromFiles = event => {
			var reader = new FileReader();

			reader.addEventListener('load', function (e) {
				stringToPalette(e.target.result);
			});

			reader.readAsBinaryString(event.target.files[0])
		}

		const getLaunchpadTransform = () => {
			if(this.state.rotation == 0) {
				return `rotate(${this.state.rotation}deg)`;
			} else {
				return `rotate(${this.state.rotation}deg) scale(0.725)`;
			}
		}

		const virtualLaunchpadInput = (pitch, velocity) => {
			
		}

		return (
			<div className='app'>
				<input style={{display: 'none'}} type="file" id="paletteInput" onChange={uploadPaletteFromFiles}/>
				<div className="menuBarHolder">
					<button className="menuBarButton">File
					
						<div className="menuBarButtonChild menuBarInnerContent">
							<button className="menuBarInnerButton" onClick={uploadPaletteClick}>Load Custom Palette</button>
						</div>
					
					</button>

					<button className="menuBarButton">View
					
						<div className="menuBarButtonChild menuBarInnerContent">
							<button className="menuBarInnerButton">Change Virtual Device
								<div className="menuBarInnerButtonChild menuBarSubContent">
									<button onClick={() => this.setState({viewedLaunchpad: 0})} className="menuBarInnerButton">Launchpad Mk2</button>
									<button onClick={() => this.setState({viewedLaunchpad: 1})} className="menuBarInnerButton">Launchpad Pro Mk2</button>
									<button onClick={() => this.setState({viewedLaunchpad: 2})} className="menuBarInnerButton">Launchpad X</button>
									<button onClick={() => this.setState({viewedLaunchpad: 3})}className="menuBarInnerButton">Launchpad Pro Mk3</button>
									<button onClick={() => this.setState({viewedLaunchpad: 4})} className="menuBarInnerButton">Midi Fighter 64</button>
									<button onClick={() => this.setState({viewedLaunchpad: 5})} className="menuBarInnerButton">Matrix</button>
								</div>
							</button><br/>

							<button className="menuBarInnerButton">Change Midi Input
								<div className="menuBarInnerButtonChild menuBarSubContent" id="inputArray">
									
								</div>
							</button><br/>

							<button className="menuBarInnerButton">Change Rotation
								<div className="menuBarInnerButtonChild menuBarSubContent">
									<button onClick={() => this.setState({rotation: 0})} className="menuBarInnerButton">Normal Rotation</button>
									<button onClick={() => this.setState({rotation: -45})} className="menuBarInnerButton">45° Rotation</button>
								</div>
							</button><br/>

							<button className="menuBarInnerButton">Stickers
								<div className="menuBarInnerButtonChild menuBarSubContent">
									<button onClick={() => this.setState({phantoms: 0})} className="menuBarInnerButton">No Stickers</button>
									<button onClick={() => this.setState({phantoms: 1})} className="menuBarInnerButton">Phantom Stickers</button>
									<button onClick={() => this.setState({phantoms: 2})} className="menuBarInnerButton">Sanded</button>
								</div>
							</button><br/>
						</div>
					
					</button>
				</div>

				<div className="lpContainer" style={{transform: getLaunchpadTransform()}}>
					{(() => {
						switch(this.state.viewedLaunchpad) {
							case 0: {
								return(<LaunchpadMk2 phantomStickers={this.state.phantoms} virtualSend={e => console.log(e)}/>);
							}
							case 1: {
								return(<LaunchpadProMk2 phantomStickers={this.state.phantoms} virtualSend={e => console.log(e)}/>);
							}
							case 2: {
								return(<LaunchpadX phantomStickers={this.state.phantoms} virtualSend={e => console.log(e)}/>);
							}
							case 3: {
								return(<LaunchpadProMk3 phantomStickers={this.state.phantoms} virtualSend={e => console.log(e)}/>);
							}
							case 4: {
								return(<MidiFighter64 phantomStickers={this.state.phantoms} virtualSend={e => console.log(e)}/>);
							}
							case 5: {
								return(<Matrix phantomStickers={this.state.phantoms} virtualSend={(p, v) => console.log(p, v)}/>);
							}
						}
					})()}
				</div>
			</div>
		)
	}	
}

export default App;