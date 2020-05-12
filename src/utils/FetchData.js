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

