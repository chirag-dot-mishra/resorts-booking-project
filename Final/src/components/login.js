import React, {useState} from "react";
import axios from 'axios';
import './style.css';
import {useHistory} from "react-router";

function Login() {
  const [usernameReg,setUsernameReg] = useState("");
  const [passwordReg,setPasswordReg] = useState("");

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [responseMessage,setresponseMessage]=useState("");
  const [responseMessage1,setresponseMessage1]=useState("");
const history =useHistory();  
const register =()=>{
    axios.post('http://localhost:3001/register',
    {username: usernameReg,
       password: passwordReg
      }).then((response)=>{
      console.log(response);
      if(
        response.data.responsecode=="200"
    ){
      setresponseMessage1(response.data.message)   
    }
    }).catch(err=>{
      console.log(err)
    })
  };

  const login =()=>{
    axios.post('http://localhost:3001/login',
    {username: username, 
      password: password
    }).then((response)=>{
      console.log(response);
      if(
          response.data.responsecode=="200"
      ){
        history.push('/Home');   
      }
      else(
        setresponseMessage(response.data.message)
      )
      console.log("any");
    });
  };
  return (
    <div className="App">
      <div className="Registration">
       <h1 className="head">Registration</h1>
       <br/>
       <lable className="lab-typ">UserName</lable>
       <br/><br/>
       <input  className="txt-typ" placeholder="Enter your Name as Username" type ="text"
        onChange= {(e)=>{
         setUsernameReg(e.target.value);
       }}
         />
         <br/><br/>
       <lable className="lab-typ">PassWord</lable>
       <br/><br/>
       <input placeholder="Enter Password" className="txt-typ"
       type="password"
       onChange= {(e)=>{
        setPasswordReg(e.target.value);
      }}
       />
       <br/><br/>
       <button className="but" onClick={register}>Register</button>
      </div>
      <h4 className="head">
      {
        responseMessage1
      }
    </h4>
      <div className="Login">
        <h1 className="head">Login</h1>
        <br/>
        <input className="txt-typ" type="text" placeholder="UserName..."  onChange= {(e)=>{
         setUsername(e.target.value);
       }} /><br/><br/>
        <input className="txt-typ" type="password" placeholder="PassWord..." onChange= {(e)=>{
        setPassword(e.target.value);
      }}/><br/><br/>
        <button className="but" onClick={login}>Login</button>
      </div>
     {
     //responseMessage ?<span>{responseMessage}</span> :<span></span>
     }<h2 className="head">
      {
        responseMessage
      }
    </h2>
    </div>
  );
}

export default Login;
