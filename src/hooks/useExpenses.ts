import { useEffect, useState } from "react";
import type { Expense } from "../model/Expense";
import getExpense from "../services/apiClient-service";

const useExpenses = () => {
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

        return {expense, error, isLoading};
    
}

export default useExpenses;

