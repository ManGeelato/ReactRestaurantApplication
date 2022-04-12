import React, {createContext, useCallback, useState} from "react";
import axios from 'axios';
export const myContext = createContext();

export const AppContext = ({children}) =>{
    const [homePageMeals, setHomePageMeals] = useState([]);
    const [dishes, setDishes] = useState([]);
    const [otherMeals, setOtherMeals] = useState([]);


    //fetching home meals
    const fetchHomePageMeals = useCallback((searchFood) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`)
        .then(response => {
            console.log(response.data.meals); //meals is a variable from API
            setHomePageMeals(response.data.meals) //meals is a variable from API
        })
    },[])

    //fetching dishes known from API as categories
    const fetchDishes = useCallback(()=> {
        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(response => {
            console.log(response.data.categories) //categories is a variable from API
            setDishes(response.data.categories) //categories is a variable from API
        })
        
    },[])

    //fetching other meals known from API as Random
    const fetchOtherMeals = useCallback(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(response => {
            console.log(response.data.meals); //random is a variable from API
            setOtherMeals(response.data.meals); //random is a variable from API
        })
    },[])

    // notice how below we're now substituting variables from API with ones we have set above with useState
    return <myContext.Provider value={{fetchHomePageMeals, homePageMeals, fetchDishes, dishes, fetchOtherMeals, otherMeals}}>{children}</myContext.Provider>
};