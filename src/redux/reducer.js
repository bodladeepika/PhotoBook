import _posts from '../data/posts';
import { combineReducers, bindActionCreators } from 'redux';

 function posts(state = _posts, action)
{
    switch (action.type) {
        case 'REMOVE_POST' : return [...state.slice(0,action.index), ...state.slice(action.index + 1)] 
        case 'ADD_POST' : return [...state,action.post]
        case 'LOAD_POST' : return action.posts
        default : return state
    }

   
  
}

 function comments (state = {}, action)
{
  
    switch (action.type) {
        
        case 'ADD_COMMENTS' : 
        if(!state[action.postId])
        {
            return {...state, [action.postId]:[action.comments]}
        }else{
            return {...state, [action.postId]: [...state[action.postId], action.comments]}
        }
        case 'LOAD_COMMENTS' : return action.comments
        default : return state
    }
}

const rootReducer = combineReducers({posts, comments})

export default rootReducer