import {connect} from "react-redux";

function Likes(props){
    return(
        <div>
            <button>like -> { props.likes} </button>
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

export default connect(mapStateToProps)(Likes)