# Udacity REACT-Redux Readable extra-curricular
 
## Table of contents
 
* [Overview](#overview)
* [Instructions](#instructions)
* [Resources](#resources)
 
## Overview
 
Readable is a React / Redux app that was built as an extra project from the React Nanodegree with Udacity. It's a anonymous post and comment
app where a user can add posts to a category, comments to a post and vote either up or down on a post and comment. In order to store the
data it uses a combination of a node (express) server and Redux store to persist the data. To do this it incorporates thunk action creators
and async helper methods.
 
The root / home page displays the available categories which contain the relevant posts. Each post is represented in a card which displays the
number of comments, votes, author and title. The user can click the category title to display just that category or click the post to show the
detailed post screen. Each post and comment has its own vote score display, edit and delete button. The edit buttons root through to or display
inline a form populated by the relevant data. These forms are also used to add a new post or comment where applicable.
 
The app also uses responsive design and displays correctly on all major screen sizes. I have incorporated the use of 'Styled components' as it
allows the use of nested styles and passing of props for more dynamic styles.
 
 
## Instructions
 
* Once the files have been copied over use `yarn add` or `npm i` to install all dependencies.
* To run the project, firstly, in one terminal: `cd api-server` and then `node server` to start the node server, allowing data retrieval.
* Then in another terminal, `cd frontend` and then `yarn start` or `npm start` to run the dev server and show in the browser (localhost:3000).
* Run `yarn build` or `npm build` to produce a distribution folder of minified files.

 
## Resources

[styled components](https://styled-components.com/docs/basics#passed-props) - way to pass props to a styled component (20/10/2020)

[stackoverflow](https://stackoverflow.com/questions/1069666/sorting-object-property-by-values) - how to sort an array of objects (21/10/2020)

[Udacity Project, would you rather](https://github.com/spazy-t/udacity-react-redux-game/blob/master/src/utils/_DATA.js) - generate a unique id (14/10/2020)

[react training](https://reacttraining.com/blog/when-to-use-functions-in-hooks-dependency-array/) - Using hook dependencies (24/10/2020)

[stack-overflow](https://stackoverflow.com/questions/59813926/usestate-to-update-multiple-values-in-react) - setting state hook value that has multiple values in it (24/10/2020)

[MDN](https://developer.mozilla.org/en-US/) - for general definitions and use of syntax

[stack-overflow](https://stackoverflow.com/) - for general help and use of syntax
