// import { Category, Child, Item } from "../types";
// import { UserInfo, Authorization } from '../types';
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
    { 
        id: "4",
        title: "Enterprise",
        price: "Custom",
        btnText: "Get a quote",
        period: "per month",
        text: "Full access to our Business with superior integrations, data protection & account management.",
        bestValue: false
    },
];

const homeInfoCards = [
    {
        id: "1",
        title: "The best title",
        text: "Developing an idea for a product is meaningless if you can't adequately produce it. Properly manufacturing your product requires an understanding of the design, materials and budget. For most businesses trying to turn ideas and prototypes into a tangible product, you'll need the    help of a manufacturing facility, especially if you're trying to produce in bulk. Here's what you need to consider as you search for a factory to produce your product. Before you hire a factory and start producing your product, you need to take care of a few beginning steps.",
    },
    {
        id: "2",
        title: "The best title",
        text: "Developing an idea for a product is meaningless if you can't adequately produce it. Properly manufacturing your product requires an understanding of the design, materials and budget. For most businesses trying to turn ideas and prototypes into a tangible product, you'll need the    help of a manufacturing facility, especially if you're trying to produce in bulk. Here's what you need to consider as you search for a factory to produce your product. Before you hire a factory and start producing your product, you need to take care of a few beginning steps.",
    },
    {
        id: "3",
        title: "The best title",
        text: "Developing an idea for a product is meaningless if you can't adequately produce it. Properly manufacturing your product requires an understanding of the design, materials and budget. For most businesses trying to turn ideas and prototypes into a tangible product, you'll need the    help of a manufacturing facility, especially if you're trying to produce in bulk. Here's what you need to consider as you search for a factory to produce your product. Before you hire a factory and start producing your product, you need to take care of a few beginning steps.",
    },
    {
        id: "4",
        title: "The best title",
        text: "Developing an idea for a product is meaningless if you can't adequately produce it. Properly manufacturing your product requires an understanding of the design, materials and budget. For most businesses trying to turn ideas and prototypes into a tangible product, you'll need the    help of a manufacturing facility, especially if you're trying to produce in bulk. Here's what you need to consider as you search for a factory to produce your product. Before you hire a factory and start producing your product, you need to take care of a few beginning steps.",
    }
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

