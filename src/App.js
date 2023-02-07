import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "./styles/App.css";
import NavBar from "./Components/NavBar";
import StudentProfile from "./Components/StudentProfile";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<NavBar />} />

				<Route index element={<Home />} />

				<Route path="studentprofile/:id" element={<StudentProfile />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
