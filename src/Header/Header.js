import React, { Component } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
    
      }
    }
    componentDidMount=()=>{
     
     
    }

    
    render() {
    

        return(
        <div style={{backgroundColor:"black",display:"flex",flexDirection:"row",justifyContent:"center",height:"70px"}}>
            <Link to="/"> <img style={{height:"70px",position:"absolute",top:0,left:"50px"}} src={'https://vignette.wikia.nocookie.net/mikagura-school-suite/images/5/59/Yuto-anime_chibi.png/revision/latest?cb=20150210092719'} alt="reg" />  </Link> 
       <Link to="/getByid" style={{color:"blue",textDecoration: 'none',backgroundColor:"yellow",borderRadius:"10px",fontWeight:"bold",width:"100px",height:"60px",marginLeft:"15px",marginTop:"5px",textAlign:"center"}}><p>find by id</p></Link>
        <Link to="/getAll" style={{color:"blue",textDecoration: 'none',backgroundColor:"yellow",borderRadius:"10px",fontWeight:"bold",width:"100px",height:"60px",marginLeft:"15px",marginTop:"5px",textAlign:"center"}}><p>get all</p></Link>
        <Link to="/getByparams" style={{color:"blue",textDecoration: 'none',backgroundColor:"yellow",borderRadius:"10px",fontWeight:"bold",width:"100px",height:"60px",marginLeft:"15px",marginTop:"5px",textAlign:"center",wordWrap:"break-word"}}><p >get params</p></Link>
         <Link to="/newUser" style={{color:"blue",textDecoration: 'none',backgroundColor:"yellow",borderRadius:"10px",fontWeight:"bold",width:"100px",height:"60px",marginLeft:"15px",marginTop:"5px",textAlign:"center"}}><p>new user</p></Link>
        <Link to="/deleteUser" style={{color:"blue",textDecoration: 'none',backgroundColor:"yellow",borderRadius:"10px",fontWeight:"bold",width:"100px",height:"60px",marginLeft:"15px",marginTop:"5px",textAlign:"center"}}><p>delete user</p></Link>
        </div>
        )
    }
  
}
export default Header;