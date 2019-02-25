import React from "react";
import './Box.css'

const box=(props)=>{

    return(
        <div  className="box" key={props.index} >
        <center> 
          <p>User id:
          {props.userId}</p>  
         <p>Id: {props.id}</p> 
         <p>Title: {props.title}</p> 
         <p>Body: {props.body}</p> 
         
         </center>
      </div>
    );
  
}
export default box;