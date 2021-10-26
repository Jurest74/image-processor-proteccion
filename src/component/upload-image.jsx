import '../App.css';
import {useDispatch } from 'react-redux'
import {newImageUploaded} from '../redux/actions'

const UploadImage = (props) => {

    const dispatch = useDispatch()

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const img = new Image();
            const src = URL.createObjectURL(event.target.files[0]);

            img.onload = () => {
            const { height, width } = img;
            let orientation = getOrientation(height, width);
            dispatch(newImageUploaded(src, 'loaded', height, width, orientation));
            };

            img.src = src;
            //this.setState({srcImage: src, status: 'loaded'});
        }
    }

    const getOrientation = (height, width) => {
        if(width > height){
            return 'horizontal'
        }else{
            return 'vertical'
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