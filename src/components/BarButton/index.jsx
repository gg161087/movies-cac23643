import './BarButton.css';

export const BarButton = ({ handleNextPage, handlePreviousPage }) => {
    return (
        <>
            <button className='bar_button' onClick={handlePreviousPage}>Anterior</button>
            <button className='bar_button' onClick={handleNextPage}>Siguiente</button>
        </>  
    )
}