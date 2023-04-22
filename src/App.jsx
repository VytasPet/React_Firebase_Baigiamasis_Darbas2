import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import SingleShopContent from "./components/shopcomponents/SingleShopContent";
import AddShopPage from "./pages/AddShopPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopsPage from "./pages/ShopsPage";
import SingleShopPage from "./pages/SingleShopPage";
import { useAuthCtx } from "./store/AuthProvider";
import { ContentWrap } from "./styles/ContentWrap";
import { GlobalStyle } from "./styles/GlobalStyle";
import { PageContainer } from "./styles/PageContainer";
// import "./styles/reset.css";

function App() {
  const { isLoggedIn } = useAuthCtx();
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <ContentWrap>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {isLoggedIn && (
              <>
                <Route path="/shops" element={<ShopsPage />} />
                <Route path="/single" element={<SingleShopContent />} />
                <Route path="/addshop" element={<AddShopPage />} />
                <Route path="/shops/:shopUid" element={<SingleShopPage />} />
              </>
            )}
          </Routes>
        </ContentWrap>
        <Footer />
      </PageContainer>
    </>
  );
}

export default App;
