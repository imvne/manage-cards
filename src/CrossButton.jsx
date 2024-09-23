export default function CrossButton({className, addOrDeleteStyle, buttonSize, handleOnClick, onOrOff}){
	
	return (
		
		<div 
		onClick={handleOnClick} 
		className={`${addOrDeleteStyle}-button ${className} button-${onOrOff}`} 
		style={{width: buttonSize, height: buttonSize}}>
			
			<div className="cross">
				<div className='a'></div>
		  		<div className='b'></div>
			</div>
		</div>
	)
}