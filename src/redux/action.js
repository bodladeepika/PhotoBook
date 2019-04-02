import {database} from '../database/config'
export function startAddingPost(post)
{
    return (dispatch) => {
        return database.ref('posts').update({[post.id]: post}).then(
            () => { dispatch(addPost(post)) }
        ).catch((error) => {
            console.log(error);
        })
    }
}

export function startLoadingPost()
{
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapshot)=> {
            let posts = []
            snapshot.forEach( (childSnapshot) => {
                posts.push(childSnapshot.val());
            })
            dispatch(loadPosts(posts))
        }).catch((error) => {
            console.log(error);
        })
    }
}

export function startRemovingPost(index, id)
{
    return (dispatch) => {
        return database.ref(`posts/${id}`).remove().then(()=> {
            dispatch(removePost(index))
        }).catch((error) => {
            console.log(error);
        })
    }
}


export function startAddingComments(comments, postId)
{
    return (dispatch) => {
        return database.ref(`comments/${postId}`).push(comments).then(()=> {
            dispatch(addComment(comments,postId))
        }).catch((error) => {
            console.log(error);
        })
    }
}

export function startLoadingComments()
{
    return (dispatch) => {
        return database.ref('comments').once('value').then((snapshot)=> {
            let comments = {}
            snapshot.forEach( (childSnapshot) => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
            })
            dispatch(loadComments(comments))
        }).catch((error) => {
            console.log(error);
        })
    }
}

export function removePost(index)
{
    return {
        type : 'REMOVE_POST',
        index 
    }
}

export function addPost(post)
{
    return {
        type : 'ADD_POST',
        post 
    }
}

export function addComment(comments,postId)
{
    
    return {
        type : 'ADD_COMMENTS',
        comments,
        postId 
    } 
}

export function loadPosts(posts)
{
    
    return {
        type : 'LOAD_POST',
        posts
    } 
}


export function loadComments(comments)
{
    
    return {
        type : 'LOAD_COMMENTS',
        comments
    } 
}