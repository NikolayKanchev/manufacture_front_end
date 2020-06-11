import axios from 'axios';

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

const manHomeInfoCards = [
    {
        id: "1",
        title: "Make your company and products visible!",
        subCards: [
            {
                image: require("../images/search.png"),
                text: 'Select "Products" and add the products, you are producing! Then people can easily find your company by searching for specific product.',
            },
        ],
        hasSteps: false,
    },
    {
        id: "2",
        title: "See projects, who needs manufacturer!",
        subCards: [
            {
                image: require("../images/select.png"),
                text: 'In order to see the active projects select "Find Projects" from the menu on the top of the screen!',
            },
            {
                image: require("../images/search.png"),
                text: "You can search by specifying a product or category of products. You can also search by selecting region, country, category, etc.",
            },
        ],
        hasSteps: true,
    },
    {
        id: "3",
        title: "Get direct messages from interested parties!",
        subCards: [
            {
                image: require("../images/select.png"),
                text: 'Select "Messages" in order to see the messages that you have reseived!',
            },
            {
                image: require("../images/faq.png"),
                text: 'Select "Answear" and type your message!',
            },
        ],
        hasSteps: true
    },
    {
        id: "4",
        title: "Send direct offers!",
        subCards: [
            {
                image: require("../images/select.png"),
                text: 'In order to send an offer you have to select "Find Projects" from the menu on the top of the screen!',
            },
            {
                image: require("../images/search.png"),
                text: "You can search by specifying a product or category of products. You can also search by selecting region, country, category, etc.",
            },
            {
                image: require("../images/list.png"),
                text: "You'll get a list of projects where you can see general information about each of them. Press \"Send Offer\" if you want to send an offer.",
            }
        ],
        hasSteps: true,
    },
]

