
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home-Page";
import Register from "./pages/Register";
import PageError from "./pages/PageError";


const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="*" element={<PageError/>}/>
      </Routes>

    
  );
};

export default App;
