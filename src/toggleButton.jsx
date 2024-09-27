import { useState } from 'react'
import './ToggleButton.css'

export default function ToggleButton({toggleOffText, toggleOnText, toggleOn, handleClick}) {	
	
	return (
		<div className="toggleDiv">
			
		{
			toggleOn ? (
				<>
				<p className="text-not-chosen"> {toggleOffText} </p>
				
				<div className={"toggle-rectangle toggle-on-rectangle"} >
					
						<div className="toggle-circle toggle-on-circle" onClick={handleClick}> </div>
					
				</div>
					
				<p className="right-text-chosen"> {toggleOnText} </p>
				</>
			) : (
				<>
				<p className="left-text-chosen"> {toggleOffText} </p>
				
				<div className={"toggle-rectangle toggle-off-rectangle"} >
					
						<div className="toggle-circle" onClick={handleClick}> </div>
					
				</div>
					
				<p className={"text-not-chosen"}> {toggleOnText} </p>
				</>
			)
		}
			
			
			
		</div>
	)
}