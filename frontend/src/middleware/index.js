import thunk from 'redux-thunk'
import logger from './logger'
import { applyMiddleware } from 'redux'

//combine middleware to pass through to store object
export default applyMiddleware(
    thunk,
    logger
)