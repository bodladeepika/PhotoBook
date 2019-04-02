import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Photo(props)
{
    const post = props.post;

        return <figure className='figure'>
       
         <Link to={`/single/${post.id}`}><img className="photo" src = {post.imageLink} alt={post.description}/></Link> 

         <figureCaption ><p>{post.description}</p></figureCaption>
         <div className='button-container'>
         <button  onClick = { () => {
             props.startRemovingPost(props.index, post.id)   
              props.history.push('/')
            }}
         > Remove</button>
         <Link className='comment-button' to={`/single/${post.id}`}>
         <div className='speech-bubble'></div>
            <div className='comment-count'>
              {props.comments[post.id] ? props.comments[post.id].length : 0}
            </div>
         </Link>
         </div>
         
         </figure> 
}

// Photo.propTypes = {
//     post : PropTypes.array.isRequired,
//     onRemovePhoto: PropTypes.func.isRequired
// }
// class Photo extends Component
// {
//     render ()
//     {
//         const post = this.props.post;
//         return <figure className='figure'>
//          <img className="photo" src = {post.imageLink} alt={post.description}/>
//          <figureCaption ><p>{post.description}</p></figureCaption>
//          <div className='button-container'>
//          <button className='remove-btn'>Remove</button>
//          </div>
         
//          </figure>
       
//     }
  
// }

export default Photo;