const searchResults = [
    { 
        id: "0", 
        name : "Tesla", 
        img: "https://s3.amazonaws.com/uifaces/faces/twitter/flexrs/128.jpg", 
        country: "Bulgaria", 
        address: "Somewhere", 
        phone: "1234543223",
        contactPerson: "Nikolay Kanchev",
        contactEmail: "nikolay.kanchev@yahoo.com",
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
                                img: "https://s3.amazonaws.com/uifaces/faces/twitter/mds/128.jpg",
                                name: "Product1", 
                                desc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.", 
                                minOrder: 5,
                                minOrderStr: "pcs",
                                capacity: 5000,
                                capacityPeriod: " per month",
                                materials: "textil, plastic",
                                colors: "red, green, pink, black",
                                sizes: "l, xl, xxl, xxxl"
                            }, 
                            {
                                id: "1",
                                img: "https://s3.amazonaws.com/uifaces/faces/twitter/ssbb_me/128.jpg", 
                                name: "Product2", 
                                desc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.", 
                                minOrder: 50,
                                minOrderStr: "pcs",
                                capacity: 1000,
                                capacityPeriod: " per year",
                                materials: "textil, plastic",
                                colors: "red, green, pink, black",
                                sizes: "l, xl, xxl, xxxl"
                            }, {
                                id: "2",
                                img: "https://s3.amazonaws.com/uifaces/faces/twitter/eugeneeweb/128.jpg",
                                name: "Product3", 
                                desc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.", 
                                minOrder: 15,
                                minOrderStr: "pcs",
                                capacity: 5000,
                                capacityPeriod: "per month",
                                materials: "textil, plastic",
                                colors: "red, green, pink, black",
                                sizes: "l, xl, xxl, xxxl"
                            }
                        ]
                        },
                        {
                            id: "1", 
                            name: "Baby Care", 
                            products: [
                                {
                                    id: "0", 
                                    img: "https://s3.amazonaws.com/uifaces/faces/twitter/carlosm/128.jpg",
                                    name: "Product1", 
                                    desc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.", 
                                    minOrder: 12,
                                    minOrderStr: "pcs",
                                    capacity: 15000,
                                    capacityPeriod: "per month",
                                    materials: "textil, plastic",
                                    colors: "red, green, pink, black",
                                    sizes: "l, xl, xxl, xxxl"
                                }, 
                                {
                                    id: "1", 
                                    img: "https://s3.amazonaws.com/uifaces/faces/twitter/desastrozo/128.jpg",
                                    name: "Product2", 
                                    desc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.", 
                                    minOrder: 120,
                                    minOrderStr: "pcs",
                                    capacity: 500000,
                                    capacityPeriod: "per year",
                                    materials: "textil, plastic",
                                    colors: "red, green, pink, black",
                                    sizes: "l, xl, xxl, xxxl"
                                }, {
                                    id: "2", 
                                    img: "https://s3.amazonaws.com/uifaces/faces/twitter/antongenkin/128.jpg",
                                    name: "Product3", 
                                    desc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.", 
                                    minOrder: 12,
                                    minOrderStr: "pcs",
                                    capacity: 5000,
                                    capacityPeriod: "per month",
                                    materials: "textil, plastic",
                                    colors: "red, green, pink, black",
                                    sizes: "l, xl, xxl, xxxl"
                                },
                                {
                                    id: "3", 
                                    img: "https://s3.amazonaws.com/uifaces/faces/twitter/desastrozo/128.jpg",
                                    name: "Product4", 
                                    desc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.", 
                                    minOrder: 12,
                                    minOrderStr: "pcs",
                                    capacity: 5000,
                                    capacityPeriod: "per month",
                                    materials: "textil, plastic",
                                    colors: "red, green, pink, black",
                                    sizes: "l, xl, xxl, xxxl"
                                }, 
                                {
                                    id: "4",
                                    img: "https://s3.amazonaws.com/uifaces/faces/twitter/robbschiller/128.jpg",
                                    name: "Product5", 
                                    desc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.", 
                                    minOrder: 12,
                                    minOrderStr: "pcs",
                                    capacity: 5000,
                                    capacityPeriod: "per month",
                                    materials: "textil, plastic",
                                    colors: "red, green, pink, black",
                                    sizes: "l, xl, xxl, xxxl"
                                }, {
                                    id: "5",
                                    img: "https://s3.amazonaws.com/uifaces/faces/twitter/konus/128.jpg",
                                    name: "Product6", 
                                    desc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.", 
                                    minOrder: 12,
                                    minOrderStr: "pcs",
                                    capacity: 5000,
                                    capacityPeriod: "per month",
                                    materials: "textil, plastic",
                                    colors: "red, green, pink, black",
                                    sizes: "l, xl, xxl, xxxl"
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
                                img: "https://s3.amazonaws.com/uifaces/faces/twitter/woodydotmx/128.jpg", 
                                name: "Product1", 
                                desc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.", 
                                minOrder: 12,
                                minOrderStr: "pcs",
                                capacity: 5000,
                                capacityPeriod: "per month",
                                materials: "textil, plastic",
                                colors: "red, green, pink, black",
                                sizes: "l, xl, xxl, xxxl"
                            }, 
                            {
                                id: "1",
                                img: "https://s3.amazonaws.com/uifaces/faces/twitter/lepetitogre/128.jpg", 
                                name: "Product2", 
                                desc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.", 
                                minOrder: 12,
                                minOrderStr: "pcs",
                                capacity: 5000,
                                capacityPeriod: "per month",
                                materials: "textil, plastic",
                                colors: "red, green, pink, black",
                                sizes: "l, xl, xxl, xxxl"
                            }
                        ]
                    }
                ]
            }
        ], 
        companyDesc: "ABC Company provides high quality plumbing services. We have been serving St. Washougal, Washington and neighboring areas for more than 12 years.",
        companyLongerDesc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",

    },
    { 
        id: "1", 
        name : "Ferrari", 
        img: "https://s3.amazonaws.com/uifaces/faces/twitter/zvchkelly/128.jpg", 
        country: "Bulgaria", 
        address: "Somewhere", 
        phone: "1234543223",
        contactPerson: "Nikolay Kanchev",
        contactEmail: "nikolay.kanchev@yahoo.com",
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
                                img: "https://s3.amazonaws.com/uifaces/faces/twitter/sbtransparent/128.jpg",
                                name: "Product1", 
                                desc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.", 
                                minOrder: 12,
                                minOrderStr: "pcs",
                                capacity: 5000,
                                capacityPeriod: "per month",
                                materials: "textil, plastic",
                                colors: "red, green, pink, black",
                                sizes: "l, xl, xxl, xxxl"
                            }, 
                            {
                                id: "1", 
                                img: "https://s3.amazonaws.com/uifaces/faces/twitter/matt3224/128.jpg",
                                name: "Product2", 
                                desc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.", 
                                minOrder: 12,
                                minOrderStr: "pcs",
                                capacity: 5000,
                                capacityPeriod: "per month",
                                materials: "textil, plastic",
                                colors: "red, green, pink, black",
                                sizes: "l, xl, xxl, xxxl"
                            }, {
                                id: "2", 
                                img: "https://s3.amazonaws.com/uifaces/faces/twitter/axel/128.jpg",
                                name: "Product3", 
                                desc: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.", 
                                minOrder: 12,
                                minOrderStr: "pcs",
                                capacity: 5000,
                                capacityPeriod: "per month",
                                materials: "textil, plastic",
                                colors: "red, green, pink, black",
                                sizes: "l, xl, xxl, xxxl"
                            }
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
                                img: "https://s3.amazonaws.com/uifaces/faces/twitter/therealmarvin/128.jpg", 
                                name: "Product1", 
                                desc: "The best", 
                                minOrder: 12,
                                minOrderStr: "pcs",
                                capacity: 5000,
                                capacityPeriod: "per month",
                                materials: "textil, plastic",
                                colors: "red, green, pink, black",
                                sizes: "l, xl, xxl, xxxl"
                            }, 
                            {
                                id: "1", 
                                img: "https://s3.amazonaws.com/uifaces/faces/twitter/karthipanraj/128.jpg",
                                name: "Product2", 
                                desc: "The best description", 
                                minOrder: 12,
                                minOrderStr: "pcs",
                                capacity: 5000,
                                capacityPeriod: "per month",
                                materials: "textil, plastic",
                                colors: "red, green, pink, black",
                                sizes: "l, xl, xxl, xxxl"
                            }
                        ]
                    }
                ]
            }
        ], 
        companyDesc: "Sit and Chill is a Chinese restaurant in St. Irving, Texas. For nine years, we have been a local favorite for the best Chinese noodles in town.",
        companyLongerDesc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    }
]

