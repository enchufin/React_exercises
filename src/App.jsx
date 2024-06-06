import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Exercises from "./paginas/Exsercises";


function App() {

  return (
    <BrowserRouter basename="/app">
      <Routes>
        <Route path="/"  element={<Home />}/> {/* 👈 Renders at /app/ */}
        <Route path="ejercicios" element={<Exercises />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
