import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LandingPage } from '../Pages/LandingPage/index.jsx';
import { DetailMovie } from '../Pages/DetailMovie/index.jsx';

import './App.css'

function App() {    

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/movie/:id' element={<DetailMovie></DetailMovie>}></Route>          
            </Routes>                       
        </BrowserRouter>    
    )
}

export default App
