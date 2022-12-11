import {connect} from "react-redux";
import {DECREMENT, INCREMENT} from "../redux/types";
import {likesReducer} from "../redux/likesRedicer";


function Likes(props){
    console.log('render Likes>', props)
    return(
        <div>
            <h3>H3 -> {props.likes}</h3>
            <button onClick={props.onIncrementLikes}> like -> { props.likes} </button>
            <button onClick={props.onDecrementLikes}>Dislike </button>
        </div>
    )
}

function mapStateToProps(state){
    console.log('mapStateToProps > ',state)
    const { likesReducer } = state
    return {
        likes: likesReducer.likes
    }
}

function mapDispatchToProps(dispatch){
    return {
        onIncrementLikes: () => {
            let action = {
                type: INCREMENT
            };
            return dispatch(action)
        },
        onDecrementLikes: () => {
            console.log('click onDecrementLikes')

            let action = {
                type: DECREMENT
            };
            return dispatch(action)
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)