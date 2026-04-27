import { Routes, Route } from 'react-router-dom'
import Home from './pages'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Membership from './pages/Membership'

export default function App() {
  return (
    <div className="font-jakarta-plus">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>

      <Footer />
    </div>
  )
}
