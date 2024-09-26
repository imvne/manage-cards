import { useState } from 'react';
import CrossButton from './CrossButton';
import './CrossButton.css'

export default function CardsContainer({className, cards, setCards, cardsContainerHeight, setAllCardsHeight, height, allCardsHeight, setAddButton}){
	const [cardToDelete, setCardToDelete] = useState(null)
	
	const handleDeleteButtonClick = (cardToDelete, event) => {
		
		const cardElement = event.target.closest('.card')
		cardElement.style.transform = "scale(00%)"
		
		setTimeout(() => {
			setCards(cards.filter(card => card.key!== cardToDelete.key))
		}, 300)
		
		setAllCardsHeight(previousHeightTotal => 
			cards.map(card => 
			card.key === cardToDelete.key && (previousHeightTotal - card.height, console.log(typeof card.height)) )
		);
		
		
		
		if((height - allCardsHeight) > 59.5 ){
			setAddButton("on")
		} else {
			setAddButton("off")
		}
	}
	
	const handleCardHeightChange = (cardKey) => {
		const cardElement = document.querySelector(`.card-${cardKey}`);
		const newHeight = cardElement ? cardElement.getBoundingClientRect().height : "14vw";
		
		console.log(newHeight)
		setCards(previousCards => 
			previousCards.map(card => 
			card.key === cardKey ? { ...card, height: newHeight } : card )
		);
	}

	const handleCardContent = (event, cardKey) => {
		const textChanging = event.target.innerText;
		
		console.log(textChanging)
		setCards(previousCards => 
			previousCards.map(card => 
			card.key === cardKey ? { ...card, content: textChanging } : card )
		);
		
	};
	
	return (
		<div 
			className={className} 
			style={{height: cardsContainerHeight}}
		>
		
			{cards.map((card) => {return (
				<div key={card.key} className={`card card-${card.key}`} 
				onMouseEnter={() => {setCardToDelete(card)}}
				onMouseLeave={() => {setCardToDelete(null)}}
				>
					
					<div 
						className='card-input' 
						contentEditable="true"
						onInput={(event) => {
							handleCardHeightChange(card.key);
							handleCardContent(event, card.key)
						}}
					>
					</div>
					
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