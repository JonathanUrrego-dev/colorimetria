import "./home.css";

export const Home = ({ nextContainerInfo }: { nextContainerInfo: () => void }) => {
  return (
    <div className="diagonal-container">
      <div className="left-panel">
        <div className="container-text">
            <h1>¡Bienvenido a tu estudio de colorimetría!</h1>
            <p>Vamos a descubrir qué colores resaltan mejor tu rostro.</p>
        </div>
        <button 
         onClick={nextContainerInfo}
         className="start-button"
         >
          ¡Empezar Ahora!
        </button>
      </div>
      <div className="right-panel">
        <img
          src="/public/background-colorimetria.webp"
          alt="Colorimetría"
          className="image"
        />
      </div>
    </div>
  );
};
