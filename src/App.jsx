import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AddShopPage from "./pages/AddShopPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopsPage from "./pages/ShopsPage";
import SingleShopPage from "./pages/SingleShopPage";
import { GlobalStyle } from "./styles/GlobalStyle";
// import "./styles/reset.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/shops" element={<ShopsPage />} />
        <Route path="/addshop" element={<AddShopPage />} />
        <Route path="/shops/:shopUid" element={<SingleShopPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
