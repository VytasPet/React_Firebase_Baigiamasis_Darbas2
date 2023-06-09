import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import SingleShopContent from "./components/shopcomponents/SingleShopContent";
import AddShopPage from "./pages/AddShopPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopsPage from "./pages/ShopsPage";
import { useAuthCtx } from "./store/AuthProvider";
import { GlobalStyle } from "./styles/GlobalStyle";
import { PageContainer } from "./styles/PageContainer";

// import "./styles/reset.css";

function App() {
  const { isLoggedIn } = useAuthCtx();
  return (
    <>
      <GlobalStyle />
      <Toaster />
      <PageContainer>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to={"/shops"} /> : <LoginPage />} />
          <Route path="/register" element={isLoggedIn ? <Navigate to={"/shops"} /> : <RegisterPage />} />
          <Route path="/shops" element={!isLoggedIn ? <Navigate to={"/"} /> : <ShopsPage />} />
          {isLoggedIn && (
            <>
              <Route path="/single" element={<SingleShopContent />} />
              <Route path="/addshop" element={<AddShopPage />} />
              <Route path="/shops/:shopUid" element={<SingleShopContent />} />
            </>
          )}
        </Routes>
      </PageContainer>
      <Footer />
    </>
  );
}

export default App;
