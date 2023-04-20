import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import { GlobalStyle } from "./styles/GlobalStyle";
import "./styles/reset.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Routes>
        <Route></Route>
      </Routes>
    </>
  );
}

export default App;
