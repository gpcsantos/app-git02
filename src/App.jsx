import ListaProdutos from "./components/ListaProdutos";

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Produtos from "./pages/Produtos/Produtos";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Home/>
      <Produtos />
      <Footer />
    </>
  );
}

export default App;
