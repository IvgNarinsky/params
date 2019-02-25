import React, { Component } from 'react';
import axios from 'axios'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Box from '../Box/Box'
import './LandingPage.css'

class LandingPage extends Component {
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
 
      arayInfo.push({
        userId:this.state.data[key].userId,
        id:  this.state.data[key].id,
        title:  this.state.data[key].title,
        body: this.state.data[key].body
      }
      )
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
        <div style={{display:"flex",flexDirection:"row",flexWrap: "wrap",marginTop:"20px",marginLeft:"150px"}}>
            {box}
        </div>
        <div style={{width:"99%",marginTop:"20px"}}>
        <Footer></Footer>
        </div>
    </div>
    );
  }
}
export default LandingPage;
