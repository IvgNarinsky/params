import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios'

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addId:"",
      addUserId:"",
      addBody:"",
      addTitle:"",
      ok:0
    }
  }

        onChangeHandler=(event)=>
        {
            if(event.target.name!=="title"&&event.target.name!=="body")
            {
                if(!isNaN(event.target.value - parseFloat(event.target.value)))
                {
                    if(event.target.name==="UserID")
                    {
                    this.setState({addUserId:event.target.value},()=>{

                    })
                     }
                    else if(event.target.name==="Id")
                    {
                    this.setState({addId:event.target.value},()=>{
                    })
                    
                    }
                }
                else{
                    alert("must contain number")    
            
                  }
              
            }
            
              if(event.target.name==="title")
              {
                this.setState({addTitle:event.target.value},()=>{
        
                })
              }
            if(event.target.name==="body")
            {
                    this.setState({addBody:event.target.value},()=>{
        
                    })
            } 
        }
                onSubmitHandler=()=>{
                 if(this.state.addId!==""&&this.state.addUserId!==""&&this.state.addTitle&&this.state.addBody!=="")
                 {
                    axios.post('https://jsonplaceholder.typicode.com/posts',{id:this.state.addId,
                userId:this.state.addUserId,
                title:this.state.addTitle,
                body:this.state.addBody
                })

                    alert( "profile added")
                    this.setState({addBody:""},()=>{
        
                    })
                    this.setState({addTitle:""},()=>{
        
                    })
                    this.setState({addUserId:""},()=>{
        
                    })
                    this.setState({addId:""},()=>{
        
                })

                }
                 else{
                     alert("must fill all")
                 }
                  
                
            
         }
     
     
        
  render() {
    
    return (
      <div>
        <Header></Header>
        <br></br>
            <br></br>  
        <center>
        <div style={{borderStyle:"solid",width:"30%",backgroundColor:"greenyellow"}}>
            <br></br>
            <br></br>
       UserId: < input name="UserID" style={{marginRight:"40px"}} value={this.state.addUserId} onChange={(event)=>this.onChangeHandler(event)}></input>
       <br></br>
       <br></br>
        id: < input name="Id" style={{marginRight:"8px"}} value={this.state.addId} onChange={(event)=>this.onChangeHandler(event)}></input>
       <br></br>
            <br></br>
            title: < input name="title" style={{marginRight:"20px"}} value={this.state.addTitle} onChange={(event)=>this.onChangeHandler(event)}></input>
       <br></br>
            <br></br>
            
            body
            <br></br>
             < textarea rows="4" cols="50" name="body"  value={this.state.addBody} onChange={(event)=>this.onChangeHandler(event)}></textarea>
       <br></br>
            <br></br>
       <input  type="submit" value="submit" name="submit" onClick={()=>this.onSubmitHandler()}></input>
       <br></br>
            <br></br>
       </div>
       </center>
        <div style={{width:"100%",  position:"fixed",top:"645px"}}>
        <Footer></Footer>
        </div>
    </div>
    );
  }
}
export default NewUser;
