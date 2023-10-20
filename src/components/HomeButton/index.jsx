import { Link } from 'react-router-dom';

import './HomeButton.css';

export const HomeButton = () => {
   
    return (
        <Link to={'/'} className='bar_button'>Volver</Link>   
    )
}