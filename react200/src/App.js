import React from "react";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import R089_1 from "./components/R089_1";
import R089_2 from "./components/R089_2";

const App = () => {
  return (
    <Router>
      {/* header */}
      <ol> this is header
        <li><Link to={'./R089_1'}>이동 1</Link></li>
        <li><Link to={'./R089_2'}>이동 2</Link></li>
      </ol>
      <Routes>
        <Route exact path='/R089_1' element={<R089_1/>}/>
        <Route exact path='/R089_2' element={<R089_2/>}/>
      </Routes>
      <p>this is footer</p>
      {/* footer */}
    </Router>
  );
};

export default App;
