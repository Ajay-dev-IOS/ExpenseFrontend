import { useEffect, useState } from "react"
import ExpenseList from "../../components/ExpenseList"
import type { Expense } from "../../model/Expense"
import apiClient from "../../config/api-client";
import getExpense from "../../services/apiClient-service";




const Dashboard = () => {
    const[expense, setExpense] = useState<Expense[]>([]);
    const[error, setError] = useState(null);
    const[isLoading, setloading] = useState(false);


    useEffect(()=>{
        setloading(true)
        getExpense()
        .then(response => {
            setExpense(response.data);
            
        })
        .catch(error => setError(error.message))
        .finally(() => setloading(false))},[]);
    
    
    return ( 
    <div>
        {error && <p>{error}</p>}
        <ExpenseList expenses= {expense}/>
    </div>
    
    )
}

export default Dashboard
