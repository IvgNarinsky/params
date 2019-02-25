import React from "react";
import './Box.css'

const BoxDelete=(props)=>{

    return(
        <div  className="box" key={props.index} >
        <center> 
        <div style={{height:"280px"}}>
          <p>User id:
          {props.userId}</p>  
         <p>Id: {props.id}</p> 
         <p>Title: {props.title}</p> 
         <p>Body: {props.body}</p> 
         </div>
         <button onClick={props.click} >delete</button>
         </center>
         <br></br>

      </div>
      
    );
  
}
export default BoxDelete;