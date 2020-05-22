import React, { useEffect, useState } from 'react';
import { useReduxState } from '../../utils/State';
// import { getOffers } from '../../utils/FetchData';

// import { Card } from '@material-ui/core';
import './Projects.css';


const SeeOffers = () => {
    const [offers, setOffers] = useState();
    const [ {id, logedIn} ] = useReduxState();

    // const { id } = match.params;

    useEffect(() => {
        window.scrollTo(0, 0);

        // async function fetchData() {
        //     const result = await getOffers(id);
        //     setOffers(result);
        // }
        // fetchData();
      });
    
    return(
        <>
            <h1>{id}</h1>
        </>
    )
}

export default SeeOffers;