const usersIdeas = [
    {
        userId: "0",
        projects: [
            {
                id: "0",
                name: "The best project",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident",
                category: "Category",
                subCategory: "Sub Category",
                materials: ["iron","leder","textil","plastic"],
                sizes: ["small", "medium", "large"],
                quantity: 15,
                forPeriod: "per year",
                offersRequested: false,
                offersReceived: false,
                statusMessage: "You haven't requested offers yet!",
            },
            {
                id: "1",
                name: "The best project",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident",
                category: "Category",
                subCategory: "Sub Category",
                materials: ["iron","leder","textil","plastic"],
                sizes: ["small", "medium", "large"],
                quantity: 15,
                forPeriod: "per year",
                offersRequested: true,
                offersReceived: true,
                statusMessage: "Offers received",
            },
        ]
    },
    {
        userId: "1",
        projects: [
            {
                id: "2",
                name: "The best project",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident",
                category: "Category",
                subCategory: "Sub Category",
                materials: ["iron","leder","textil","plastic"],
                sizes: ["small", "medium", "large"],
                quantity: 15,
                forPeriod: "per year",
                offersRequested: true,
                offersReceived: false,
                statusMessage: "Collecting offers",
            },
            {
                id: "3",
                name: "The best project 2",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident",
                category: "Category",
                subCategory: "Sub Category",
                materials: ["iron","leder","textil","plastic"],
                sizes: ["small", "medium", "large"],
                quantity: 15,
                forPeriod: "per year",
                offersRequested: false,
                offersReceived: false,
                statusMessage: "You haven't requested offers yet!",
            },
        ]
    },
    {
        userId: "2",
        projects: [
            {
                id: "4",
                name: "The best project",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident",
                category: "Category",
                subCategory: "Sub Category",
                materials: ["iron","leder","textil","plastic"],
                sizes: ["small", "medium", "large"],
                quantity: 15,
                forPeriod: "per year",
                offersRequested: true,
                offersReceived: true,
                statusMessage: "Offers received",
            },
            {
                id: "5",
                name: "The best project",
                description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident",
                category: "Category",
                subCategory: "Sub Category",
                materials: ["iron","leder","textil","plastic"],
                sizes: ["small", "medium", "large"],
                quantity: 15,
                forPeriod: "per year",
                offersRequested: true,
                offersReceived: false,
                statusMessage: "Collecting Offers ....",
            },
        ]
    },
]

