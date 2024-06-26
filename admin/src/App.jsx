import Sidebar from "./components/Sidebar/Sidebar.jsx"
import Navbar from "./components/navbar/Navbar.jsx"
import {Routes,Route} from "react-router-dom"
import Add from "./pages/Add/Add.jsx"
import List from "./pages/List/List.jsx"
import Order from "./pages/orders/Order.jsx"
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const url ="https://mern-food-delivery-1.onrender.com"

  return (
    
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Add url= {url}/>} />
          <Route path="/add" element={<Add url= {url}/>}/>
          <Route path="/list" element={<List url= {url}/>}/>
          <Route path="/orders" element={<Order url= {url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
