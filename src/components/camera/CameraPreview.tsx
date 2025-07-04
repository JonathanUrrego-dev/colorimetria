import { useEffect, useRef } from "react"
import "./camera.style.css"

export const CameraPreview = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(()=> {
        const startCamera = async ()=> {
            try{
                const stream = await navigator.mediaDevices.getUserMedia({video: true});
                if(videoRef.current){
                    videoRef.current.srcObject = stream;
                }
            } catch (err: any){
                console.error("Algo salió mal al iniciar la camará. ", err)
            }
        }

        startCamera();

        return ()=> {
            if(videoRef.current && videoRef.current.srcObject){
                const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
                tracks.forEach((track) => track.stop());
            }
        }
    }, []);

    return(
        <div className="container-camera">
            <div className="oval-frame">
                <video 
                    ref={videoRef}
                    className="rounded-xl shadow-lg"
                    autoPlay
                    playsInline
                    muted
                    width={640}
                    height={480}
                ></video>
            </div>
        </div>
    )
}