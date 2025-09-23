import apiClient from "../config/api-client";
import type { Expense } from "../model/Expense";

const getExpense = () => {
    return apiClient.get<Expense[]>('/expenses');
}

export default getExpense;
