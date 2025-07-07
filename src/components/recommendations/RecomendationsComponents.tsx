import "./recommendations.css";

export const RecommendationsComponent = ({ onStart, fadeOut }: {onStart: ()=> void, fadeOut: boolean}) => {
    return(
        <div className="background-wrapper">
            <div className={`container-recommendations ${fadeOut ? 'fadeOut' : 'fade-in'}`}>
                <h2>📸 Antes de comenzar:</h2>
                <ul>
                    <li>🪞 Siéntate frente a un <strong>fondo claro y neutro</strong> (blanco, gris claro o beige).</li>
                    <li>💡 Asegúrate de tener <strong>buena luz natural</strong>, preferiblemente de frente.</li>
                    <li>🚫 <strong>No uses maquillaje</strong>, gafas oscuras o filtros.</li>
                    <li>👕 Usa una camiseta <strong>sin estampados y de color neutro</strong> (blanco, gris o negro).</li>
                    <li>📱 Coloca tu rostro centrado y visible en la cámara.</li>
                </ul>
                <p>
                 Este proceso es rápido y sencillo. Solo sigue las indicaciones y deja que la cámara haga su trabajo. 😊
                </p>
                <button onClick={onStart} className='start-camera'>
                 ¡Ir al estudio!
                </button>
            </div>
        </div>
    )
}