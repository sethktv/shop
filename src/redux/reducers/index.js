import filters from './filters'
import content from './content'
import cart from './cart'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
    filters,
    content,
    cart
})
export default rootReducer