import {connect} from "react-redux";


function Likes(props){
    console.log('render Likes>',props)
    return(
        <div>
            <button onClick={props.onIncrementLikes}> like -> { props.likes} </button>
            <button>Dislike </button>
        </div>
    )
}

function mapStateToProps(state){
    console.log('mapStateToProps > ',state)

    return {
        likes: state.likes
    }
}

function mapDispatchToProps(dispatch){
    return {
        onIncrementLikes: () => {
            console.log('click')

            let action = {
                type: 'INCREMENT'
            };
            return dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)