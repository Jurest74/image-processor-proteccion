import '../App.css';
import React from 'react'
import A4Sheet from '../component/A4-sheet.component';
import { useSelector, useDispatch } from 'react-redux'
import UploadImage from '../component/upload-image';

const PrincipalPage = (props) => {

    const store = useSelector(store => store);

        return(
            <div className="App full-window">
                <h1>Principal page</h1>
                <UploadImage />
                <A4Sheet />
            </div>
        )

}

export default PrincipalPage;