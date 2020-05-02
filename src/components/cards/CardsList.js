import React from 'react';
import Card from './Card';
import { fetchCards } from '../../utils/FetchData';
import './Card.css';


const CardsList = () => {

    const cards = fetchCards();

    return (
        <>
            {cards.map( card => <Card key={card.id} card={card} /> )}
            
            { cards.length > 0 ? (
                <>
                    <div className="hidden">
                        <Card card={cards[0]}/>
                    </div>
                    <div className="hidden">
                        <Card card={cards[0]}/>
                    </div>
                </>
            ): null }
        </>
    )
}

export default CardsList;