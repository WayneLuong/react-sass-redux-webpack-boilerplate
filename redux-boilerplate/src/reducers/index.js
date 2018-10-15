/* ./reducers/index.js */

import {combineReducers} from 'redux'
import contactReducer from './contactReducer'

export default combineReducers({
    contacts:contactReducer
})