const projectOffers = [
    { 
        projectId: "4",
        offers: [
            { 
                id: "6",
                offerNumber: "0987654",
                companyId: "0",
                companyName: "Bella",
                capacity: 200000,
                period: "month",
                text: "It is a long established fact that a reader will be distracted by the readable content of a page",
                validTo: "20.06.2020",
                prices: [
                    {id: "0", price: 10, currency: "EUR", orderFrom: 0, orderTo: 1000},
                    {id: "1", price: 8, currency: "EUR", orderFrom: 1001, orderTo: 10000},
                    {id: "2", price: 5, currency: "EUR", orderFrom: 10001, orderTo: 200000},
                ],
                materials: ["iron","leder","textil","plastic"],
                sizes: ["small", "medium", "large"],
            },
            { 
                id: "7",
                offerNumber: "23456",
                companyId: "0",
                companyName: "Deku Stans Ltd",
                capacity: 500000,
                period: "month",
                text: "It is a long established fact that a reader will be distracted by the readable content of a page",
                validTo: "20.01.2021",
                prices: [
                    {id: "0", price: 20, currency: "$", orderFrom: 0, orderTo: 5000},
                    {id: "1", price: 18, currency: "$", orderFrom: 5001, orderTo: 50000},
                    {id: "2", price: 15, currency: "$", orderFrom: 50001, orderTo: 500000},
                ],
                materials: ["iron","leder","textil","plastic"],
                sizes: ["small", "medium", "large"],
            }
        ]
    },
    { 
        projectId: "1",
        offers: [
            { 
                id: "8",
                offerNumber: "0987654",
                companyId: "1",
                companyName: "Bella",
                capacity: 200000,
                period: "month",
                text: "It is a long established fact that a reader will be distracted by the readable content of a page",
                validTo: "20.06.2020",
                prices: [
                    {id: "0", price: 10, currency: "EUR", orderFrom: 0, orderTo: 1000},
                    {id: "1", price: 8, currency: "EUR", orderFrom: 1001, orderTo: 10000},
                    {id: "2", price: 5, currency: "EUR", orderFrom: 10001, orderTo: 200000},
                ],
                materials: ["iron","leder","textil","plastic"],
                sizes: ["small", "medium", "large"],
            },
            { 
                id: "9",
                offerNumber: "23456",
                companyId: "0",
                companyName: "Bella",
                capacity: 500000,
                period: "month",
                text: "It is a long established fact that a reader will be distracted by the readable content of a page",
                validTo: "20.01.2021",
                prices: [
                    {id: "0", price: 20, currency: "$", orderFrom: 0, orderTo: 5000},
                    {id: "1", price: 18, currency: "$", orderFrom: 5001, orderTo: 50000},
                    {id: "2", price: 15, currency: "$", orderFrom: 50001, orderTo: 500000},
                ],
                materials: ["iron","leder","textil","plastic"],
                sizes: ["small", "medium", "large"],
            }
        ]
    }
]

const options = {
    materials: [
      { id: 0, name: 'Plastic' },
      { id: 1, name: 'Metal' },
      { id: 2, name: 'Iron' },
      { id: 3, name: 'Textil' },
    ],
    sizes: [
        { id: 0, name: 'small' },
        { id: 1, name: 'medium' },
        { id: 2, name: 'large' },
        { id: 3, name: 'xl' },
        { id: 4, name: 'xxl' },
        { id: 5, name: 'xxxl' },
        { id: 6, name: '1 kg' },
        { id: 7, name: '2 kg' },
        { id: 8, name: '3 kg' },
        { id: 9, name: '1 l' },
        { id: 10, name: '2 l' },
        { id: 11, name: '3 l' },
      ],
    period: [
        { id: 0, name: 'Just once' },
        { id: 1, name: 'Every week' },
        { id: 2, name: 'Every 2 weeks' },
        { id: 3, name: 'Every month' },
        { id: 4, name: 'Every 3 months' },
        { id: 5, name: 'Every halv an year' },
        { id: 6, name: 'Every year' },
        { id: 7, name: 'None of the options' },
      ],
      colors: [
        { id: 0, title: 'Red' },
        { id: 1, title: 'Green' },
        { id: 2, title: 'Yellow' },
        { id: 3, title: 'Orange' },
        { id: 4, title: 'Black' },
        { id: 5, title: 'White' },
        { id: 6, title: 'Blue' },
        { id: 7, title: 'Pink' },
        { id: 5, title: 'Grey' },
        { id: 6, title: 'Purple' },
        { id: 7, title: 'Cian' },
      ],
      productType: [
        { id: 0, title: 'pcs' },
        { id: 1, title: 'boxes' },
        { id: 2, title: 'containers' },
        { id: 3, title: 'liters' },
        { id: 4, title: 'packages' },
        { id: 5, title: 'units' },
        { id: 6, title: 'sets' },
        { id: 7, title: 'pairs' }
      ],
      capacityPeriod: [
        { id: 0, title: 'Daily' },
        { id: 1, title: 'Weekly' },
        { id: 2, title: 'Monthly' },
        { id: 3, title: 'Early' },
      ],
}

