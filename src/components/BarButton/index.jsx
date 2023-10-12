import './BarButton.css';

export const BarButton = ({id, text}) => {
    return (
        <button className='bar_button' id={id}>{text}</button>
    )
}