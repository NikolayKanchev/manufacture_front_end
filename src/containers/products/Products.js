import React, { useEffect, useState } from 'react';
import { useReduxState } from '../../utils/State';
import { getCompany } from '../../utils/FetchData';
import history from '../../utils/History';
import AddIcon from '@material-ui/icons/Add';
import { Card } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import './Products.css';


const useStyles = makeStyles((theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(1),
    }
  }),
);

const Products = () => {
    const [company, setCompany] = useState();
    let [ {id} ] = useReduxState();
    const classes = useStyles();

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
                            <div className="company-products">
                                <div className="title">Your Products</div>
                                    <div className="add-btn">
                                        <Fab color="secondary" aria-label="add" className={classes.fab}>
                                            <AddIcon onClick={() => history.push("/add-product")}/> 
                                        </Fab> 
                                    </div>
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

export default Products;