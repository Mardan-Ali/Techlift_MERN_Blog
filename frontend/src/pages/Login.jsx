// import "./login.css";
// import { Link } from "react-router-dom";
// export default function Login() {
//   return (
//     <div className="login">
//       <span className="loginTitle">Login</span>
//       <form className="loginForm">
//         <label>Email</label>
//         <input
//           className="loginInput"
//           type="text"
//           placeholder="Enter your email..."
//         />
//         <label>Password</label>
//         <input
//           className="loginInput"
//           type="password"
//           placeholder="Enter your password..."
//         />
//         <button className="loginButton">Login</button>
//       </form>
//       <button className="loginRegisterButton">
//         <Link to="/register" className="link">
//           {" "}
//           Register
//         </Link>
//       </button>
//     </div>
//   );
// }
import React from 'react'
import { Box, Button, TextField, styled, Typography } from '@mui/material'
import { useState } from 'react';
export default function Login () {
  const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

  const Component = styled(Box)`
  width:400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6)
  `
  const Image = styled("img")({
    width: 100,
    margin: "auto",
    display: "flex",
    padding: '50px 0 0'
  })

  const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div, & > button, & > p {
      margin-top: 20px;
  }
`;

  const LoginButton = styled(Button)`
text-transform:none;
background:black;
color:white;
hieght:48px;
boder-radius:2px;
`
  const SignUpButton = styled(Button)`
text-transform:none;
background:orange;
color:white;
hieght:48px;
boder-radius:2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`
  const Text = styled(Typography)`
color: #878787;
font-size:16px;`

const signupIntialValue={
  name:"",
  userName:"",
  password: "",
}
const [acount, toggleAccount]  = useState('login')
const [signup,setSignup] = useState(signupIntialValue);

const toggleSignup = () => {
  acount === 'signup' ? toggleAccount('login') : toggleAccount('signup');
}
const onInputChange=(e)=>{
      setSignup({...signup, [e.target.name] : e.target.value});
}
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt='/blog' />
       {
        acount === "login" ?
       
        <Wrapper>
            <TextField variant='standard' label="Enter username "/>
            <TextField variant='standard'label="Enter password "/>
            <LoginButton variant='contained'>Login</LoginButton>
            <Text style={{textAlign:'center'}}>OR</Text>
            <SignUpButton onClick={()=>toggleSignup()}>create an Account</SignUpButton>
        </Wrapper>
        :
        <Wrapper>
          <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='name : ' label="Enter Name " />
          <TextField variant='standard' onChange={(e)=>onInputChange(e)} name='username' label="Enter username " />
          <TextField variant='standard' onChange={(e)=>onInputChange(e)} name ='password' label="Enter password " />

          <SignUpButton variant='contained'>Sign Up</SignUpButton>
          <Text style={{ textAlign: 'center' }}>OR</Text>
          <LoginButton variant='contained' onClick={()=>toggleSignup()}>Already have an Account</LoginButton>
        </Wrapper>
        }
      </Box>
    </Component>
  )
}
