import React, {useEffect, useRef, useState} from 'react';
import CountrySearch from '../../components/search/Country';
import CategorySearch from '../../components/search/Category';
import Button from '@material-ui/core/Button';
import MoreIcon from '@material-ui/icons/ArrowBackIosOutlined';
import LessIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import './Find.css';
import { fetchCategories, fetchSubCategories, fetchSearchResults } from '../../utils/FetchData';
import history from '../../utils/History';
import { Card } from '@material-ui/core';

const filters = [
    { title: 'Best Match'},
    { title: 'Highest Rated'},
    { title: 'Min Order'},
    { title: 'Alphabetical'},
]

const products = [
    { id: "0", title: "product1"},
    { id: "1", title: "product2"},
    { id: "2", title: "product3"},
    { id: "3", title: "product4"},
    { id: "4", title: "product5"},
    { id: "5", title: "product6"},
    { id: "6", title: "product7"},
]

const Find = () => {
    const categories = fetchCategories();
    const [subCategories, setSubCategories] = useState();
    const [more, setMore] = useState(false);
    const [searchResults, setSearchResults] = useState();

    const country = useRef();
    const category = useRef();
    const subCategory = useRef();
    const filter = useRef();
    const product = useRef();


    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const handleSelectCountry = (selected) => {
        country.current = selected;
    }

    const handleSelectCategory = async (selected) => {
        const data = await fetchSubCategories(selected);
        setSubCategories(data);
        category.current = selected;
    }

    const handleSelectSubCategory = (selected) => {
        subCategory.current = selected;
    }

    const handleSelectFilter = (selected) => {
        filter.current = selected;
    }

    const handleSearch = async () => {
        const searched = {
            country: country.current,
            category: category.current,
            subCategory: subCategory.current,
            filter: filter.current
        }
        setSearchResults(await fetchSearchResults(searched))
    }

    const handleSelectProduct = (p) => {
        product.current = p;
    }

    const handleMoreOptions = (bul) => {
        setMore(bul);
    }

    return(
        <>
            <div className="search-containers">
                 { more ? 
                    <>
                        <div className="search-elements">
                            <div className="less-icon"><LessIcon onClick={() => handleMoreOptions(false)}/></div>
                            <CountrySearch width="180px" mt="3px" handleSelectCountry={handleSelectCountry} />
                            <CategorySearch handleSelected={handleSelectCategory} categories={categories} label="Category"/>
                            <CategorySearch handleSelected={handleSelectSubCategory} categories={subCategories} label="Sub Category" />
                            <CategorySearch handleSelected={handleSelectProduct} categories={products} label="Products"/>
                            <CategorySearch handleSelected={handleSelectFilter} categories={filters} label="Filter"/>
                            <div className="searchBtn"><Button variant="outlined" color="secondary" onClick={handleSearch}>Search</Button></div>
                        </div>
                    </>:
                    <>
                        <div className="moreIcon"><MoreIcon onClick={() => handleMoreOptions(true)}/></div>
                        <div className="more search-less">
                            <CategorySearch handleSelected={handleSelectProduct} categories={products} label="Products"/>
                        </div>
                        <div className="searchBtn search-less"><Button variant="outlined" color="secondary" onClick={handleSearch}>Search</Button></div>
                    </>
                }
            </div>
            { searchResults !== undefined ? 
                <div className="results">
                    {searchResults.map(result => 
                        <div key={result.id} className="result-container">
                            <div className="search-result">
                                <Card className="element">
                                    <div className="title">{result.name}</div>
                                    <div className="result-content">
                                        <div className="flex">
                                            <div className="result-width">
                                                <img alt="" width="20%" src={result.img} />
                                            </div>
                                            <div className="result-width desc">
                                                <div className="categories-title">About the Company</div>
                                                {result.companyDesc}
                                            </div>
                                            <div className="categories result-width">
                                                <div className="categories-title">Categories / Products</div>
                                                {result.categories.map(cat => 
                                                    <div key={cat.id}>
                                                        {cat.subCategories.map(sCat => 
                                                            <div key={sCat.id}>
                                                                <div className="categories-names">
                                                                {cat.name}/{sCat.name}
                                                                </div>
                                                                <div className="products">
                                                                    {sCat.products.map(p => 
                                                                        <div key={p.id} className="product">
                                                                            {p.name}, 
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="search-less"><Button variant="outlined" color="primary" onClick={() => history.push("/company/" + result.id)}>See Details</Button></div>
                                </Card>
                            </div>
                        </div>
                    )}
                    
                </div>: 
                <>
                    <img alt="" height="100px" style={{left: "0", marginTop: "55px", color: "#f50057"}} src={require('../../images/up-arrow.png')} />
                    <div className="flex-search-for-product"><div className="search-for-product">Search for manufacturer by choosing a product!</div></div>
                </>
            }
        </>
    )
}

export default Find;