
import {
  Routes,
  Route
} from "react-router-dom";
import Login from "./Components/Login/Login";
import { Home } from "./pages/Home";

export function RoutesComponent() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Login />} />
    </Routes>
  )
} 