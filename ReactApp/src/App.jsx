import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './style/App.scss'
import Header from './components/Header'
import Home from './components/Home'
import Foot from './components/Footer'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Foot/>
    </Router>
  )
}

export default App