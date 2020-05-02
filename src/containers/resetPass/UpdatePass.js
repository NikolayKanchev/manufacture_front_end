import React, { useState, useEffect } from 'react';
import history from '../../utils/History';
import { useReduxState } from '../../utils/State';

import Message from '../../components/message/Message';
import { validatePass } from '../../utils/Validators';
import { updatePassRequest } from '../../utils/FetchData';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './ResetPass.css';

const ResetPass = (props) => {
  const [pass, setPass] = useState("");
  const [errPass, setErrPass] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [ {logedIn, username} ] = useReduxState();

  useEffect(() => {
    if (logedIn !== false){
      history.push("/");
    }
  });

  const displayError = (message) => {
    setErrorMessage(message)
      setTimeout(() => {
        setErrorMessage("");
        }, 5000);
  }

  const displaySuccessMessage = (message) => {
    setSuccessMessage(message)
      setTimeout(() => {
        setSuccessMessage("");
        }, 5000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(pass === ""){ setErrPass(true); }

    if(!errPass && pass !== ""){
      const params = props.match.params;
      const token = params.token !== undefined? params.token: "";
    
      updatePassRequest(pass, token)
      .then(res => {
        if (res.status === 200){
          displaySuccessMessage(res.data.message);
          setTimeout(() => {
            history.push("/login");
          }, 5000);
        }else{
          displayError("Something went wrong! Try again!")
        }
      })
      .catch(err => {
        displayError(err.message);
      })
    }else{
      displayError("Invalid email!")
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch(name){
      case "pass":
        setPass(value);
        if (!validatePass(value)){
          setErrPass(true);
        }else{
          setErrPass(false);
        }
        break;
      default:
        return;
    }
  }
  return (
    <>
    <Container component="main" maxWidth="xs" className="main">
      <div className="paper">
        <Avatar className="avatar" style={{ backgroundColor: "#e91e63" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset Your Password
        </Typography>
        <form className="form" onSubmit={handleSubmit} noValidate>
          <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="pass"
          label="Password"
          name="pass"
          type="password"
          autoComplete="pass"
          autoFocus
          error={errPass}
          value={pass}
          onChange={handleChange}
        />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            style={{ margin: "20px 0 20px 0"}}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>

    <Container component="main" maxWidth="sm">
      <Box mt={25}>
        { errorMessage !== "" ?
          (<Message message={errorMessage} variant="error"/>) : null
        }
        { successMessage !== "" ? 
          (<Message message={successMessage} variant="success"/>) : null
        }
      </Box>        
    </Container>
  </>
  );
}

export default ResetPass;