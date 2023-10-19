import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { LandingPage } from '../Pages/LandingPage/index.jsx';

import './App.css'

function App() {    

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>          
            </Routes>                       
        </BrowserRouter>    
    )
}

export default App
