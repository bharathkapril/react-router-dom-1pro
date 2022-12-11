import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import User from "./components/User";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Emoji from "./components/Emoji";

const URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => setUsers(res.data));
  }, []);

  const route = (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user" element={<User users={users} />} />
        <Route path="emoji" element={<Emoji />} />
      </Routes>
    </Router>
  );

  return <div className="App">{route}</div>;
}

export default App;
