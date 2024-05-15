/* eslint-disable react/prop-types */
import { useContext } from 'react';
import './foodDisplay.css';
import { StoreContext } from '../context/StoreContext';
import FoodItem from '../foodItem/FoodItem';

function FoodDisplay() {
    const { food_list } = useContext(StoreContext);
    
    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item) => (
                    <FoodItem
                        key={item._id} 
                        id={item._id} 
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default FoodDisplay;
