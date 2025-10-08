import { useEffect, useState } from "react"
import ExpenseList from "../../components/ExpenseList"
import type { Expense } from "../../model/Expense"
import apiClient from "../../config/api-client";
import getExpense from "../../services/apiClient-service";
import useExpenses from "../../hooks/useExpenses";
import DashboardStatus from "./DashboardStatus";




const Dashboard = () => {
    const LoggedinUser = "ajay@Example.com";
    
    const {expense, error, isLoading}= useExpenses();
    const totalExpenses = expense.reduce((total, exp) => (total + exp.amount), 0);
    return ( 
    <div className="container">
        {error && <p>{error}</p>}
        <DashboardStatus LoggedinUser= {LoggedinUser} totalExpenses={totalExpenses}/>
        <ExpenseList expenses= {expense}/>
    </div>
    
    )
}

export default Dashboard
