import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePages } from './pages/HomePages'
import { PokedexPage } from './pages/PokedexPage'
import { PokeinfoPage } from './pages/PokeinfoPage'
import { ProtectedRoutes } from './pages/ProtectedRoutes'

function App() {



  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route element={<ProtectedRoutes/>} >
          <Route path='/pokedex' element={<PokedexPage />} />
          <Route path='/pokedex/:id' element={<PokeinfoPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
