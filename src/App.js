import { Route, Routes } from 'react-router-dom'
import Index from "./pages/Index/Index";
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </>
  );
}

export default App;