import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Input from './components/Input'
import ExpenseFinder from './components/ExpenseFinder'
import Report from './components/Report'

function Routers() {
  return (
   <Routes>
    <Route path='/'  element={<ExpenseFinder/>}/>
    <Route path='/income_and_expense'  element={<Input/>}/>
    <Route path='/result'  element={<Report/>}/>
   </Routes>
  )
}

export default Routers