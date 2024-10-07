import './CrossButton.css'

export default function CrossButton({className, id, addOrDeleteStyle, buttonSize, handleOnClick, addButtonOn}){
	
	
	return (
		
		<div 
		onClick={handleOnClick} 
		id={id}
		className={`${addOrDeleteStyle}-button ${className} button-${addButtonOn ? "on" : "off"}`} 
		style={{width: buttonSize, height: buttonSize}}>
			
			<div className="cross">
				<div className='a'></div>
		  		<div className='b'></div>
			</div>
		</div>
	)
}