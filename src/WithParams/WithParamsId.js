import React, { Component } from 'react';
import axios from 'axios'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Box from '../Box/Box'

class WithParamsId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
     
    }
  }
  componentDidMount() {
                axios.get("https://jsonplaceholder.typicode.com/posts?id="+this.props.match.params.id)
                  .then(res => {
                      this.setState({data:res.data},()=>{
                        if(res.data.length===0)
                          {
                              alert("not exist")
                          }
                      })
                  }).catch(err => {
                      console.log("something go wrong");
                }) 
              
        }
      
  render() {
   

    let box = this.state.data.map((item,index)=> {
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
        <div style={{width:"100%",  position:"fixed",top:"645px"}}>
        <Footer></Footer>
        </div>
    </div>
    );
  }
}
export default WithParamsId;
