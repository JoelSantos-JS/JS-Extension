
import {
  Routes,
  Route
} from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Sign Up/SignUp";
import { Home } from "./pages/Home";

export function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
} 