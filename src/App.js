import logo from "./logo.svg";
import "./App.css";
import { lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Emoji from "./components/Emoji";
import axios from "axios";
import User from "./components/User";
import Home from "./components/Home";
// const Home = lazy(() =>
//   import("./components/Home").then((module) => {
//     return { default: module.Home };
//   })
// );

const URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await axios.get(URL);
        // console.log(user.data);
        setUsers(user.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
    // axios.get(URL).then((res) => setUsers(res.data));
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
