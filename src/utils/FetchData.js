import axios from 'axios';

const cards = [
    { 
        id: "1",
        title: "FREE",
        price: "$0",
        btnText: "See Details",
        period: "per month",
        text: "Collect & respond to our reviews for free.",
        bestValue: false
    },
    { 
        id: "2",
        title: "Lite",
        price: "$300",
        btnText: "See Details",
        period: "per month",
        text: "Showcase reviews on your website & clearly demonstrate marketing ROI.",
        bestValue: false
    },
    { 
        id: "3",
        title: "Pro",
        price: "$550",
        btnText: "See Details",
        period: "per month",
        text: "Give your marketing & sales a significant boost with a wide range of customizable tools.",
        bestValue: true
    },
    // { 
    //     id: "4",
    //     title: "Enterprise",
    //     price: "Custom",
    //     btnText: "Get a quote",
    //     period: "per month",
    //     text: "Full access to our Business with superior integrations, data protection & account management.",
    //     bestValue: false
    // },
];

const homeInfoCards = [
    {
        id: "1",
        title: "Search for Manufacturer",
        subCards: [
            {
                image: require("../images/select.png"),
                text: 'In order to find a manufacturer you have to select "Find Factory" from the menu on the top of the screen!',
            },
            {
                image: require("../images/search.png"),
                text: "You can search by specifying a product, category of products, industry, name of manufacturer. You can also search by selecting region, country, category, etc.",
            },
            {
                image: require("../images/list.png"),
                text: "You'll get a list of manufacturers where you can see general information about each of them. Press \"See details\" if you need more information.",
            }
        ],
        hasSteps: true,
    },
    {
        id: "2",
        title: "Create a project - get offers",
        subCards: [
            {
                image: require("../images/idea.png"),
                text: 'You have an idea and you want to save time, then choose "Your Projects" from the menu and select "Ny Project". Fill out the form and get offers from manufacturers.',
            },
            {
                image: require("../images/describe.png"),
                text: "Follow the instructions and fill out as many fields as you can. All metters if you want to get accurate offers. We do our best to help you, but we need this information in order to do so.",
            },
            {
                image: require("../images/offer.png"),
                text: "Every time a manufacturer sends you a offer you will get notified. Note that it can take a while before you receive some offers, because the manufacturers are normaly very bisy!",
            }
        ],
        hasSteps: true,
    },
    {
        id: "3",
        title: "More",
        subCards: [
            {
                cardTitle: "Plans",
                image: require("../images/subscription.png"),
                text: 'Developing an idea for a product can be a very dificult process. Select "Plans" to see what we offer and how we can save your time! ',
            },
            {
                cardTitle: "Join as a manufacturer",
                image: require("../images/factory.png"),
                text: 'If you are manufacturer you can join us and make your business easy discoverable. You can do that by choosing "Join as manufacturer." ',
            },
        ],
        hasSteps: false
    },
]

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
    { title: 'Protection & Security'},
    { title: 'Electrical Components, Equipment & Telecoms'},
    { title: 'Gifts, Sports & Toys'},
    { title: 'Health & Beauty'},
    { title: ''},
    { title: ''},


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
    "Protection & Security": [
        { title: 'Locks & Keys'},
        { title: 'Alarm'},
        { title: 'Firefighting Supplies'},
        { title: 'Roadway Safety'},
        { title: 'Water Safety Products'},
        { title: 'Police & Military Supplies'},
        { title: 'Bullet Proof Vest'},
        { title: 'Safes'},
        { title: 'Self Defense Supplies'},
        { title: 'Alcohol Tester'},
        { title: 'Fire Alarm'},
    ],
    "Electrical Components, Equipment & Telecoms": [
        { title: 'Batteries'},
        { title: 'Transformers'},
        { title: 'Solar Energy Products'},
        { title: 'Circuit Breakers'},
        { title: 'Relays'},
        { title: 'Power Supplies'},
        { title: 'Power Accessories'},
        { title: 'Fuses'},
        { title: 'Industrial Controls'},
        { title: 'Motors'},
        { title: 'Switches'},
        { title: 'Generators'},
        { title: 'Contactors'},
        { title: 'Power Distribution Equipment'},
        { title: 'Professional Audio, Video'},
        { title: 'Fuse Components'},
        { title: 'Electrical Supplies'},
        { title: 'Connectors & Terminals'},
        { title: 'Electrical Instruments & Tools'},
    ],
    "Gifts, Sports & Toys": [
        { title: 'Stickers'},
        { title: 'Wedding Decorations & Gifts'},
        { title: 'Pottery & Enamel'},
        { title: 'Cross Stitch'},
        { title: 'Souvenirs'},
        { title: 'Flags, Banners & Accessories'},
        { title: 'Money Boxes'},
        { title: 'Crafts'},
        { title: 'Music Boxes'},
        { title: 'Holiday Gifts'},
        { title: 'Lacquerware'},
        { title: 'Sculptures'},
        { title: 'Lanyard'},
        { title: 'Key Chains'},
        { title: 'Festive & Party Supplies'},
        { title: 'Knitting & Crocheting'},
        { title: 'Gift Sets'},
        { title: 'Home Decoration'},
        { title: 'Arts & Crafts Stocks'},
        { title: 'Art & Collectible'},
        { title: 'Sports Safety'},
        { title: 'Gambling'},
        { title: 'Indoor Sports'},
        { title: 'Golf'},
        { title: 'Water Sports'},
        { title: 'Fitness & Body Building'},
        { title: 'Outdoor Sports'},
        { title: 'Artificial Grass & Sports Flooring'},
        { title: 'Other Sports & Entertainment Products'},
        { title: 'Gym Equipment'},
        { title: 'Camping & Hiking'},
        { title: 'Team Sports'},
        { title: 'Musical Instruments'},
        { title: 'Amusement Park'},
        { title: 'Swimming & Diving'},
        { title: 'Winter Sports'},
        { title: 'Sports Gloves'},
        { title: 'Tennis'},
        { title: 'Scooters'},
        { title: 'Sports Souvenirs'},
        { title: 'Outdoor Toys & Structures'},
        { title: 'Inflatable Toys'},
        { title: 'Dolls'},
        { title: 'Candy Toys'},
        { title: 'Pretend Play & Preschool'},
        { title: 'Classic Toys'},
        { title: 'Electronic Toys'},
        { title: 'Glass Marbles'},
        { title: 'Action Figure'},
        { title: 'Toy Accessories'},
        { title: 'Light-Up Toys'},
        { title: 'Other Toys & Hobbies'},
        { title: 'Educational Toys'},
        { title: 'Noise Maker'},
        { title: 'Balloons'},
        { title: 'Baby Toys'},
        { title: 'Plastic Toys'},
        { title: 'Solar Toys'},
        { title: 'Toy Animal'},
        { title: 'Toy Guns'},
    ],
    "Health & Beauty": [
        { title: 'Sterilization Equipments'},
        { title: 'General Assay & Diagnostic Apparatuses'},
        { title: 'Crude Medicine'},
        { title: 'Clinical Analytical Instruments'},
        { title: 'Physical Therapy Equipments'},
        { title: 'Emergency & Clinics Apparatuses'},
        { title: 'Radiology Equipment & Accessories'},
        { title: 'Body Fluid-Processing & Circulation Devices'},
        { title: 'Traditional Patented Medicines'},
        { title: 'Medical Cryogenic Equipments'},
        { title: 'Emergency & Clinics Apparatuses'},
        { title: 'Health Care Supplement'},
        { title: 'Plant Extracts'},
        { title: 'Dental Equipment'},
        { title: 'Prepared Drugs In Pieces'},
        { title: 'Health Care Supplies'},
        { title: 'Animal Extract'},
        { title: 'Skin Care'},
        { title: 'Baby Care'},
        { title: 'Body Weight'},
        { title: 'Fragrance & Deodorant'},
        { title: 'Oral Hygiene'},
        { title: 'Men Care'},
        { title: 'Sanitary Paper'},
        { title: 'Body Art'},
        { title: 'Hair Extensions & Wigs'},
        { title: 'Feminine Hygiene'},
        { title: 'Hair Care'},
        { title: 'Makeup Tools'},
        { title: 'Beauty Equipment'},
        { title: 'Hair Salon Equipment'},
        { title: 'Makeup'},
        { title: 'Breast Care'},
        { title: 'Bath Supplies'},
        { title: 'Other Beauty & Personal Care Products'},
        { title: 'Skin Care Tool'},
        { title: 'Shaving & Hair Removal'},
        { title: 'Nail Supplies'},
        { title: ''},
        { title: ''},
    ],
    "": [
        { title: ''},
        { title: ''},
        { title: ''},
        { title: ''},
        { title: ''},
        { title: ''},
        { title: ''},
        { title: ''},
        { title: ''},
    ],
    undefined: [
        { title: ''},
    ]
}

