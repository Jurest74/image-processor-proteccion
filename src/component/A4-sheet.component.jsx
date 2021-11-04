import '../App.css'
import { useSelector} from 'react-redux'
import {useEffect, useState} from 'react'

const A4Sheet = (props) => {

    let {AdjustImage} = props;

    let imageStyle = {
        position: 'absolute', left: "5%", top: "30%"
    }

    const [current, setCurrent] = useState({state: {
    backgroundColor: "white",
    height: "1123px",
    width: "796px",
    display: "inline-block",
    margin: "3%"}});

    const globalStore = useSelector(store => store);

    const {originalHeight, originalWidth, status, orientation, image} = globalStore.state;

    if(AdjustImage && status === 'loaded'){

        if(originalHeight > 1123 || originalWidth > 796){
            if(orientation === 'vertical'){
                imageStyle = {
                    maxHeight: "1123px",
                    MaxWidth: "796px",
                    height: (originalHeight / originalWidth) * 796,
                    margin: 0,
                    padding: 0,
                    float: "left"
                };
            }else{
                let newHeight = (originalHeight / originalWidth) * 1123;
                if(newHeight > 796){
                    imageStyle = {
                        width: (796 * originalWidth) / originalHeight,
                        margin: 0,
                        padding: 0,
                        float: "left"
                    };
                }else{
                    imageStyle = {
                        height: (originalHeight / originalWidth) * 1123,
                        margin: 0,
                        padding: 0,
                        float: "left"
                    };
                }
            }

        }else{
            imageStyle = {
                margin: 0,
                padding: 0,
                float: "left"
            };
        }
    }

    useEffect(() => {
        let A4Style = {
            backgroundColor: "white",
            height: "1123px",
            width: "796px",
            display: "inline-block",
            margin: "3%"
        }

        if(orientation === 'vertical'){
            A4Style.height = "1123px";
            A4Style.width = "796px";
        }else{
            A4Style.height = "796px";
            A4Style.width = "1123px";
        }

        setCurrent({state: A4Style});
    }, [orientation]);

    return (
        <div style={current.state}>
                <img style={imageStyle} src={image} alt="" />
        </div>
    )
}

export default A4Sheet;