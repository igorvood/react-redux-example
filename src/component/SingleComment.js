

function SingleComment(props){
    console.log('Comments > ',props)

    return (
            <form className='comment-item'>
                <div className='comments-item-delete'>&times;</div>
                <input type='text'/>
                <input type='submit' hidden/>
            </form>
    )

}

export default SingleComment