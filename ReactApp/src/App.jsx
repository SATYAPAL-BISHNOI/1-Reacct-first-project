import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './style/App.scss'
import Header from './components/Header'
import Home from './components/Home'
import Foot from './components/Footer'
import Contect from './components/Contect'
import Team from './components/Team'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contect' element={<Contect/>}/>
        <Route path='/team' element={<Team/>} />
      </Routes>
      <Foot/>
    </Router>
  )
}

export default App