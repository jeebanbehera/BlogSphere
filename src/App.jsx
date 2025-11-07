import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch()
  return (

    <>
      <h1 className='text-3xl bg-gray text-red-400'>Blog with appwirte</h1>
    </>
  )
}

export default App
