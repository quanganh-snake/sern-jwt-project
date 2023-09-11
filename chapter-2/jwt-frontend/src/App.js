import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
        </Routes>

        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
