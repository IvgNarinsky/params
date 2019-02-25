import React from "react";
import './Footer.css'

const Footer=(props)=>{

    return(
  <footer style={{backgroundColor:"black",width:"100%",color:"white",display:"flex",justifyContent:"center",padding:"1.5px",overflow: "hidden",paddingBottom:"15px"}}>
             <p>@Created by Ivgeni Narinsky 
             <br></br>
             email :<a href="https://mail.google.com/mail/?view=cm&fs=1&to=genya120@gmail.com" style={{color:"yellow"}}>genya120@gmail.com</a>
             </p>
             
         </footer>
    );
  
}
export default Footer;