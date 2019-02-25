import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Id extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search:"",
      ok:0
    }
  }

        onChangeHandler=(event)=>{
        
          if(!isNaN(event.target.value - parseFloat(event.target.value)))
          {
            this.setState({search:event.target.value},()=>{

            })
            
            this.setState({ok:1},()=>{
            })
          }
          else if(event.target.value==="")
          {
            this.setState({search:""},()=>{

            })
          }
          else{
            alert("must contain number")    
        }
          
      }
        onSubmitHandler=()=>{
            if(this.state.ok===1)
            {
            this.props.history.push("/IdParams/"+this.state.search)
            }
            else {
                alert("put an id to search")
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
      search id: < input name="find" style={{marginRight:"50px"}} value={this.state.search} onChange={(event)=>this.onChangeHandler(event)}></input>
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
export default Id;
