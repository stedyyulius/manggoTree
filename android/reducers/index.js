import {combineReducers} from 'redux'

import nameReducers from './name-reducers.js'
import growTree from './growTree-reducers.js'

export default combineReducers({
  name: nameReducers,
  tree: growTree
})
