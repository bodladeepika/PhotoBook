
import React , {Component} from 'react'
import  Title from './Title'
import  Photowall from './Photowall'
import {Route} from 'react-router-dom'
import AddPhoto from './Addphoto'
import {removePost} from '../redux/action'
import Single from './Single';

class Main extends Component
{
    state = {loading : true};
    constructor()
    {
        super()
       

      //  this.removePhoto = this.removePhoto.bind(this);
  
    }
 
    componentDidMount()
    {
          this.props.startLoadingPost().then(()=>{
              this.setState({loading : false})
          }
          );
          this.props.startLoadingComments();
    }
    componentDidUpdate()
    {

    }

    // removePhoto(postRemoved)
    // {
    //     this.setState( (state) => ({
    //        posts : state.posts.filter( post => post !== postRemoved)
    //     }))
    // }

    // addPhoto(postSubmitted)
    // {
    //    this.setState((state) => (
    //        {
    //            posts :state.posts.concat([postSubmitted])
    //        }
    //    ));
    // }

    render()
    {
       
        return ( 
        <div>
            <Route exact path = '/' render = {
                    () => ( 
                        <div>
                            <Title title = {'Photowall'}/>
                             <Photowall {...this.props}/> 
                        </div>
                
                    )
                }/>  
            
            <Route path = '/AddPhoto' render = { ({history}) => (
                <AddPhoto {...this.props} onHistory = {history}/>
            )}/>

            <Route path ="/single/:id"  render = {(params) => (
                <Single {...this.props} {...params}/>
            )}/>

        </div>

        )
    } 
}

export default Main;