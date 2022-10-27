import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Course from "./Components/Courses/Courses";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import Checkout from "./Components/Checkout/Checkout";
import RequireAuth from "./Components/Hook/RequireAuth";

function App() {
  return (
    <div className="bg-slate-100/70 h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<DetailsPage />} />
        <Route
          path="/checkout/:checkId"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
