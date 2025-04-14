import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
let myObj={
  username:"Chetali",
  age:20,
  studying: "yes in college", 
}
let newArr= [1,2,3]
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
    <Card username="Chetali" btnText="Click me"/>
    <Card username="Hani" btnText="Visit me" />
    </>
  )
}

export default App
