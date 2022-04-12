import React,{useEffect, useContext} from 'react';
import {myContext} from '../Context/context'
import './OtherMeals.scss'
const OtherMeals = () => {

  const {fetchOtherMeals, otherMeals } = useContext(myContext);

  useEffect(() => {
    fetchOtherMeals();
  }, [fetchOtherMeals])


  return (
    <div className="otherMeals">
      {otherMeals.map((otherMeal) =>(
        <div key={otherMeal.idMeal} className="otherMeals-view">
          <div className="otherMeals-view-controls">
            <img src={otherMeal.strMealThumb} alt="Delizioso Meal" />
            <p>{otherMeal.strMeal}</p>
            <button onClick={fetchOtherMeals}>Get'nother Delizios`o</button>
          </div>
          <div className="otherMeals-view-instructions">
            <h4>Delizios`o Instructions</h4>
            <p>{otherMeal.strInstructions}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default OtherMeals