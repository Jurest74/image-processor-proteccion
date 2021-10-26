import '../App.css';
import React from 'react'
import A4Sheet from '../component/A4-sheet.component';
import {useSelector} from 'react-redux'
import UploadImage from '../component/upload-image';

const PrincipalPage = (props) => {

    const store = useSelector(store => store);

        return(
            <div className="App full-window">
                <h3 style={{color: "white"}}>Image proccesor Protección S.A</h3>
                <hr style={{border: "0.3px solid white", display: "inline-block", width: "796px"}}></hr>
                <div style={{textAlign: "left", display: "inline-block", padding: "10px", width: "796px"}}>
                    <h6>Orientación: {store.state.orientation}</h6>
                    <h6>Ancho original: {store.state.originalHeight}px</h6>
                    <h6>Alto original: {store.state.originalWidth}px</h6>
                </div>
                <UploadImage />
                <A4Sheet />
            </div>
        )
}

export default PrincipalPage;