export default function CrossButton({className, addOrDeleteStyle, buttonSize, handleOnClick}){
	
	return (
		
		<div onClick={handleOnClick} className={`${addOrDeleteStyle}-button ${className}`} style={{width: buttonSize, height: buttonSize}}>
			<div className="cross">
				<div className='a'></div>
		  		<div className='b'></div>
			</div>
		</div>
	)
}