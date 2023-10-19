import { HomeButton } from '../HomeButton/index.jsx';
import { BarButton } from '../BarButton/index.jsx';

import './FooterBar.css'

export const FooterBar = ({ handleNextPage, handlePreviousPage, handleHome}) => {
    if (handleHome) {
        return (
            <div className="footerbar">
                <div className="footerbar__container">            
                    <div className="footerbar__buttons">
                        <HomeButton></HomeButton>                     
                    </div>
                    <small className="footerbar__copyright">Todos los derechos reservados ©</small>
                </div>
            </div>
        )
    } else {
        
        return (
            <div className="footerbar">
                <div className="footerbar__container">            
                    <div className="footerbar__buttons">
                        <BarButton                             
                            handleNextPage={handleNextPage}       
                            handlePreviousPage={handlePreviousPage}>                
                        </BarButton>                     
                    </div>
                    <small className="footerbar__copyright">Todos los derechos reservados ©</small>
                </div>
            </div>
        )
    }
}