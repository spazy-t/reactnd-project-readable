import React from 'react'
import { connect } from 'react-redux'

const Votes = (props) => {
    return(
        <div className='vote-widget'>
            <button>+</button>
            <p>{props.postVoteNum}</p>
            <button>-</button>
        </div>
    )
}

//TODO: determine if using for post or comment
//TODO: connect to server and state changes to vote of post / comment

function mapStateToProps({ posts, comments }, { id }) {
    //find relevant post from state and use to grab it's vote number
    const postIdToShow = Object.keys(posts).filter(post => posts[post].id === id)

    return {
        postVoteNum: posts[postIdToShow].voteScore
    }
}

export default connect(mapStateToProps)(Votes)