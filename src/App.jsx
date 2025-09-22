import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './component/Home'
import Store from './component/Store'
import About from './component/About'
import Navbar from './shared/Navbar'
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
function App() {
  return (
    <>
      <ShoppingCartProvider>

        <Navbar />
        <Container className='mb-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>

    </>
  )
}

export default App;




