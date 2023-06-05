import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Habitos from "./pages/Habitos"
import Hoje from "./pages/Hoje"
import Historico from "./pages/Historico"
import { HabitosConcluidos, Usuario } from "./resources/Context"
import { useState } from "react"


export default function App() {
  
  const [usuario, setUsuario] = useState({});
  const [habitosConcluidos, setHabitosConcluidos] = useState(0)

  return (
    <Usuario.Provider value={[usuario, setUsuario]}>   
    <HabitosConcluidos.Provider value={[habitosConcluidos, setHabitosConcluidos]}>
      <BrowserRouter>
        <Routes>      
          <Route path="/" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/habitos" element={<Habitos/>}/>
          <Route path="/hoje" element={<Hoje/>}/>
          <Route path="/historico" element={<Historico/>}/>                 
        </Routes>
      </BrowserRouter>
    </HabitosConcluidos.Provider> 
    </Usuario.Provider>
  )
}



