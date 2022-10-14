import { BudgetContext } from './context'
import { useBudgetReducer } from './reducer'

type BudgetProviderProps = {
  children: JSX.Element | JSX.Element[]
}

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [budgetValues, dispatch] = useBudgetReducer()
  return (
    <BudgetContext.Provider value={{ budgetValues, dispatch }}>
      {children}
    </BudgetContext.Provider>
  )
}
