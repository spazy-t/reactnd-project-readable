import React from 'react'
import { connect } from 'react-redux'
import { handlePostVote } from '../actions/posts'

const Votes = (props) => {
    const { postIdToShow, dispatch } = props
    //TODO: after key id fix in action remove hardcoded post id
    return(
        <div className='vote-widget'>
            <button onClick={() => dispatch(handlePostVote('8xf0y6ziyjabvozdd253nd', 'upVote'))}>+</button>
            <p>{props.postVoteNum}</p>
            <button onClick={() => dispatch(handlePostVote(postIdToShow, 'downVote'))}>-</button>
        </div>
    )
}

//TODO: determine if using for post or comment
//TODO: connect to server and state changes to vote of post / comment

function mapStateToProps({ posts, comments }, { id }) {
    //find relevant post from state and use to grab it's vote number
    const postIdToShow = Object.keys(posts).filter(post => posts[post].id === id)

    return {
        postVoteNum: posts[postIdToShow].voteScore,
        postIdToShow
    }
}

export default connect(mapStateToProps)(Votes)