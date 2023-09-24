import './Heder.css'
import backgroundVideo from '../../assets/video/hala.mp4'
function Heder() {
  return (
    <>
    <div className="firstimg">
    <video autoPlay muted loop>
  <source src={backgroundVideo} type="video/mp4"/>
    </video>
   </div>
  
    </>
  );
}

export default Heder