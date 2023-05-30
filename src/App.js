import { Route, Routes } from "react-router-dom";
import Dashboard from "Pages/Dashboard";

import UserManagament from "Pages/UserManagament";



const App = () => {
  return (


    <Routes>
      <Route path="/" element={<Dashboard />}></Route>

      <Route path="/user" element={<UserManagament />}></Route>

    </Routes>

  )




};
export default App;