const searchResults = [
    { 
        id: "0", 
        name : "Tesla", 
        img: "https://s3.amazonaws.com/uifaces/faces/twitter/flexrs/128.jpg", 
        country: "Bulgaria", 
        address: "Somewhere", 
        phone: "1234543223", 
        categories: [
            {
                id: "0", 
                name: "Health & Beauty", 
                subCategories: [
                    {
                        id: "0", 
                        name: "Skin Care", 
                        products: [
                            {
                                id: "0", 
                                name: "Product1", 
                                desc: "The best", 
                                minOrder: 5
                            }, 
                            {
                                id: "1", 
                                name: "Product2", 
                                desc: "The best description", 
                                minOrder: 7
                            }, {
                                id: "2", 
                                name: "Product3", 
                                desc: "The best description ever", 
                                minOrder: 9}
                            ]
                        },
                        {
                            id: "1", 
                            name: "Baby Care", 
                            products: [
                                {
                                    id: "0", 
                                    name: "Product1", 
                                    desc: "The best", 
                                    minOrder: 5
                                }, 
                                {
                                    id: "1", 
                                    name: "Product2", 
                                    desc: "The best description", 
                                    minOrder: 7
                                }, {
                                    id: "2", 
                                    name: "Product3", 
                                    desc: "The best description ever", 
                                    minOrder: 9
                                },
                                {
                                    id: "3", 
                                    name: "Product4", 
                                    desc: "The best", 
                                    minOrder: 5
                                }, 
                                {
                                    id: "4", 
                                    name: "Product5", 
                                    desc: "The best description", 
                                    minOrder: 7
                                }, {
                                    id: "5", 
                                    name: "Product6", 
                                    desc: "The best description ever", 
                                    minOrder: 9
                                }
                                ]
                            }
                    ],
                
            }, 
            {
                id: "1", 
                name: "Gifts, Sports & Toys", 
                subCategories: [
                    {
                        id: "0", 
                        name: "Gift Sets", 
                        products: [
                            {
                                id: "0", 
                                name: "Product1", 
                                desc: "The best", 
                                minOrder: 5
                            }, 
                            {
                                id: "1", 
                                name: "Product2", 
                                desc: "The best description", 
                                minOrder: 7
                            }
                        ]
                    }
                ]
            }
        ], 
        companyDesc: "ABC Company provides high quality plumbing services. We have been serving St. Washougal, Washington and neighboring areas for more than 12 years." 
    },
    { 
        id: "1", 
        name : "Ferrari", 
        img: "https://s3.amazonaws.com/uifaces/faces/twitter/zvchkelly/128.jpg", 
        country: "Bulgaria", 
        address: "Somewhere", 
        phone: "1234543223", 
        categories: [
            {
                id: "0", 
                name: "Electrical Components, Equipment & Telecoms", 
                subCategories: [
                    {
                        id: "0", 
                        name: "Power Supplies", 
                        products: [
                            {
                                id: "0", 
                                name: "Product1", 
                                desc: "The best", 
                                minOrder: 5
                            }, 
                            {
                                id: "1", 
                                name: "Product2", 
                                desc: "The best description", 
                                minOrder: 7
                            }, {
                                id: "2", 
                                name: "Product3", 
                                desc: "The best description ever", 
                                minOrder: 9}
                            ]
                        }
                    ]
            }, 
            {
                id: "1", 
                name: "Power Accessories", 
                subCategories: [
                    {
                        id: "0", 
                        name: "Sub Cat 1", 
                        products: [
                            {
                                id: "0", 
                                name: "Product1", 
                                desc: "The best", 
                                minOrder: 5
                            }, 
                            {
                                id: "1", 
                                name: "Product2", 
                                desc: "The best description", 
                                minOrder: 7
                            }
                        ]
                    }
                ]
            }
        ], 
        companyDesc: "Sit and Chill is a Chinese restaurant in St. Irving, Texas. For nine years, we have been a local favorite for the best Chinese noodles in town." },

]

