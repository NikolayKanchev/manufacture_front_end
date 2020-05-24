import React, { useEffect, useState } from 'react';
import { getOffers, getProject } from '../../utils/FetchData';
import { useReduxState } from '../../utils/State';
import history from '../../utils/History';

import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';
import './SeeOffers.css';


const SeeOffers = ({match}) => {
    const [offers, setOffers] = useState();
    const [project, setProject] = useState();
    const { projectId } = match.params;
    const [ {id, logedIn} ] = useReduxState();


    useEffect(() => {
        window.scrollTo(0, 0);

        async function fetchData() {
            const result = await getOffers(projectId);
            const result2 = await getProject(projectId, id);
            setOffers(result);
            setProject(result2);
        }
        fetchData();
      }, [projectId, offers, id]);
    
    return(
        <>
            { offers && logedIn ? 
                <>
                    {project ? <><div className="title">Offers for "{project.name}"</div></>: null}
                    
                    <div className="offers-flex">
                        <div className="offers">                        
                            { offers.map(o => 
                                <div key={o.id} className="offer-card">
                                    <Card>
                                        <div className="small-title blue mt-20">{o.companyName}
                                            <span className="small-title pink ml-5">offers</span>
                                        </div>
                                        <div className="small-italic mt-minus-10">(Offer nr. - {o.offerNumber})</div>
                                        <br></br>
                                        <hr className="hr"></hr>
                                        <div className="offer-content-flex">
                                            <div className="offer-column">
                                                <div className="i-column-title">Message</div>
                                                <br></br>
                                                <div className="small-italic">{o.text}</div>
                                            </div>
                                            <div className="offer-column">
                                                <div className="i-column-title">Capacity</div>
                                                <div className="small-italic blue">{o.capacity} - per {o.period}</div>
                                                <br></br>
                                                <br></br>
                                                <div className="i-column-title">Sizes</div>
                                                <div className="flex-company">
                                                    { o.sizes.map((s, i) => 
                                                        <div key={i}>
                                                            {o.sizes.length - 1 === i? 
                                                                <span className="small-italic blue ml-5">{s}</span>: 
                                                                <span className="small-italic blue ml-5">{s}, </span>
                                                            }
                                                        </div>
                                                    )} 
                                                </div>
                                                <br></br>
                                                <br></br>
                                                <div className="i-column-title">Materials</div>
                                                <div className="flex-company">
                                                    { o.materials.map((m, i) => 
                                                        <div key={i}>
                                                            {o.materials.length - 1 === i? 
                                                                <span className="small-italic blue ml-5">{m}</span>: 
                                                                <span className="small-italic blue ml-5">{m}, </span>
                                                            }
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="offer-column">
                                                <div className="i-column-title">Prices</div>
                                                {o.prices.map( p => 
                                                    <div className="pricing" key={p.id}>
                                                        <div className="small-italic blue price-flex"><div className="price-cont">{p.orderFrom}</div> - <div className="price-cont">{p.orderTo}</div> pcs. - <div className="price-cont">{p.price} {p.currency}</div></div>
                                                    </div>
                                                )}
                                                <br></br>
                                                <div className="i-column-title">The offer is valid until</div>
                                                <div className="small-italic blue">{o.validTo}</div>
                                                <br></br>
                                                <Button variant="outlined" color="secondary" onClick={() => history.push("/company/" + o.companyId)}>Contact Manufacturer</Button>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            )}
                        </div>
                    </div>
                </>: 
                <>
                
                </>
            }
        </>
    )
}

export default SeeOffers;