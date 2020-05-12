import React, {useEffect, useState} from 'react';
import CountrySearch from '../../components/search/Country';
import CategorySearch from '../../components/search/Category';
import './Find.css';

const categories = [
    { title: 'Food and Baverage'},
    { title: 'Agriculture'},
    { title: 'Apparel'},
    { title: 'Accessories'},
    { title: 'Leather Product'},
    { title: 'Jewelry, Eyewear, Wach'},
    { title: 'Auto, Transport, Accessories'},
    { title: 'Shoes, Bags & Accessories'},
    { title: 'Electronics'},
    { title: 'Home Appliance'},

];

const subCategories = {
    "Food and Baverage": [
        { title: 'Alcoholic Baverage'},
        { title: 'Non-Alcoholic Baverage'},
        { title: 'Baked Food'},
        { title: 'Canned Food'},
        { title: 'Confectionery'},
        { title: 'Ingredients'},
        { title: 'Instant Food'},
        { title: 'Baby Food'},
        { title: 'Been Products'},
        { title: 'Coffee'},
        { title: 'Egg & Egg Products'},
        { title: 'Fruit Products'},
        { title: 'Honey & Honey Products'},
        { title: 'Meat Products'},
        { title: 'Seafood'},
        { title: 'Snack Food'},
        { title: 'Other Food & Baverage'}
    ],
    "Agriculture": [
        { title: 'Beens'},
        { title: 'Coffee'},
        { title: 'Fruit'},
        { title: 'Cigars & Cigarettes'},
        { title: 'Animal Products'},
        { title: 'Cocoa Beens'},
        { title: 'Farm Machinery & Equipment'},
        { title: 'Ornamental Plants'},
        { title: 'Oil'},
        { title: 'Vegetables'}
    ],
    "Apparel": [
        { title: 'Apparel Stock'},
        { title: "Men's Clothing"},
        { title: "Women's Clothing"},
        { title: "Girl's Clothing"},
        { title: "Boy's Clothing"},
        { title: "Mannequins"},
        { title: "Sportswear"},
        { title: "Wedding Apparel"},
        { title: "Stage & Dance Wear"},
        { title: "Maternity Clothing"},
        { title: "Infant & Toddlers Clothing"},
        { title: "Other Apparel"},
    ],
    "Accessories": [
        { title: 'Belts'},
        { title: 'Belt Accessories'},
        { title: 'Gloves'},
        { title: 'Hats & Caps'},
        { title: 'Scarf, Hat & Glove Sets'},
        { title: "Wedding Accessories"},
        { title: "Leather Accessories"},
        { title: "Scarves & Shawls"},
    ],
    "Leather Product": [
        { title: 'Genuine Leather Products'},
        { title: 'Leather Accessories'},
        { title: 'Leather Jackets'},
        { title: 'Leather Gloves'},
        { title: 'Leather Bags'},
        { title: 'Leather Shoes'},
    ],
    "Jewelry, Eyewear, Wach": [
        { title: 'Jewelry'},
        { title: 'Glasses'},
        { title: 'Sunglases'},
        { title: 'Glasess Frames'},
        { title: 'Necklaces'},
        { title: 'Wathches'},
        { title: 'Bracelets & Bangles'},
        { title: 'Jewelry Boxes'},
        { title: 'Jewelry Tools & Equipment'},
        { title: 'Other'},
    ],
    "Auto, Transport, Accessories": [
        { title: 'Car Fabrics'},
        { title: 'Trailers'},
        { title: 'Truck Parts & Accessories'},
        { title: 'Motorcycles & Scooters'},
        { title: 'Emergency Vehicles'},
        { title: 'Trains'},
        { title: 'Marine Parts & Accessories'},
        { title: 'Bus'},
        { title: 'ATVs & UTVs'},
        { title: 'Containers'},
    ],
    "Shoes, Bags & Accessories": [
        { title: 'Bags'},
        { title: 'Bags, Parts, Materials'},
        { title: 'Luggage & Travel Bags'},
        { title: 'Camera Bags'},
        { title: 'Sport & Leisure Bags'},
        { title: 'Cosmetic Cases & Bags'},
        { title: 'Wallets'},
        { title: 'Business Cases & Bags'},
        { title: 'Baby Shoes'},
        { title: 'Dance Shoes'},
        { title: "Men's Shoes"},
        { title: "Women's Shoes"},
        { title: "Girl's Shoes"},
        { title: "Boy's Shoes"},
        { title: "Repering Equipment"},
        { title: "Shoe Parts & Accessories"},
        { title: "Shoe Materials"},

    ],
    "Electronics": [
        { title: 'Computer Hardware & Software'},
        { title: 'Parts & Accessories'},
        { title: 'Mobile Phones & Accessories'},
        { title: 'Portable Video, Audio & Accessories'},
        { title: 'Electronic Cigarettes'},
        { title: 'Camera, Photo & Accessories'},
        { title: 'Video Game & Accessories'},
        { title: 'TV & Radio Accessories'},
        { title: 'Cables'},
    ],
    "Home Appliance": [
        { title: 'Fans'},
        { title: 'Dryers'},
        { title: 'Coffee Makers'},
        { title: 'Home Appliance Parts'},
        { title: 'Citchen Appliances'},
        { title: 'Air Conditioners'},
        { title: 'Coocking Appliances'},
    ],
    undefined: [
        { title: 'Choose a category first!'},
    ]
}

const Find = () => {
    const [country, setCountry] = useState();
    const [category, setCategory] = useState();
    const [subCategory, setSubCategory] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const handleSelectCountry = (selected) => {
        setCountry(selected);
    }

    const handleSelectCategory = (selected) => {
        setCategory(selected);
    }

    const handleSelectSubCategory = (selected) => {
        setSubCategory(selected);
    }

    return(
        <div className="search-containers">
            <CountrySearch handleSelectCountry={handleSelectCountry} />
            <CategorySearch handleSelectCategory={handleSelectCategory} categories={categories} label="Category"/>
            <CategorySearch handleSelectCategory={handleSelectSubCategory} categories={subCategories[category]} label="Sub Category"/>
        </div>
    )
}

export default Find;