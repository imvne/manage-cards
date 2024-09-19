import { useState } from 'react'
import './App.css'
import CrossButton from './CrossButton';
import CardsContainer from './CardsContainer';

export default function App() {
	const [cardsKeys, setCardsKeys] = useState([])
	const cardsContainerHeight = "50vw"
	
	const handleAddButtonClick = () => {
		
		
		setCardsKeys([...cardsKeys, `${crypto.randomUUID()}`])
	}
	
	
	return (
	<>
		<CardsContainer
			cardsContainerHeight={cardsContainerHeight}
			className={"cards-container"}
			cardsKeys={cardsKeys}
			setCardsKeys={setCardsKeys}
		/>
		
		<CrossButton
			className={"add-card-button"}
			addOrDeleteStyle={'add'} 
			buttonSize={'50px'} 
			handleOnClick={handleAddButtonClick}
		/>
	</>
	)
}


