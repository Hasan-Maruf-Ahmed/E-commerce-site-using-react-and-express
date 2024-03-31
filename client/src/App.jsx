import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Category } from './pages/Category'
import { Brands } from './pages/Brands'
import { Trending } from './pages/Trending'
import { Product } from './pages/Product'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<Category />} />
        <Route path='/' element={<Brands />} />
        <Route path='/' element={<Trending/>} />
        <Route path='/' element={<Product/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
