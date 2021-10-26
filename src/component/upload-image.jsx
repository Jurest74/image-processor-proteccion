import '../App.css';
import { useSelector, useDispatch } from 'react-redux'
import {newImageUploaded} from '../redux/actions'

const UploadImage = (props) => {

    const dispatch = useDispatch()

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const img = new Image();
            const src = URL.createObjectURL(event.target.files[0]);

            img.onload = () => {
            //const { height, width } = img;
            img.src = src;
            };

            //this.setState({srcImage: src, status: 'loaded'});
            img.src = src;

            dispatch(newImageUploaded(src, 'loaded'));
        }
    }

    return (
            <div style={{width: "796px"}} className="custom-file">
                <input type="file" className="custom-file-input" id="customFile" onChange={onImageChange}/>
                <label className="custom-file-label" for="customFile">Carga una imagen</label>
            </div>
    )
}

export default UploadImage;