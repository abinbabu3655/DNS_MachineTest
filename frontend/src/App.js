import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import LastPage from "./Pages/LastPage";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>}/> 
            <Route path="/second" element={<SecondPage/>}/> 
            <Route path="/third" element={<ThirdPage/>}/>
            <Route path="/last" element={<LastPage/>}/> 

          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
