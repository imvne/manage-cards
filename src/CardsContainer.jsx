import { useState } from 'react';
import CrossButton from './CrossButton';
import './CrossButton.css'

export default function CardsContainer({className, cardsKeys, setCardsKeys, cardsContainerHeight}){
	const [cardToDelete, setCardToDelete] = useState(null)
	
	const handleDeleteButtonClick = (cardToDelete, event) => {
		
		const cardElement = event.target.closest('.card')
		
		// cardElement.style.opacity = "0%"
		cardElement.style.transform = "scale(00%)"
		
		setTimeout(() => {
			setCardsKeys(cardsKeys.filter(card => card!== cardToDelete))
		}, 300)
		
	}
	
	
	return (
		<div className={className} style={{height: cardsContainerHeight}}>
		
			{cardsKeys.map((card) => {return (
				
				<div key={card} className="card" 
				onMouseEnter={() => {setCardToDelete(card)}}
				onMouseLeave={() => {setCardToDelete(null)}}
				>
					
					<p>card
						
					</p>
					
					{
						cardToDelete === card &&
						
						(<CrossButton 
						handleOnClick={(event) => handleDeleteButtonClick(card, event)}
						className={"delete-card-button"} 
						addOrDeleteStyle={'delete'} buttonSize={'3vw'}
						/>)
					}
					
				</div>
				
			)})}	
		
		</div>
	)
}