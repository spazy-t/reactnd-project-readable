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
const getComments = async () => {
    const res = await fetch('http://localhost:3001/posts/:id/comments', { headers: { 'Authorization': 'timmy' }})

    try {
        const data = await res.json()
        return data
    } catch(e) {
        console.log('error getting data', e)
    }
}

export {
    getCategories,
    getPosts,
    getComments
}