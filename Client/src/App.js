import Home from "./pages/Home"
import Categories from "./pages/Categories";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";

import {Routes,Route} from "react-router-dom"

function App() {
	return (
		<div className='App'>
		<Routes>
			<Route exact path='/' element = {<Home/>}/>
			<Route path='/pay' element = {<Payment/>}/>
			<Route path='/product' element = {<Product/>}/>
			<Route path='/category' element = {<Categories/>}/>
			<Route path='/cart' element = {<Cart/>}/>
			<Route path='/register' element = {<Register/>}/>
			<Route path='/login' element = {<Login/>}/>
			<Route path='/paysuccess' element = {<PaymentSuccess/>}/>
		</Routes>
		</div>
	);
}

export default App;
