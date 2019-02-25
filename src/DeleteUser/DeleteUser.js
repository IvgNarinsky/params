import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axios from 'axios'
import BoxDelete from '../Box/BoxDelete'

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      result:1,
      ok:0,
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
      
 
        
        onBoxDeleteHandler=(id)=>{
            var arr=this.state.data
          for(var i=0;i<this.state.data.length;i++)
          {
              if(this.state.data[i].id===id)
              {
                axios.delete("https://jsonplaceholder.typicode.com/posts/id="+this.state.deleteId) 
                .then(res => {
                  console.log(res)
              });
               arr.splice(i,1)
                this.setState({data:arr},()=>{})
              }
          }
        
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
        <BoxDelete 
        key={index}
        userId={item.userId}
          id={item.id}
          title={item.title}
          body={item.body}
          index={index}
          click={() => this.onBoxDeleteHandler(item.id)}

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
export default Delete;
