
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import RecursosPage from './pages/RecursosPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import TriagemPage from './pages/TriagemPage.jsx'

export default function App(){
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recursos" element={<RecursosPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/triagem" element={<TriagemPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
