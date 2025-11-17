import { Routes,Route } from "react-router-dom"
import Signup from './components/auth/signup'
import Login from './components/auth/login'

function App() {

  return(
    <> 
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>

    </Routes>
     </>
  )

}

export default App
