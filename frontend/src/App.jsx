import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Left from './Left/Left'
import Right from './Right/Right'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='flex h-screen '  style={{maxHeight:'Calc(100vh)'}}>
     <Left/>
     <Right/>
     </div>
    </>
  )
}

export default App
