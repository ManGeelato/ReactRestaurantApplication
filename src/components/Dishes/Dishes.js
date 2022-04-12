import React, {useEffect, useContext} from 'react'
import { myContext } from '../Context/context'
import './Dishes.scss'
const Dishes = () => {
  const {fetchDishes, dishes} = useContext(myContext);

  useEffect(() => {
    fetchDishes();
  }, [fetchDishes])

  // because in the mealdb they used Category, for sake of information retrieval,  we are gonna use the same variables
  return (
    <div className='dishes'>
      {dishes.map((dish) => (
        <div key={dish.idCategory}>
          <img src={dish.strCategoryThumb} alt="#" />
          <h4>{dish.strCategory}</h4>
        </div>
      ))}
    </div>
  )
}

export default Dishes