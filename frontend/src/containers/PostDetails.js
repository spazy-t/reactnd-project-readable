import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const PostDetails = () => {
    return(
        <div></div>
    )
}

function mapStateToProps({ posts }, { postId }) {
    return {
        currentPost: posts[postId]
    }
}

export default connect(mapStateToProps)(PostDetails)