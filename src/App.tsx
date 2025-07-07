import { useState } from 'react'
import { CameraPreview } from './components/camera/CameraPreview'
import { ColorsContainer } from './components/colors/ColorsContainer'
import { Home } from './components/home/Home';
import { RecommendationsComponent } from './components/recommendations/RecomendationsComponents';

function App() {
  const [ start, setStart] = useState<boolean>(false);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const [ nextStep, setNextStep] = useState<boolean>(false);

  const handleStartCamera = () => {
    setFadeOut(true);
    setTimeout(()=> {
      setStart(true);
    }, 100);
  }; 

  const handleStart = () => {
      setNextStep(true);
  }

  return (
    <div className='app'>
      { !nextStep 
      ? ( <Home nextContainerInfo={handleStart}/> ) 
      : ( !start 
          ? ( <RecommendationsComponent onStart ={handleStartCamera} fadeOut={fadeOut} /> )
          :( <>
              <div className='container-camera'>
                <CameraPreview/>
              </div>
              <div className='container-colors'>
                <ColorsContainer/>
              </div>
             </>
            )
        )  
      }
    </div>
  )
}

export default App
