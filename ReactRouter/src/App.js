import "./App.css";
import {Routes, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Error from "./Components/Error";
import Support from "./Components/Support";
import Labs from "./Components/Labs";
import MainHeader from "./Components/MainHeader";

function App() {
  return (
    <div className="wrapper">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
