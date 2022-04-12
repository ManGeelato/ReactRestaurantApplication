import React, { useState, useCallback, useContext } from "react";
import "./HomePage.scss";
import { myContext } from "../Context/context";


const HomePage = () => {
  const [searchFood, setSearchFood] = useState("");

  const {fetchHomePageMeals, homePageMeals} = useContext(myContext);

  const fetchHomeMeals = useCallback(() => {
    fetchHomePageMeals(searchFood);
  }, [searchFood, fetchHomePageMeals]);



  console.log(searchFood);
  return (
    <div className="home">
      <div className="home-search">
        <input
          type="text"
          placeholder="Delizios`o name..."
          value={searchFood}
          onChange={(e) => setSearchFood(e.target.value)}
        ></input>
        <button className="searchButton" onClick={fetchHomeMeals}>Search</button>
      </div>

      <div className="home-view">
        {
          homePageMeals?(
            homePageMeals.map((homePageMeal) =>(
              <div className="home-meals" key={homePageMeal.idMeal}>
                <img src={homePageMeal.strMealThumb} alt="Delizioso meal" />
                <h4>{homePageMeal.strMeal}</h4>
              </div>
            ))
          ) : (
            <h2>Delizioso Not Found, Search Again!!!</h2>
          )
        }
      </div>
    </div>
  );
};

export default HomePage;
