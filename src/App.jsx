import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import CuisineDetail from "./pages/CuisineDetail";
import AddReciepe from "./pages/AddReciepe";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/details" element={<CuisineDetail />}/>
        <Route path="/addRecipe" element={<AddReciepe />}/>
      </Routes>
    </>
  );
}

export default App;
