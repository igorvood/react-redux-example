

function Title(props){

    const handleChange = (e) =>{
        console.log('handleChange > ', e.target.value)
    }

    return (
        <div className='card-title'>
            <div className='card-title-top'>
                <input type='text' onChange={handleChange}/>
            </div>

        </div>
    )
}

export default Title