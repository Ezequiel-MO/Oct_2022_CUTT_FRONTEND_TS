import { useEffect } from 'react'
import { useBudgetContext } from './context/context'
import { IVendor } from './context/interfaces'

type BudgetLineProps = {
  _id: string
  day: string | null
  options: IVendor[]
}

const BudgetLine = ({ _id, day, options }: BudgetLineProps) => {
  const { budgetValues, dispatch } = useBudgetContext()
  const { budget } = budgetValues

  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(budget))
  }, [budget])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    dispatch({
      type: 'UPDATE_OPTIONS_FIRST_POSITION',
      payload: {
        _id,
        id: value
      }
    })
  }
  return (
    <div>
      <p>
        {day}
        <span>
          <select onChange={handleChange}>
            {options.map((option) => {
              const [vendor, vendor_details] = Object.entries(option)[0]
              const { id } = vendor_details
              return (
                <option key={id} value={id}>
                  {vendor}
                </option>
              )
            })}
          </select>
        </span>
        {options[0][Object.keys(options[0])[0]].amount}
      </p>
    </div>
  )
}

export default BudgetLine
