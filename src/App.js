import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import "./styles/App.css";
import NavBar from "./Components/NavBar";
import StudentProfile from "./Components/StudentProfile";
import StudentBar from "./Components/StudentBar";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<NavBar />} />

				<Route index element={<Home />} />

				<Route path="Students" element={<StudentBar />}>
					<Route path="StudentProfile" element={<StudentProfile />} />
				</Route>
			</Routes>

			<Footer />
		</BrowserRouter>
	);
}

export default App;
