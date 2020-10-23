//TODO: set token in env file
const token = 'admin'

/**
 * helper methods to call server methods and return data to use for store state etc
 */

//grabs all the current categories from the server
const getCategories = async () => {
    const res = await fetch('http://localhost:3001/categories', { headers: { 'Authorization': token }})

    try {
        const data = await res.json()
        return data
    } catch(e) {
        console.log('error getting data', e)
    }
}

//grabs all posts from the server
const getPosts = async () => {
    const res = await fetch('http://localhost:3001/posts', { headers: { 'Authorization': token }})

    try {
        const data = await res.json()
        return data
    } catch(e) {
        console.log('error getting data', e)
    }
}

//comments only exist for posts so called only when looking at a post, gets comments for a post from server
const getComments = async (id) => {
    const res = await fetch(`http://localhost:3001/posts/${id}/comments`, { headers: { 'Authorization': token }})

    try {
        const data = await res.json()
        return data
    } catch(e) {
        console.log('error getting data', e)
    }
}

//https://stackoverflow.com/questions/11625519/how-to-access-the-request-body-when-posting-using-node-js-and-express
//sets relevant post, via url id, vote either up or down one determined by voteOption
const postPostVote = async (id, voteOption) => {
    const res = await fetch(`http://localhost:3001/posts/${id}`, {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(voteOption)
    })

    try {
        const data = await res.json()
        return data
    } catch(e) {
        console.log('error saving vote to post', e)
    }
}

//sets relevant comment, via url id, vote either up or down one determined by voteOption
const postCommentVote = async (commentId, voteOption) => {
    const res = await fetch(`http://localhost:3001/comments/${commentId}`, {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(voteOption)
    })

    try {
        const data = await res.json()
        return data
    } catch(e) {
        console.log('error saving vote to post', e)
    }
}

//adds new post to posts list in server via new post object containing it's details
const addNewPost = async (postDetails) => {
    const res = await fetch('http://localhost:3001/posts', {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postDetails)
    })

    try {
        const data = await res.json()
        return data
    } catch(e) {
        console.log('error saving new post', e)
    }
}

//editPost method for the server PUT /posts/:id
const editPost = async (postDetails) => {
    const res = await fetch(`http://localhost:3001/posts/${postDetails.id}`, {
        method: 'PUT',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postDetails)
    })

    try {
        const data = await res.json()
        return data
    } catch(e) {
        console.log('error editing post', e)
    }
}

//adds new comment to a post in server via new comment object containing it's details
const addNewComment = async (commentDetails) => {
    const res = await fetch('http://localhost:3001/comments', {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(commentDetails)
    })

    try {
        const data = await res.json()
        return data
    } catch(e) {
        console.log('error saving new post', e)
    }
}

//edits a comment on the server and sends back updated data
const editComment = async (commentDetails) => {
    const res = await fetch(`http://localhost:3001/comments/${commentDetails.id}`, {
        method: 'PUT',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(commentDetails)
    })

    try {
        const data = await res.json()
        return data
    } catch(e) {
        console.log('error editing comment', e)
    }
}

//change comment deleted flag to true on a comment via id in url params
const deleteComment = async (commentId) => {
    const res = await fetch(`http://localhost:3001/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    })

    try {
        const data = await res.json()
        return data
    } catch(e) {
        console.log('error deleting comment', e)
    }
}

//deletes post from db via it's id passed in
const deletePost = async (postId) => {
    const res = await fetch(`http://localhost:3001/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        }
    })

    try {
        const data = await res.json()
        return data
    } catch(e) {
        console.log('error deleting post', e)
    }
}

//Taken from Udacity would you rather project '_DATA.js' (14/10/2020)
//generate uniqu id
const generateUID = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export {
    getCategories,
    getPosts,
    getComments,
    postPostVote,
    postCommentVote,
    addNewPost,
    editPost,
    deletePost,
    addNewComment,
    editComment,
    deleteComment,
    generateUID
}