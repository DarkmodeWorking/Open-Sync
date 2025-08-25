import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './components/Home'
import Docs from './pages/Docs'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="docs" element={<Docs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
