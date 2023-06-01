import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Habitos from "./pages/Habitos"
import Hoje from "./pages/Hoje"
import Historico from "./pages/Historico"
import styled from "styled-components"


export default function App() {
  

  return (
    <SCApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/habitos" element={<Habitos/>}/>
          <Route path="/hoje" element={<Hoje/>}/>
          <Route path="/historico" element={<Historico/>}/>
        </Routes>
      </BrowserRouter>
    </SCApp>
  )
}

const SCApp = styled.div`
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
`

