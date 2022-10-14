import { useReducer } from 'react'
import { rows } from '../mock_data/mockData'

import { IBudgetValues } from './interfaces'

type Payload = {
  _id: string
  id: string
}
type BudgetAction =
  | {
      type: 'UPDATE_OPTIONS_FIRST_POSITION'
      payload: Payload
    }
  | {
      type: 'RE_EVALUATE_TOTAL_BUDGET'
    }

const initialBudgetValues = {
  budget: JSON.parse(localStorage.getItem('budget')) || rows,
  total: 0
}

const budgetReducer = (state: IBudgetValues, action: BudgetAction) => {
  switch (action.type) {
    case 'UPDATE_OPTIONS_FIRST_POSITION':
      const { payload } = action
      const { _id, id } = payload
      return {
        ...state,
        budget: state.budget.map((row) => {
          if (row._id === _id) {
            const vendor = row.options.find(
              (vendor) => Object.values(vendor)[0].id === id
            )
            const options = [vendor, ...row.options.filter((v) => v !== vendor)]
            return { ...row, options }
          }
          return row
        })
      }
    case 'RE_EVALUATE_TOTAL_BUDGET':
      const total = state.budget.reduce((acc, row) => {
        const value = Object.values(row.options[0])[0]
        return acc + value.amount
      }, 0)
      return { ...state, total }
  }
}

export const useBudgetReducer = () =>
  useReducer(budgetReducer, initialBudgetValues)
