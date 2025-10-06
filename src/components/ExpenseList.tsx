
import type { Expense } from "../model/Expense";


interface Props {
    expenses: Expense[]
    
}

const ExpenseList = ({expenses}:Props) => {
  
  return (
    // <div>
    //    <table border={1}>
    //     <thead>
    //         <tr>
    //             <th>name</th>
    //             <th>amount</th>
    //             <th>date</th>
    //         </tr>
    //     </thead>
    //     <tbody>
    //         {
    //             expenses.map((expense) => (
    //                 <tr key={expense.name}>
    //                     <td>{expense.name}</td>
    //                     <td>{expense.amount}</td>
    //                     <td>{expense.date}</td>
    //                 </tr>
    //             ))
    //         }
    //     </tbody>
    //    </table>
      
    // </div>
    <div className="card ">
        <h5 className="card-header">
            Expense
            <span className="float-end">Amount</span>
        </h5>
        <div className="card-body">
            {expenses.map((expenses) => (
                <div>
                <div className="d-flex justify-content-between border-bottom-1 p-3 text-dark">
                    <div className="card-title m-0">
                        <h5>
                        {expenses.name}
                        </h5>
                        <span className="fst-italic">
                        {expenses.date}
                        </span>
                        </div>
                        <div className="card-subtitle">
                        <h5 className=" app-primary-bg-color">
                            {expenses.amount}
                        </h5>
                    </div>
                </div>

            
            </div>
            ) )}

        </div>

    </div>
  )
}

export default ExpenseList;

