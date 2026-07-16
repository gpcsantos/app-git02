import { Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import moduleName from './pages/';
import Produtos from "./pages/Produtos/Produtos";
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build" element={<Build />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
