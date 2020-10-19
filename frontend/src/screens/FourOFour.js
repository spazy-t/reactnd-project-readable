import React from 'react'

const FourOFour = (props) => {
    const { history } = props

    return(
        <div className='fof-container'>
            <h1>404</h1>
            <button onClick={() => history.goBack()}>Go Back</button>
        </div>
    )
}

export default FourOFour