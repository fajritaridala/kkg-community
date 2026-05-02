import { Routes, Route } from 'react-router-dom'
import { Documentation, Home, Membership } from './pages'
import { Footer, Navbar } from './components'
import useMedia from './hooks/useMedia'

useMedia.getState().fetchActivities()

export default function App() {
  return (
    <div className="font-jakarta-plus">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/activities" element={<Documentation />} />
      </Routes>

      <Footer />
    </div>
  )
}