export const fetchSearchResults = (searched) => {
    // const {country, category, subCategory, filter} = searched;
    return searchResults;
}

export const fetchCategories = () => {
    return categories;
}

export const fetchSubCategories = (category) => {    
    return subCategories[category];
}

export const fetchPlansCards = () => {
    return cards;
}

export const fetchHomeInfoCards = () => {
    return homeInfoCards;
}

const authorization = (token) => {
    return { headers: {'Authorization': `Bearer ${token}`}}
};

export const registerRequest = async (userInfo) => {
    const res = await axios.post("http://localhost:4000/users/signup", userInfo);
    return res;
}

export const loginRequest = async (email, password) => {
    const res = await axios.post("http://localhost:4000/users/login", { "email": email, "password": password });
    return res;
}

export const resetPassRequest = async (email) => {
    const res = await axios.post("http://localhost:4000/users/resetPass", { email: email });
    return res;
}

export const updatePassRequest = async (password, token) => {
    const res = await axios.post("http://localhost:4000/users/updatePass", { password: password }, authorization(token));
    alert(res)
    return res;
}

// export const fetchChildren = async (token: string) => {
//     const res = await axios.get("http://localhost:4000/children", authorization(token));
//     const childrenArr: Array<Child> = res.data.children;
//     return childrenArr;
// };

