import React, { Component } from 'react';
import axios from 'axios'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Box from '../Box/Box'

class GetAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
    result:1,
      data: [],
      search:"",
    }
  }
  componentDidMount() {

               if(this.state.result===1)
               {
                axios.get("https://jsonplaceholder.typicode.com/posts")
                  .then(res => {
                      this.setState({data:res.data},()=>{
                      })
                      this.setState({result:0},()=>{})
                  }).catch(err => {
                      console.log("something go wrong");
                }) 
            }   
            
        }
        onChangeHandler=(event)=>{
        
                this.setState({search:event.target.value},()=>{
            })
            
          
        }

  render() {
    let arayInfo = [];
    for (let key in this.state.data) {
        if( this.state.data[key].id.toString()===this.state.search||this.state.data[key].userId.toString()===this.state.search)
        {
      arayInfo.push({
        userId:this.state.data[key].userId,
        id:  this.state.data[key].id,
        title:  this.state.data[key].title,
        body: this.state.data[key].body
      }
      )
    }

  }

    let box = arayInfo.map((item,index)=> {
    
        
      return (
        <Box
        key={index}
        userId={item.userId}
          id={item.id}
          title={item.title}
          body={item.body}
          index={index}
        />
      )
        
    })
    return (
      <div>
        <Header></Header>  
        <center>
            <br></br>
            <div style={{borderStyle:"solid",width:"30%",backgroundColor:"greenyellow",height:"35px",paddingTop:"5px"}}>

       search: <input name="find" value={this.state.search} onChange={(event)=>this.onChangeHandler(event)}></input>
       </div>
       </center>
        <div style={{display:"flex",flexDirection:"row",flexWrap: "wrap",marginTop:"20px",marginLeft:"150px"}}>
            {box}
        </div>
        <div style={{width:"100%",  position:"fixed",top:"645px"}}>
        <Footer></Footer>
        </div>
    </div>
    );
  }
}
export default GetAll;
