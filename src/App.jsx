import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Shirts from "./pages/Shirts";
import SingleShirt from "./pages/SingleShirt";
import NotFound from "./pages/404";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddShirt from "./pages/AddShirt";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shirts" element={<Shirts />} />
          <Route path="/shirts/:id" element={<SingleShirt />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/shirts/add" element={<AddShirt />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
