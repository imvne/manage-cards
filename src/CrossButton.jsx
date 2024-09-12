export default function CrossButton({addOrDeleteStyle, buttonSize}){
	
	return (
		
		<div className={`${addOrDeleteStyle}-button`} style={{width: buttonSize, height: buttonSize}}>
			
		  <div className='a'></div>
		  <div className='b'></div>
		  
		</div>
	)
}