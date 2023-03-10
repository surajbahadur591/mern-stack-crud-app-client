import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/allusers" element={<AllUsers />}></Route>
          <Route path="/adduser" element={<AddUser />}></Route>
          <Route path="/edituser/:id" element={<EditUser />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
