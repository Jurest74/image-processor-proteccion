import '../App.css';
import { useSelector} from 'react-redux'

const A4Sheet = (props) => {
    const store = useSelector(store => store);
    return (
        <div className="A4-sheet">
                <img style={{position: 'absolute', left: "5%", top: "20%"}} src={store.state.image} className="rounded" alt="" />
        </div>
    )
}

export default A4Sheet;