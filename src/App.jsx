import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Error from './Pages/Error/Error'
import Lodgement from './Pages/Lodgement/Lodgement'

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/About' element={<About />}/>
                <Route path= '/Lodgement/' element={<Lodgement />}/>
                <Route path='/*' element={<Error />}/>
            </Routes>
        </div>
    );
}

export default App;