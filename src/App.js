import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import StudentCard from "./pages/StudentCard";
import Footer from "./Components/Footer";
import Container from "./Components/Container";
import "./styles/App.css";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />

				<Routes>
					<Route path="Students" element={<StudentCard />} />
				</Routes>
				<Container />

				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
