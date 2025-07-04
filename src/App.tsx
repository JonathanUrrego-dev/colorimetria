import { useState } from 'react'
import { CameraPreview } from './components/camera/CameraPreview'
import { ColorsContainer } from './components/colors/ColorsContainer'
import { Home } from './components/home/Home';

function App() {
  const [ start, setStart] = useState<boolean>(false);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  const handleStart = () => {
    setFadeOut(true);
    setTimeout(()=> {
      setStart(true);
    }, 500);
  }; 

  return (
    <div className='app'>
      {!start ? (
        <Home onStart ={handleStart} fadeOut={fadeOut} />
      ):(
        <>
          <div className='container-camera'>
            <CameraPreview/>
          </div>
          <div className='container-colors'>
            <ColorsContainer/>
          </div>
        </>
      )}
    </div>
  )
}

export default App
