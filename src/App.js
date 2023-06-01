import { Route, Routes } from "react-router-dom";
import Dashboard from "containers/Dashboard";
import PrimaryLayout from "components/Layout";
import UserManagament from "containers/UserManagament";
import CustomerManagament from "containers/CustomerManagament";
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