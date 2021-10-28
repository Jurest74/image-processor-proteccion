import '../App.css';
import {useState} from 'react'
import A4Sheet from '../component/A4-sheet.component';
import {useSelector} from 'react-redux'
import UploadImage from '../component/upload-image';

const PrincipalPage = (props) => {

    const [current, setCurrent] = useState({adjust : false});
    
    const globalStore = useSelector(store => store);

    const {originalHeight, originalWidth, status, orientation, ratio} = globalStore.state;

    const AdjustImage = () => {
        setCurrent({adjust: !current.adjust})
    }

        return(
            <div style={{color: "white"}} className="App full-window">
                <h3>Image proccesor Protección S.A</h3>
                <hr style={{border: "0.3px solid white", width: "796px"}}></hr>
                <UploadImage />
                <div className="row" style={{textAlign: "left", margin: "auto", marginBottom: "-25px", marginTop: "10px" ,padding: "10px", width: "796px"}}>
                    <div style={{float: "left"}} className="col-md-4">
                        <h6>Orientación: {orientation}</h6>
                        <h6>Ancho original: {originalWidth}px</h6>
                        <h6>Alto original: {originalHeight}px</h6>
                    </div>

                    <div style={{float: "left"}} className="col-md-4">
                        <h6>Ratio: {ratio}</h6>
                    </div>

                    <div style={{float: "left"}} className="col-md-4">
                        <button onClick={()=>AdjustImage()} disabled={status !== 'loaded'} type="button" class="btn btn-primary btn-block">Ajustar imagen</button>
                    </div>
                </div>
                <A4Sheet AdjustImage={current.adjust}/>
            </div>
        )
}

export default PrincipalPage;