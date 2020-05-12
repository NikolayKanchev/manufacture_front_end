import React, { useEffect} from 'react';
import CardsList from '../../components/cards/CardsList';
import Typography from '@material-ui/core/Typography';
import { fetchPlansCards } from '../../utils/FetchData';
import './Plans.css';

const Plans = () => {
    const cards = fetchPlansCards();

    useEffect(() => {
        window.scrollTo(0, 0);
    });    

    return (
        <>
            <div className="title">
                <Typography gutterBottom variant="h4" component="h2">
                    Choose a plan that suits your needs
                </Typography>
            </div>
            
            <div className="card-list">
               <CardsList cards={cards} type="flex"/> 
            </div>
        </>
    )
}

export default Plans;