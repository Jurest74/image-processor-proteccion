import '../App.css'
import { useSelector} from 'react-redux'
import {useEffect, useState} from 'react'

const A4Sheet = (props) => {


    const [current, setCurrent] = useState({state: {
    backgroundColor: "white",
    height: "1123px",
    width: "796px",
    display: "inline-block",
    margin: "3%"}});

    const store = useSelector(store => store);

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
                <img style={{position: 'absolute', left: "5%", top: "30%"}} src={store.state.image} className="rounded" alt="" />
        </div>
    )
}

export default A4Sheet;