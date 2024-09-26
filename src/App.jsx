import { useState } from 'react'
import './App.css'
import CrossButton from './CrossButton';
import CardsContainer from './CardsContainer';

export default function App() {
	const [cards, setCards] = useState([]) // {key : "hbkve", heigth: "", content: ""}
	const [addButtonOn, setAddButtonOn] = useState(true)
	const [cardToDelete, setCardToDelete] = useState(null)
	const [allCardsHeight, setAllCardsHeight] = useState(0)
	const cardsContainerHeight = 300
	
	console.log(`total hauteur : ${allCardsHeight}`)
	console.log(cards)
	
	const handleCardHeightChange = (cardKey) => {
		console.log('handle CardHeightChange')
		const cardElement = document.querySelector(`.card-${cardKey}`);
		const newHeight = cardElement ? cardElement.getBoundingClientRect().height : "14vw";
		
		console.log(`nouvelle hauteur ${newHeight}`)
		setCards(previousCards => 
			previousCards.map(card => 
			card.key === cardKey ? (
				
				setAllCardsHeight(previousHeightTotal => ((previousHeightTotal + newHeight - card.height), console.log(previousHeightTotal, card.height, newHeight))),
				{ ...card, height: newHeight }
				
				) : card )
		);
		
		cardsContainerHeight - allCardsHeight > 59.5 ? setAddButtonOn(true) : setAddButtonOn(false)
	}

	const handleCardContent = (event, cardKey) => {
		console.log('handle CardContent')
		const textChanging = event.target.innerText;
		
		console.log(textChanging)
		setCards(previousCards => 
			previousCards.map(card => 
			card.key === cardKey ? { ...card, content: textChanging } : card )
		);
		
	};
	
	
	const handleDeleteButtonClick = (cardToDelete, event) => {
		console.log('handle DeleteButtonClick')
		const cardElement = event.target.closest('.card')
		cardElement.style.transform = "scale(00%)"
		
		
		
		setTimeout(() => {
			setCards(cards.filter(card => card.key!== cardToDelete.key))
		}, 300)
		
		setAllCardsHeight(previousHeightTotal => previousHeightTotal - cardToDelete.height);
		
		cardsContainerHeight - allCardsHeight > 59.5 ? setAddButtonOn(true) : setAddButtonOn(false)

	}
	
	
	const handleAddButtonClick = () => {
		console.log('handle AddButtonClick')
		if(cardsContainerHeight - allCardsHeight > 59.5) {
			setAddButtonOn(true)
			
			setCards(previousCards => [...previousCards, {key : crypto.randomUUID(), height: 59.5, content: ""}])
			setAllCardsHeight(previousHeight => previousHeight + 59.5)
			
		} else {
			setAddButtonOn(false)
		}
		
	}
	
	return (
		
	<>
	
		
		<div 
			className={"cards-container"} 
			style={{height: `${cardsContainerHeight}px`}}
		>
		
			{cards.map((card) => {return (
				<div key={card.key} className={`card card-${card.key}`} 
				onMouseEnter={() => {setCardToDelete(card)}}
				onMouseLeave={() => {setCardToDelete(null)}}
				>
					
					<textarea 
						type='text'
						className='card-input' 
						contentEditable="true"
						onChange={(event) => {
							handleCardHeightChange(card.key);
							handleCardContent(event, card.key)
						}}
					>
					</textarea>
					
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
		
		<CrossButton
			className={"add-card-button"}
			addOrDeleteStyle={'add'} 
			buttonSize={'30px'} 
			handleOnClick={handleAddButtonClick}
			addButtonOn={addButtonOn}
		/>
		
		<button 
			style={{height: "20px", width: "60px"}}
			onClick={() => {
				addButtonOn ? setAddButton("off") : setAddButton("on")
			}}
		>
			{addButtonOn}
		
		</button>
	
	</>
	
	)
}