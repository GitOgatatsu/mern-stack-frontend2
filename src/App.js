import { Route, Routes, BrowserRouter } from "react-router-dom";

import Register from "./pages/user/register";
import Login from "./pages/user/login";
import ReadAll from "./pages/item/readAll";
import ReadSingle from "./pages/item/readSingle";
import Create from "./pages/item/create";
import Update from "./pages/item/update";

import "./App.css";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/user/register" element={<Register />} />
				<Route path="/user/login" element={<Login />} />
				<Route path="/" element={<ReadAll />} />
				<Route path="/item/:id" element={<ReadSingle />} />
				<Route path="/item/create" element={<Create />} />
				<Route path="/item/update/:id" element={<Update />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
