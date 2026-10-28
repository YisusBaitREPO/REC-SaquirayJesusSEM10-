import { useState } from 'react'
import './App.css'
import Header from './components/HeaderPagina'
import Nav from './components/NavPagina'
import Main from './components/MainPagina'
import Aside from './Components/AsidePagina'
import Footer from './components/FooterPagina'
import Panel from './components/PanelPagina'
import Tarjeta from './components/TarjetaPagina'

function App() {
  const [count, setCount] = useState(0)

  const titulo="Biblioteca Digital Lectura Viva"
  const subtitulo='"Descubre nuevas ideas a través de la lectura"'


  return (
    <>
          <Header tituloo ={titulo} sub = {subtitulo}></Header>
          <Nav></Nav>
          
          <div className='contenedor'>
            <Main>
            </Main>
            <Aside></Aside>
          </div>
          <Footer /* anho = {anio} prog = {programa}*/></Footer>
          <Panel encabezado="Recomendación de la semana">
              
            <p>Lee unos minutos cada día y registra tus ideas favoritas.</p>
            
            </Panel>
          <Tarjeta encabezado="Próximas actividades">
            <ul>
                <li>Club de lectura</li>
                <li>Taller de escritura creativa</li>
            </ul>
          </Tarjeta>
    </>
  )
}

export default App
