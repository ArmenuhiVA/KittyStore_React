
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header'
// import { About } from './Components/About'
import { Boxes } from './Components/Boxes'
import { Home } from './Components/Home'
import { Clothes } from './Components/Clothes'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/aboutCat' element={<Header />} /> */}
        <Route path='/boxes' element={<Boxes />} />
        <Route path='/clothes' element={<Clothes />} />
      </Routes>
    </>
  )
}

export default App
