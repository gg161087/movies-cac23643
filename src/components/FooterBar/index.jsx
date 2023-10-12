import { BarButton } from '../BarButton/index.jsx';

import './FooterBar.css'

export const FooterBar = ({buttons}) => {
    return (
        <div className="footerbar">
            <div className="footerbar__container">            
                <div className="footerbar__buttons">
                {
                    buttons.map((button) =>(
                        <BarButton id={button.id} key={button.id} text={button.text}></BarButton>
                    ))
                }    
                </div>
                <small>Todos los derechos reservados</small>
            </div>
        </div>
    )
}