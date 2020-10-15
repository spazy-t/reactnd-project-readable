import React from 'react'
import { connect } from 'react-redux'
import { handlePostVote } from '../actions/posts'
import { useLocation } from 'react-router-dom'

const Votes = (props) => {
    const { id, dispatch } = props
    //determine if the user is on a post detail page if so boolean used to add a css class
    const detailsScreen = useLocation().pathname !== '/'

    //https://programmingwithmosh.com/react/multiple-css-classes-react/ (15/10/2020)
    return(
        <div className={ `vote-widget ${detailsScreen ? 'details-vote' : ''}` }>
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