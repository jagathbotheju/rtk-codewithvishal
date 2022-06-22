import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SingleCocktail from "./components/SingleCocktail";

//https://github.com/trickjsprogram/react-starter-app

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cocktail/:id" element={<SingleCocktail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
