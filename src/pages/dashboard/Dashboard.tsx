import { useEffect, useState } from "react"
import ExpenseList from "../../components/ExpenseList"
import type { Expense } from "../../model/Expense"
import apiClient from "../../config/api-client";
import getExpense from "../../services/apiClient-service";
import useExpenses from "../../hooks/useExpenses";




const Dashboard = () => {
    
    const {expense, error, isLoading}= useExpenses();
    return ( 
    <div className="container">
        {error && <p>{error}</p>}
        <ExpenseList expenses= {expense}/>
    </div>
    
    )
}

export default Dashboard
