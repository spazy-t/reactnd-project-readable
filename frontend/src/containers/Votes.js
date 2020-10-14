import React from 'react'
import { connect } from 'react-redux'
import { handlePostVote } from '../actions/posts'

const Votes = (props) => {
    const { id, dispatch } = props

    return(
        <div className='vote-widget'>
            <button onClick={() => dispatch(handlePostVote(id, 'upVote'))}>+</button>
            <p>{props.postVoteNum}</p>
            <button onClick={() => dispatch(handlePostVote(id, 'downVote'))}>-</button>
        </div>
    )
}

//TODO: determine if using for posts or comment
//TODO: connect to server and state changes to vote of post / comment

function mapStateToProps({ posts, comments }, { id }) {
    return {
        postVoteNum: posts[id].voteScore,
        id
    }
}

export default connect(mapStateToProps)(Votes)