import { Route, Routes } from "react-router-dom";
import Dashboard from "Pages/Dashboard";
import PrimaryLayout from "Componets/Layout";
import UserManagament from "Pages/UserManagament";
import CustomerManagament from "Pages/CustomerManagament";
const App = () => {
  return (

    <Routes>
    <Route path="/" element={<PrimaryLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="user" element={<UserManagament/>} />
      <Route path="customer" element={<CustomerManagament />} />
    
    </Route>
  </Routes>
  )




};
export default App;