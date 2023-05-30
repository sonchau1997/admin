import { Route, Routes } from "react-router-dom";
import Dashboard from "Pages/Dashboard";
import Login from "Pages/Login";



const App = () => {
  return (


    <Routes>
      <Route path="/" element={<Dashboard />}></Route>

      <Route path="/Login" element={<Login />}></Route>

    </Routes>

  )




};
export default App;