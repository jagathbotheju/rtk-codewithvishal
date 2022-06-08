import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import View from "./pages/View";

//https://github.com/trickjsprogram/react-starter-app

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="addContact" element={<AddEdit />} />
          <Route path="editContact/:id" element={<AddEdit />} />
          <Route path="viewContact/:id" element={<View />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