const API = "http://localhost:4000/";

export const addProduct = (product, category, subCategory, companyID) => {
    // console.log(product, category, subCategory, companyID);
    
    // return searchResults[companyID].categories[category].subCategories[subCategory].products.push(product);
}

export const requestOffers = (projectId, userId) => {
    const project = usersIdeas[userId].projects[projectId];
    project.offersRequested = true;
    project.statusMessage = "Collecting offers";
    return { status: 200, message: "Offers requested", project: project }
}

export const  fetchProductTypes = async (subCatId) => {
    const products = [];
    const res = await axios.get(API + "product-types/" + subCatId);
    Object.keys(res.data).forEach(key => products.push(res.data[key]));
    return products;
}

export const createProject = async (project) => {
    const res = await axios.post(API + "projects/add-project/", project);
    return res;
}

export const editProject = async (project) => {
    const res = await axios.post(API + "projects/edit-project/", project);
    return res;
}

export const getOptions = (type) => {
    return options[type];
}

export const getOffers = (projectId) => {    
    return projectOffers["0"].offers;
}

export const getProject = async (id) => {
    const res = await axios.get(API + "projects/get-by-id/" + id );
    return res;
}

export const addCategory = async (category) => {
    const res = await axios.post(API + "categories/add-one/", category);
    return res;
}

export const addProject = async (userId, project) => {
    const res = await axios.post(API + "projects/addProject", { userId, project });
    return res;
}

export const sendOffer = async (offer) => {    
    const res = await axios.post(API + "offers/send-offer", { offer });
    return res;
}

export const getProjects = async (id) => {
    const res = await axios.get(API + "projects/getProjects/" + id);    
    return res.data.projects;
}

export const getCompany = (id) => {
    return searchResults[id];
}

export const fetchSearchResults = (searched) => {
    // const {country, category, subCategory, filter} = searched;
    return searchResults;
}

export const fetchCategories = async (type) => {
    const res = await axios.get(API + "categories/" + type);
    const cat = [];
    Object.keys(res.data).forEach(key => cat.push(res.data[key]));   
    return cat;
}

export const fetchSubCategories = async (category) => {    
    const res = await axios.post(API + "categories/sub", {category});
    const cat = [];
    Object.keys(res.data).forEach(key => cat.push(res.data[key]));   
    return cat;
}

export const fetchPlansCards = async (type) => {    
    const res = await axios.get(API + "plans/" + type );
    const cards = [];
    Object.keys(res.data).forEach(key => cards.push(res.data[key]));   
    return cards;
}

// export const getProject = async (id) => {    
//     const res = await axios.get(API + "projects/getById" + id );
//     console.log(res);
//     return res;
// }

export const fetchHomeInfoCards = (isManufacturer) => {
    if (isManufacturer){
        return manHomeInfoCards;
    }else{
         return homeInfoCards;
    }
}

export const fetchCreateProjectDesc = () => {
    return homeInfoCards[1];
};

const authorization = (token) => {
    return { headers: {'Authorization': `Bearer ${token}`}}
};


export const resetPassRequest = async (email) => {
    const res = await axios.post(API + "users/resetPass", { email: email });
    return res;
}

export const updatePassRequest = async (password, token) => {
    const res = await axios.post(API + "users/updatePass", { password: password }, authorization(token));
    alert(res)
    return res;
}

export const registerRequest = async (userInfo) => {
    const res = await axios.post(API + "users/signup", userInfo);
    return res;
}

export const loginRequest = async (email, password) => {
    const res = await axios.post(API + "users/login", { "email": email, "password": password });
    return res;
}

export const deleteProject = async (id) => {
    const res = await axios.delete("http://localhost:4000/projects/delete/" + id);
    // const res = await axios.delete("http://localhost:4000/projects/delete" + id, authorization(token));
    return res;
}

export const deleteProductLine = async (id) => {
    const res = await axios.delete("http://localhost:4000/projects/product-line/delete/" + id);
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

