import Login from "./pages/Login/Login"
import Cadastro from "./pages/Cadastro/Cadastro"
import Hoje from "./pages/Hoje/Hoje"
import Habitos from "./pages/Habitos/Habitos"
import Historico from "./pages/Historico/Historico"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./styles/style.css"
import { useState } from "react";
import UserContext from "./context/UserContext"
import ProgressoContext from "./context/ProgressoContext" 
 
function App() {
  const [user, setUser] = useState({})
  const [progresso, setProgresso] = useState(70)

  return (
    <BrowserRouter>
      <ProgressoContext.Provider value={{progresso, setProgresso}}>
        <UserContext.Provider value={{user, setUser}}>
            <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/cadastro" element={<Cadastro />}/>
              <Route path="/hoje" element={<Hoje />}/>
              <Route path="/habitos" element={<Habitos />}/>
              <Route path="/historico" element={<Historico />}/>
            </Routes>
        </UserContext.Provider>
      </ProgressoContext.Provider>
    </BrowserRouter>
  )
}

export default App
