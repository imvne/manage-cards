import { useState } from 'react'
import './App.css'
import CrossButton from './CrossButton';
import './CrossButton.css'

export default function App() {
	const [cards, setCards] = useState([])
	
	const handleAddButtonClick = () => {
		setCards([...cards, `${cards.length+1}`])
	}
	
	const handleDeleteButtonClick = (cardToDelete) => {
		setCards(cards.filter(card => card!== cardToDelete))
	}
	
	return (
	<>
	<div className="cards-container">
		
		{cards.map((card) => {return (
			<div key={card} className="card" >
				<CrossButton className={"delete-card-button"} addOrDeleteStyle={'delete'} buttonSize={'20px'} handleOnClick={() => handleDeleteButtonClick(card)}/>
			</div>
		)})}
		
	</div>
	<CrossButton addOrDeleteStyle={'add'} buttonSize={'50px'} handleOnClick={handleAddButtonClick}/>
	</>
	)
}


