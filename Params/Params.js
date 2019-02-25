import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Params extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchUserId:"",
      searchId:"",
      ok:0
    }
  }

        onChangeHandler=(event)=>{
        
          if(!isNaN(event.target.value - parseFloat(event.target.value)))
          {
            if(event.target.name==="UserID")
            {
            this.setState({searchUserId:event.target.value},()=>{

            })
          }
          else if(event.target.name==="Id")
          {
          this.setState({searchId:event.target.value},()=>{

          })
          }
            this.setState({ok:1},()=>{
            })
          }
          else if(event.target.value===""&&event.target.name==="Id")
          {
            this.setState({searchId:""},()=>{

            })
          }
          else if(event.target.value===""&&event.target.name==="UserID")
          {
            this.setState({searchUserId:""},()=>{

            })
          }
          else{
            alert("must contain number")    
        }
          
      }
        onSubmitHandler=()=>{
          if(this.state.ok===1&&this.state.searchUserId==="")
          {
          this.props.history.push("/IdParams/"+this.state.searchId)
          }
          else if(this.state.ok===1&&this.state.searchId==="")
          {
          this.props.history.push("/UserIdParams/"+this.state.searchUserId)
          }
          else if(this.state.ok)
          {
          this.props.history.push("/Params/userId="+this.state.searchUserId+"&&id="+this.state.searchId)
          }
          else {
              alert("put an id/userId to search")
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
      search UserId: < input name="UserID" style={{marginRight:"80px"}} value={this.state.searchUserId} onChange={(event)=>this.onChangeHandler(event)}></input>
       <br></br>
       <br></br>
       search id: < input name="Id" style={{marginRight:"50px"}} value={this.state.searchId} onChange={(event)=>this.onChangeHandler(event)}></input>
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
export default Params;
