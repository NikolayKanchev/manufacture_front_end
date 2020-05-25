import React, { useEffect} from 'react';
import CardsList from '../../components/cards/CardsList';
import Typography from '@material-ui/core/Typography';
import { fetchPlansCards } from '../../utils/FetchData';
import './Plans.css';

const Plans = () => {
    const cards = fetchPlansCards("endUsers");

    useEffect(() => {
        window.scrollTo(0, 0);
    });    

    return (
        <>
            <div className="flex-num"></div>
            <div className="mt-20">
                <Typography gutterBottom variant="h6" component="h2">
                        Choose a plan that suits your needs
                </Typography>
            </div>
            
            <div className="card-list">
               <CardsList cards={cards} type="flex"  planType="endUser"/> 
            </div>
        </>
    )
}

export default Plans;