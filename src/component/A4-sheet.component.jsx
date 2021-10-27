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

    const store = useSelector(store => store);
        console.log("store", store);

    if(AdjustImage && store.state.status === 'loaded'){
        console.log("ajustar");

        if(store.state.originalHeight > 1123 || store.state.originalWidth > 796){
            if(store.state.orientation === 'vertical'){
                console.log("vertical", (store.state.originalHeight / store.state.originalWidth) * 796);
                imageStyle = {
                    maxHeight: "1123px",
                    MaxWidth: "796px",
                    height: (store.state.originalHeight / store.state.originalWidth) * 796,
                    margin: 0,
                    padding: 0,
                    float: "left"
                };
            }else{
                console.log("horizontal", (store.state.originalHeight / store.state.originalWidth) * 1123);
                let newHeight = (store.state.originalHeight / store.state.originalWidth) * 1123;
                if(newHeight > 796){
                    console.log("es mayor");
                    imageStyle = {
                        width: (796 * store.state.originalWidth) / store.state.originalHeight,
                        margin: 0,
                        padding: 0,
                        float: "left"
                    };
                }else{
                    imageStyle = {
                        height: (store.state.originalHeight / store.state.originalWidth) * 1123,
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

        if(store.state.orientation === 'vertical'){
            A4Style.height = "1123px";
            A4Style.width = "796px";
        }else{
            A4Style.height = "796px";
            A4Style.width = "1123px";
        }

        setCurrent({state: A4Style});
    }, [store.state.orientation]);

    return (
        <div style={current.state}>
                <img style={imageStyle} src={store.state.image} className="rounded" alt="" />
        </div>
    )
}

export default A4Sheet;