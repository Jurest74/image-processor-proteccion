import '../App.css';
import {useState} from 'react'
import A4Sheet from '../component/A4-sheet.component.jsx';
import {useSelector} from 'react-redux'
import UploadImage from '../component/upload-image.jsx';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrincipalPage = (props) => {

    const [current, setCurrent] = useState({adjust : false});

    const globalStore = useSelector(store => store);

    const {originalHeight, originalWidth, status, orientation, ratio, image} = globalStore.state;

    const AdjustImage = (fromButton=true, button = '') => {
        if(image !== null && fromButton){
            setCurrent({adjust: !current.adjust})
        }else{
            setCurrent({adjust: false})
        }
        console.log("button", button);
        if(button === 'adjust'){
            toast.success('La imagen ha sido ajustada en la hoja de tamaño A4!');
        }
    }

        return(
            <div style={{color: "white"}} className="App full-window">
                <h3>Image proccesor Protección S.A</h3>
                <hr style={{border: "0.3px solid white", width: "55%"}}></hr>
                <UploadImage restoreImagePosition={AdjustImage}/>
                <div className="row" style={{textAlign: "left", margin: "auto", marginBottom: "-25px", marginTop: "10px" ,padding: "10px", width: "58%"}}>
                    <div style={{float: "left"}} className="col-md-4">
                        <h6>Orientación: {orientation}</h6>
                        <h6>Ancho original: {originalWidth}px</h6>
                        <h6>Alto original: {originalHeight}px</h6>
                    </div>

                    <div style={{float: "left"}} className="col-md-4">
                        <h6>Ratio: {ratio}</h6>
                    </div>

                    <div style={{float: "left", width: "100%"}} className="col-md-4">
                        {!current.adjust ?  <button  onClick={()=>AdjustImage(true, 'adjust')} disabled={status !== 'loaded'} type="button" className="btn btn-primary btn-block">Ajustar imagen</button> :null}
                        {current.adjust ?  <button onClick={()=>AdjustImage(true, 'restore')} disabled={status !== 'loaded'} type="button" className="btn btn-primary btn-block">Reestablecer imagen</button> :null}
                    </div>
                </div>
                <A4Sheet AdjustImage={current.adjust}/>
            </div>
        )
}

export default PrincipalPage;