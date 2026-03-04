import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Guess from './pages/guess'

function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Guess />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
