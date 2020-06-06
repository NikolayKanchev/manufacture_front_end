import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import history from '../../utils/History';

import Message from '../../components/message/Message';
import { loginRequest } from '../../utils/FetchData';
import { validatePass, validateEmail } from '../../utils/Validators';
import { useReduxState } from '../../utils/State';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Login.css';


const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errPass, setErrPass] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  let [ state , dispatch ] = useReduxState();

  useEffect(() => {
      window.scrollTo(0, 0);
  });

  const displayError = (message) => {
    setErrorMessage(message)
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email === ""){ setErrEmail(true); }
    if(password === ""){ setErrPass(true); }    

    if(!errPass && !errEmail && email !== "" && password !== ""){
      loginRequest(email, password)
      .then(res => {
        if (res.status === 200){
          // console.log(res.data.usersData);
          

// userType: "manufacturer"
// company:
    // address: "Somewhere"
    // country: "USA"
    // id: 4
    // img: "https://s3.amazonaws.com/uifaces/faces/twitter/flexrs/128.jpg"
    // name: "Tesla"
    // regNumber: "23455432"
// planId: 1
// user:
    // baseUserId: 9
    // companyId: 4
    // contactPerson: "Elon Musk"
    // email: "nikolay.kanchev@yahoo.com"
    // id: 2


// userType: "company"
// company:
    // address: "Somewhere"
    // country: "USA"
    // id: 5
    // img: "https://s3.amazonaws.com/uifaces/faces/twitter/flexrs/128.jpg"
    // name: "Tesla"
    // regNumber: "23455432"
// planId: 1
// user:
    // baseUserId: 12
    // companyId: 5
    // email: "nikolaj.kanchev@gmail.com"
    // id: 5
    // name: "Nikolay Kanchev"


// userType: "people"
// planId: 1
// user:
    // baseUserId: 10
    // companyId: null
    // email: "d.a.kancheva@gmail.com"
    // id: 3
    // name: "Dilyana Kancheva"
          const usersData = res.data.usersData;

          const userType = res.data.userType;
          const username = (userType === "people" ? usersData.user.name : usersData.company.name);
          const token = res.data.token;
          const isManufacturer = (userType === "manufacturer" ? true : false);
          const company = (userType === "people" ? undefined : usersData.company);
          const user = usersData.user;

          // dispatch({ type: "updateUser", logedIn: true, username, token, id: res.data.userId });
          dispatch({ type: "updateUser", userType, logedIn: true, username, token, isManufacturer, company, user });
          console.log(state);
          
          history.goBack();
        }else{
          displayError("Something went wrong! Try again!")
        }
      })
      .catch(err => {
        displayError(err.message);
      })
    }else{
      displayError("Your email or password are invalid!")
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch(name){
      case "password":
        setPassword(value);
        if (!validatePass(value)){
          setErrPass(true);
        }else{
          setErrPass(false);
        }
        break;
      case "email":
        setEmail(value);
        if (!validateEmail(value)){
          setErrEmail(true);
        }else{
          setErrEmail(false);
        }
        break;
      default:
        return;
    }
  }
  return (
  <>
  <Container component="main" maxWidth="xs">
    <div className="paper">
      <Avatar className="avatar" style={{ backgroundColor: "#e91e63", marginLeft: "45%" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          error={errEmail}
          value={email}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          error={errPass}
          value={password}
          onChange={handleChange}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{ margin: "10px 0 20px 0"}}
        >
          Sign In
        </Button>
        <Grid container className="grid-container">
          <Grid item xs className="grid-item-left">
              <Link to="/reset-pass" className="link">Forgot password?</Link>
          </Grid>
          <Grid item>
              <Link to="/register" className="link">Don't have an account? Sign Up</Link>
          </Grid>
        </Grid>
      </form>
    </div>
    
  </Container>
  <Container component="main" maxWidth="sm">
  <Box mt={8}>
    { errorMessage !== "" ? 
      (<Message message={errorMessage} variant="error"/>) : null
    }
  </Box>
  </Container>
  </>
  )
}

export default LoginPage;