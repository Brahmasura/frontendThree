import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AfterSub from "./Pages/AfterSub/AfterSub";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/frontendThree" element={<Home />} />
        <Route path="/submit" element={<AfterSub />} />
      </Routes>
    </>
  );
};

export default App;
