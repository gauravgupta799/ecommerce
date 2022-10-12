import Home from "./pages/Home"
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";

import {Routes,Route} from "react-router-dom"

function App() {
	// const user = true;
	return (
		<div className='App'>
		<Routes>
			<Route exact path='/' element = {<Home/>}/>
			<Route path='/product/:id' element = {<Product/>}/>
			<Route path='/products/:category' element = {<ProductList/>}/>
			<Route path='/cart' element = {<Cart/>}/>
			<Route path='/register' element = {<Register/>}/>
			<Route path='/login' element = {<Login/>}/>
			<Route path='/pay' element = {<Payment/>}/>
			<Route path='/paysuccess' element = {<PaymentSuccess/>}/>
		</Routes>
		</div>
	);
}

export default App;
