import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import ProductList from "./Components/ProductPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="/products" element={<ProductList />}></Route>
			</Routes>
		</BrowserRouter>
	);
}
export default App;
