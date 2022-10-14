import { createContext, useContext } from 'react'

export const BudgetContext = createContext(null)

export const useBudgetContext = () => {
  const context = useContext(BudgetContext)
  if (context === undefined) {
    throw new Error('useBudgetContext must be used within a BudgetProvider')
  }
  return context
}
