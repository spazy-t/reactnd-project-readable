//TODO: set token in env file

//grabs all the current categories from the server
const getCategories = async () => {
    const res = await fetch('http://localhost:3001/categories', { headers: { 'Authorization': 'timmy' }})

    try {
        const data = await res.json()
        return data
    } catch(e) {
        console.log('error getting data', e)
    }
}

//grabs all posts from the server
const getPosts = async () => {
    const res = await fetch('http://localhost:3001/posts', { headers: { 'Authorization': 'timmy' }})

    try {
        const data = await res.json()
        return data
    } catch(e) {
        console.log('error getting data', e)
    }
}

//comments only exist for posts so called only when looking at a post, gets comments for a post from server
const getComments = async (id) => {
    const res = await fetch(`http://localhost:3001/posts/${id}/comments`, { headers: { 'Authorization': 'timmy' }})

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
            'Authorization': 'timmy',
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
            'Authorization': 'timmy',
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

export {
    getCategories,
    getPosts,
    getComments,
    postPostVote,
    addNewPost
}