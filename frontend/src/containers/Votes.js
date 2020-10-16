import React from 'react'
import { connect } from 'react-redux'
import { handlePostVote } from '../actions/posts'
import { handleCommentVote } from '../actions/comments'
import { useLocation } from 'react-router-dom'

const Votes = (props) => {
    const { id, dispatch, postVoteNum, commentTrue } = props
    //determine if the user is on a post detail page if so boolean used to add a css class
    const detailsScreen = useLocation().pathname !== '/'
    //based on boolean sent in from parent component, determine which action to use to change vote for comment or post
    const voteAction = !commentTrue ? handlePostVote : handleCommentVote

    //https://programmingwithmosh.com/react/multiple-css-classes-react/ (15/10/2020)
    return(
        <div className={ `vote-widget ${detailsScreen ? 'details-vote' : ''}` }>
            <button onClick={() => dispatch(voteAction(id, 'upVote'))}>+</button>
            <p>{postVoteNum}</p>
            <button onClick={() => dispatch(voteAction(id, 'downVote'))}>-</button>
        </div>
    )
}

//uses boolean to determine if the vote component is for a comment or post
//if a comment it grabs the votescore from the relevant comment with it's passed in id, same for post
function mapStateToProps({ posts, comments }, { id, commentTrue = false }) {
    return {
        postVoteNum: !commentTrue
            ? posts[id].voteScore
            : comments[id].voteScore,
        id
    }
}

export default connect(mapStateToProps)(Votes)