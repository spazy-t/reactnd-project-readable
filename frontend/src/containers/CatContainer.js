import React, { useState } from 'react'
import { connect } from 'react-redux'
import PostsCard from './PostsCard'
import { withRouter, Link, useParams } from 'react-router-dom'
import FourOFour from '../screens/FourOFour'
import { StyledCategory } from '../styles/main'

const CatContainer =  (props) => {
    let orderedPosts= []
    const { id, postsForCat, allPosts, history, categories } = props
    //grabs parameter on url if there, if so then we are in individual category screen
    const { category }  = useParams()
    //local state to determine posts sort order
    const [sortOrder, setSort] = useState('voteScore')

    //https://stackoverflow.com/questions/1069666/sorting-object-property-by-values (21/10/2020)
    //determine the sort order of the posts via local state obj
    const orderPosts = () => {
        orderedPosts = postsForCat.sort((a, b) => {
            return allPosts[b][sortOrder] - allPosts[a][sortOrder]
        })
    }

    orderPosts()

    //if not on root screen and we have gotten categories from store but url points to unknown category, show 404
    if(category !== undefined && Object.keys(categories).length !== 0 && categories[category] === undefined) {
        return <FourOFour />
    }

    //determine if we are on the individual category view or main list view
    //if individual view disable the link
    return(
        <StyledCategory>
            {category !== id
                ? <Link to={`/${id}`}>
                    <h2>{id}</h2>
                </Link>
                : <h2>{id}</h2>
            }
            <select onChange={(evt) => setSort(evt.target.value)}>
                <option value='voteScore'>Order by Score</option>
                <option value='timestamp'>Order by Date</option>
            </select>
            <section>
                {orderedPosts.length !== 0
                    ? orderedPosts.map(post => (
                        <PostsCard key={ post } id={ post } />
                    ))
                    : `No posts currently!`
                }
            </section>
            <button onClick={() => history.push(`/newPost/${id}`)}>Add Post</button>
        </StyledCategory>
    )
}

//filters out the posts that have the same category as for this container, then grabs it's id to pass to PostCard component
function mapStateToProps({ posts, categories }, { id }) {
    return {
        categories: categories,
        postsForCat: Object.keys(posts).filter(post => posts[post].category === id)
            .map(catPost => (
                posts[catPost].id
            )),
        allPosts: posts
    }
}

export default withRouter(connect(mapStateToProps)(CatContainer))