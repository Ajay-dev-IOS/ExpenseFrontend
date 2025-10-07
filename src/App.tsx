import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"

import Dashboard from "./pages/dashboard/Dashboard"
import ExpenseDetails from "../src/pages/expense/ExpenseDetails"
import NewExpense from "./pages/expense/NewExpense"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import ExpenseReport from "./pages/expense/ExpenseReport"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/expense/:id' element={<ExpenseDetails />} />
        <Route path='/Reports' element={<ExpenseReport />} />
        <Route path='/new' element={<NewExpense />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App