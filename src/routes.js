import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "pages/Inicio";
import Cardapio from "pages/Cardapio";
import Menu from "components/Menu";
import Header from "components/Header";
import Sobre from "pages/Sobre";
import Footer from "components/Footer";
import NotFound from "pages/NotFound";

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
