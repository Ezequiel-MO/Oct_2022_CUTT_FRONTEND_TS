import { useEffect } from 'react'
import BudgetLine from './BudgetLine'
import { useBudgetContext } from './context/context'

const Budget = () => {
  const { budgetValues, dispatch } = useBudgetContext()
  const { budget, total } = budgetValues

  useEffect(() => {
    dispatch({ type: 'RE_EVALUATE_TOTAL_BUDGET' })
  }, [budget])

  return (
    <div>
      <h2>Budget</h2>
      {JSON.stringify(budgetValues)}
      {budget.map(({ _id, day, options }) => {
        return (
          <div key={`${_id}`}>
            <BudgetLine _id={_id} day={day} options={options} />
          </div>
        )
      })}
      <p>Balance: {total}</p>
    </div>
  )
}

export default Budget
