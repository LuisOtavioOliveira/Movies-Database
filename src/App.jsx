import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <div>
      <Navbar></Navbar>
      <div className='outlet'>
        <Outlet></Outlet>
      </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
