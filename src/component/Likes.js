import {connect} from "react-redux";
import {decrementLikesAction, incrementLikesAction} from "../redux/actions";


function Likes(props) {
    console.log('render Likes>', props)
    return (
        <div>
            <h3>H3 -> {props.likes}</h3>
            <button onClick={props.onIncrementLikes}> like -> {props.likes} </button>
            <button onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )
}

function mapStateToProps(state) {
    const {likesReducer} = state
    return {
        likes: likesReducer.likes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => {
            return dispatch(incrementLikesAction())
        },
        onDecrementLikes: () => {
            return  dispatch(decrementLikesAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)