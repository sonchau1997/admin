import { Route, Routes } from "react-router-dom";
import Dashboard from "Pages/Dashboard";
import UserManagament from "Pages/UserManagament";
import CustomerManagament from "Pages/CustomerManagament";

const App = () => {
  return (


    <Routes>
      <Route path="/" element={<Dashboard />}></Route>

      <Route path="/user" element={<UserManagament />}></Route>
      <Route path="/customer" element={<CustomerManagament />}></Route>

    </Routes>

  )




};
export default App;