import { useEffect, useState } from 'react'
import './App.css'
import Budget from './components/budget/Budget'
import { IBudgetValues } from './components/budget/context/interfaces'
import { BudgetProvider } from './components/budget/context/provider'
import Login from './components/login/Login'
import Map from './components/map/Map'
import useGetProjects from './hooks/useGetProjects'

function App() {
  const { projects } = useGetProjects()

  useEffect(() => {
    console.log('projects', projects)
  }, [projects])

  return (
    <div>
      {/*  <Login /> */}
      <Map />
      <BudgetProvider>
        <Budget />
      </BudgetProvider>
    </div>
  )
}

export default App
