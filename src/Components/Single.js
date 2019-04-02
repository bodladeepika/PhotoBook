import React, {Component} from 'react'
import Photo from './Photo'
import Comment from './Comment'

class Single extends Component {
    render() {
        const {match, posts} = this.props
      
        const id = (match.params.id)
      
        const post = posts.find((post) => post.id == id) 
     
        const comments = this.props.comments[match.params.id] || [];
        const index = this.props.posts.findIndex((post) => post.id == id);
        if(this.props.loading === true)
        {
            return <div className='loader'>... Loading</div>
        }else if (post)
        { 
            return  <div className='single-photo'>
        <Photo post={post} {...this.props} index = {index}/>
         <Comment startAddingComments={this.props.startAddingComments} comments={comments} id={id}/>
      </div>
      } else {
       return <h1 className="loader">... Loading</h1>
      }
       
    }
}

export default Single