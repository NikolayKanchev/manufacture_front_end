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
                    <div className="content-width">
                        <Card className="card-company">
                            <div className="title">{company.name}</div>
                            <div className="border-flex"><div className="border-top"></div></div>
                            <div className="img-and-desc">
                                <div className="company-flex">
                                    <div className="company-img">
                                        <img alt="" width="100%" src={company.img} />
                                    </div>
                                    <div className="company-desc">
                                        {company.companyLongerDesc}
                                    </div>
                                </div>
                            </div>
                            <div className="address-cont">
                                <div className="country">
                                    <div className="blue weight">Country</div>
                                    <div className="small-italic">{company.country}, {company.address}</div>
                                </div>
                                <div className="distance">
                                    <div className="blue weight">Distance to you</div>
                                    <div className="small-italic">100km</div>
                                </div>
                                <div className="address">
                                    <div className="blue weight">Contacts</div>
                                    <div className="small-italic">{company.contactPerson}</div>
                                    <div className="small-italic">{company.contactEmail}</div>
                                    <div className="small-italic">{company.phone}</div>
                                </div>
                            </div>
                            </Card>
                            <Card className="card-company">
                            <div className="company-products">
                                <div className="title">Products</div>
                                {company.categories.map(cat => 
                                    <div key={cat.id}>
                                        {cat.subCategories.map(sCat => 
                                            <div key={sCat.id}>
                                                <div className="names">
                                                    <div className="cat-name">{cat.name}</div> <span className="slash">/</span> 
                                                    <div className="sub-cat-name pink">{sCat.name}</div> 
                                                </div>
                                                
                                                <div className="products-cont">
                                                    {sCat.products.map(p =>
                                                        <div className="product-main-cont" key={p.id}>
                                                            <div key={p.id} className="product-cont">
                                                                <div className="p-flex">
                                                                    <div className="p-image">
                                                                        <img alt="" width="100%" src={p.img} />
                                                                    </div>
                                                                    <div className="p-title-desc">
                                                                        <div className="sub-cat-name blue">{p.name}</div>
                                                                        <div className="p-desc-text">{p.desc}</div>
                                                                    </div>
                                                                    <div className="p-more-info">
                                                                        <div>
                                                                            <div className="more-item">
                                                                                <div className="sub-cat-name blue">Min Order</div>
                                                                                <div className="p-desc-text">{p.minOrder} {p.minOrderStr}</div>
                                                                            </div>
                                                                            <div className="more-item">
                                                                                <div className="sub-cat-name blue">Colors</div>
                                                                                <div className="p-desc-text">{p.colors}</div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div className="more-item">
                                                                                <div className="sub-cat-name blue">Capacity</div>
                                                                                <div className="p-desc-text">{p.capacity} {p.capacityPeriod}</div>
                                                                            </div>
                                                                            <div className="more-item">
                                                                                <div className="sub-cat-name blue">Sizes</div>
                                                                                <div className="p-desc-text">{p.sizes}</div>
                                                                            </div>
                                                                            <div className="more-item">
                                                                                <div className="sub-cat-name blue">Materials</div>
                                                                                <div className="p-desc-text">{p.materials}</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </Card> 
                    </div>
                </div>
            ):null}
        </>
    )
}

export default CompanyPage;