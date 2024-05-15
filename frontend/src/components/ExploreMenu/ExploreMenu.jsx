/* eslint-disable react/prop-types */
import './exploreMenu.css';
import { menu_list } from '../../assets/assets';
function ExploreMenu({category,setCategory}) {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience. One delecious meal at a time.</p>
      <div className="explore-menu-list">
        {menu_list.map((menu,index)=>{
          return(
            <div onClick={()=> 
            setCategory(prev=>prev=== menu.menu_name ? "All" : menu.menu_name)}
             className='explore-menu-list-item' key={index}>
              
            <img className={category===menu.menu_name ? "active" : ""} src={menu.menu_image} alt="" />
            <p>{menu.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu