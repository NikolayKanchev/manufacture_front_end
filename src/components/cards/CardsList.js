import React from 'react';
import Card from './Card';
import CardSection from './CardSection';
import './Card.css';


const CardsList = (props) => {
        
    const {cards, type}= props;

    return (
        <>
            {type === "flex" ? 
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
                </>:
                <>
                    {cards.map( card => 
                        <>
                            <div style={{ display:"flex", justifyContent:"center"}}>
                                <CardSection key={card.id} card={card} />
                            </div>
                        </>
                     )}
                </>
            }
        </>
    )
}

export default CardsList;