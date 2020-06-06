import React, { useEffect, useState } from 'react';
import CardsList from '../../components/cards/CardsList';
import Typography from '@material-ui/core/Typography';
import { fetchPlansCards } from '../../utils/FetchData';
import './Plans.css';

const Plans = () => {
    const [ cards, setCards ] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        let isSubscribed = true;

        if(isSubscribed){
            fetchPlansCards("endUsers").then(c => setCards(c));
        }
        return () => { isSubscribed = false }
    },[]);    

    return (
        <>
            <div className="flex-num"></div>
            <div>
                <Typography gutterBottom variant="h6" component="h2">
                        Check our plans!
                </Typography>
            </div>
            
            <div className="card-list">
                { cards ? <CardsList cards={cards} type="flex" planType="endUser"/> : null }
            </div>
        </>
    )
}

export default Plans;