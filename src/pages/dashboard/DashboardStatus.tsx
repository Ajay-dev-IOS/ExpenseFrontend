import React from 'react'
import CurrencyUtils from '../../utils/CurrencyUTils'
import FormatDateUtil from '../../utils/FromatDateUtil'


interface Props {
    LoggedinUser: string;
    totalExpenses: number;
}

const DashboardStatus = (list: Props) => {
    
  return (
    
    <div className='mt-2'>
        <div className='text-center'>
            <h5 className='mb-4'>
                Total Expenses

            </h5>
            <h3>
                <span className='app-primary-bg-color'>{CurrencyUtils.formatAmount(list.totalExpenses)}</span>
            </h3>

        </div>
        <div className="d-flex justify-content-between">
            <div>
                Welcome, <b className='app-primary-color'>{list.LoggedinUser}</b>
            </div>
            <div>
                {FormatDateUtil.formatDate(new Date())}
            </div>
        </div>
      
    </div>
  )
}

export default DashboardStatus
