import { useState } from 'react'
import './App.css'
import CrossButton from './CrossButton';
import CardsContainer from './CardsContainer';

export default function App() {
	const [cards, setCards] = useState([]) // {key : "hbkve", heigth: "", content: ""}
	const [addButton, setAddButton] = useState("on")
	const cardsContainerHeight = "50vw"
	
	const handleAddButtonClick = () => {
		if (addButton === "on"){
			setCards(previousCards => [...previousCards, {key : crypto.randomUUID(), height: 0, content: ""}])
			
		}
	}
	
	return (
	<>
		<CardsContainer
			cardsContainerHeight={cardsContainerHeight}
			className={"cards-container"}
			cards={cards}
			setCards={setCards}
		/>
		
		<CrossButton
			className={"add-card-button"}
			addOrDeleteStyle={'add'} 
			buttonSize={'50px'} 
			handleOnClick={ () => {handleAddButtonClick()}}
		/>
		
		<button 
			style={{height: "20px", width: "60px"}}
			onClick={() => {
				addButton === "on" ? setAddButton("off") : setAddButton("on")
			}}
		>
			{addButton}
		</button>
	</>
	)
}


