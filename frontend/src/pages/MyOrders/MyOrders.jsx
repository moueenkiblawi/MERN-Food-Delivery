import { useContext, useEffect, useState } from 'react';
import './myOrders.css';
import { StoreContext } from '../../components/context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets.js';

function MyOrders() {
    const [data, setData] = useState([]);
    const { url, token } = useContext(StoreContext);

    const fetchData = async () => {
        try {
            const response = await axios.post(url + "/api/order/userorders", {}, { headers: {token:token }});
            setData(response.data.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };

    useEffect(() => {
        if (token) {
            fetchData();
        }
    }, [token]);

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className="container">
                {data && data.length > 0 ? (
                    data.map((orders, index) => (
                         <div className='my-orders-order' key={index}>
                            <img src={assets.parcel_icon} alt="" />
                            <p>{orders.items.map((item, index) => {
                                if (index === orders.items.length - 1) {
                                    return item.name + " x " + item.quantity;
                                } else {
                                    return item.name + " x" + item.quantity + ", ";
                                }
                            })}</p>

                            <p>${orders.amount}.00</p>

                            <p>Items: {orders.items.length}</p>

                            <p><span>&#x25cf;</span> <b>{orders.status}</b></p>

                            <button onClick={fetchData}>Track Order</button>
                        </div>
                    ))
                ) : (
                    <p>No orders found.</p>
                )}
            </div>
        </div>
    );
}

export default MyOrders;
