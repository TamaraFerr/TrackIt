import Cadastro from "./pages/Cadastro/Cadastro"
import Login from "./pages/Login/Login"
import Habitos from "./pages/Habitos"
import Hoje from "./pages/Hoje"
import Historico from "./pages/Historico"
import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
 
function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/hoje" element={<Hoje />}/>
        <Route path="/habitos" element={<Habitos />}/>
        <Route path="/historico" element={<Historico />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