// export const fetchCategories = async (child: Child, token: string) => {
//     const res = await axios.post("http://localhost:4000/categories/all", { childId: child._id }, authorization(token));
//     const categoriesArr: Array<Category> = res.data.categories;
//     return categoriesArr;
// };

// export const fetchItems = async (category: Category, token: string) => {
//     const res = await axios.post("http://localhost:4000/items/all", { categoryId: category._id }, authorization(token));
//     const itemsArr: Array<Item> = res.data.items;
//     return itemsArr;
// };

// export const deleteItem = async (itemId, token) => {
//     const res = await axios.delete("http://localhost:4000/items/" + itemId, authorization(token));
//     const data = res.data.deletedCount;    
//     return data;
// }

// export const addItem = async (data, token) => {
//     const res = await axios.post("http://localhost:4000/items/", data, authorization(token));
//     return res;
// };

// export const updateItem = async (data: FormData, token: string, itemId: string) => {
//     const res = await axios.patch("http://localhost:4000/items/" + itemId, data, authorization(token));
//     return res;
// };

// export const addChild = async (data: FormData, token: string) => {
//     const res = await axios.post("http://localhost:4000/children", data, authorization(token));
//     return res;
// };

// export const updateChild = async (data: FormData, token: string, childId: string) => {
//     const res = await axios.patch("http://localhost:4000/children/" + childId, data, authorization(token));
//     return res;
// };

// export const deleteChild = async (token: string, childId: string) => {
//     const res = await axios.delete("http://localhost:4000/children/" + childId, authorization(token));
//     return res;
// };

