import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import QuienesSomos from './pages/QuienesSomos'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import Contacto from './pages/Contacto'
import './App.css'

function App() {
  return (
    <Router basename="/TP-7---Celulares">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="productos" element={<Productos />} />
          <Route path="productos/:idMarca" element={<Productos />} />
          <Route path="producto/:idCelular" element={<DetalleProducto />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
