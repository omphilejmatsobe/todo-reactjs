import { useState } from 'react'
import './App.css'

function App() {
  const [popUp, setPopUp] = useState(false)

  const togglePop = () => setPopUp(!popUp)

  return (
    <>
      <div>
        <div onClick={togglePop}>Save</div>
      </div>
    </>
  )
}

export default App
