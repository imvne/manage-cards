export default function CrossButton({aCrossRotation, bCrossRotation, buttonSize}){
	
	
	return (
		<div className="add-button" style={{width: buttonSize, height: buttonSize}}>
			
		  <div className='a' style={{transform: `rotate(${aCrossRotation})`}}></div>
		  <div className='b' style={{transform: `rotate(${bCrossRotation})`}}></div>
		  
		</div>
	)
}