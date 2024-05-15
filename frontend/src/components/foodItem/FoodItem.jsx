/* eslint-disable react/prop-types */
import { useContext } from 'react';
import './foodItem.css';
import '../foodDisplay/foodDisplay.css';
import { StoreContext } from '../context/StoreContext';
import { assets } from '../../assets/assets';

function FoodItem({ category }) {
    const { food_list, cartItems, addToCart, removeFromCard,url } = useContext(StoreContext);

    // Filter the food list based on the category
    const filteredFoodList = category === "All" ? food_list : food_list.filter(item => item.category === category);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {filteredFoodList.length > 0 ? (
                    filteredFoodList.map((item) => (
                        <div className='food-item' key={item._id}>
                            <div className="food-item-img-container">
                                <img src={url+"/images/"+item.image} alt="" className='food-item-image'/>
                                {
                                    !cartItems[item._id] 
                                    ? <img 
                                        src={assets.add_icon_white}
                                        alt="" 
                                        className='add' 
                                        onClick={() => addToCart(item._id)} 
                                    />
                                    : <div className='food-item-counter'>
                                        <img onClick={() => removeFromCard(item._id)} src={assets.remove_icon_red} alt="" />
                                        <p>{cartItems[item._id]}</p>
                                        <img onClick={() => addToCart(item._id)} src={assets.add_icon_green} alt="" />
                                    </div>
                                }
                            </div>
                            <div className="food-item-info">
                                <div className="food-item-name-rating">
                                    <p>{item.name}</p>
                                    <img src={assets.rating_starts} alt="" />
                                </div>
                                <p className="food-item-desc">{item.description}</p>
                                <p className="food-item-price">${item.price}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No items available in this category.</div>
                )}
            </div>
        </div>
    );
}

export default FoodItem;
