import React, { useEffect, useState } from 'react';
import { getCompany } from '../../utils/FetchData';
import { Card } from '@material-ui/core';
import './CompanyPage.css';


const CompanyPage = ({match}) => {
    const [company, setCompany] = useState();
    const { id } = match.params;

    useEffect(() => {
        window.scrollTo(0, 0);

        async function fetchData() {
            const result = await getCompany(id);
            setCompany(result);
        }
        fetchData();
      }, [id]);
    
    return(
        <>
            { company !== undefined ? (
                <div className="flex-company">
                   <Card className="card-company">
                        <div>{company.name}</div>
                    </Card> 
                </div>
                
                
            ):null}
        </>
    )
}

export default CompanyPage;