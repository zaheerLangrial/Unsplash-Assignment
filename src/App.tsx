import {Routes , Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import MyCollection from './Pages/My Collection/MyCollection'

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/mycollection' element={<MyCollection/>} />
    </Routes>
      
    </>
  )
}

export default App
