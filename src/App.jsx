import { Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from "./pages/Home";
import Produtos from "./pages/Produtos/Produtos";
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
