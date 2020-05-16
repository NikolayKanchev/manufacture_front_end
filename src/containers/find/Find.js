import React, {useEffect, useRef, useState} from 'react';
import CountrySearch from '../../components/search/Country';
import CategorySearch from '../../components/search/Category';
import Button from '@material-ui/core/Button';
import './Find.css';
import { fetchCategories, fetchSubCategories, fetchSearchResults } from '../../utils/FetchData';
import { Card } from '@material-ui/core';

const filters = [
    { title: 'Best Match'},
    { title: 'Highest Rated'},
    { title: 'Min Order'},
    { title: 'Alphabetical'},
]

const Find = () => {
    const categories = fetchCategories();
    const [subCategories, setSubCategories] = useState();

    const country = useRef();
    const category = useRef();
    const subCategory = useRef();
    const filter = useRef();
    const [searchResults, setSearchResults] = useState();

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
        // console.log(country.current + ", " + category.current + ", " + subCategory.current + ", " + filter.current);
    }

    return(
        <>
            <div className="search-containers">
                <div className="search-elements">
                    <CountrySearch handleSelectCountry={handleSelectCountry} />
                    <CategorySearch handleSelected={handleSelectCategory} categories={categories} label="Category"/>
                    <CategorySearch handleSelected={handleSelectSubCategory} categories={subCategories} label="Sub Category" />
                    <CategorySearch handleSelected={handleSelectFilter} categories={filters} label="Filter"/>
                    <div className="searchBtn"><Button variant="contained" color="secondary" onClick={handleSearch}>Search</Button></div>
                </div>
            </div>
            { searchResults !== undefined ? 
                <>
                    {searchResults.map(result => 
                        <div className="search-containers">
                            <div className="search-results">
                                <Card className="element">
                                    <div>{result.name}</div>
                                    <div>{result.id}</div>
                                    <img alt="" width="20%" height="50px" src={result.img} />
                                    <div>OOOOOOOOO</div>
                                </Card>
                            </div>
                        </div>
                    )}
                    
                </>: null
            }
        </>
    )
}

export default Find;