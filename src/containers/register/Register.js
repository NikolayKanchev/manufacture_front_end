import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Message from '../../components/message/Message';
import CountrySearch from '../../components/search/Country';
import { validateEmail, validatePass, validateName } from '../../utils/Validators';
import history from '../../utils/History';

import { registerRequest } from '../../utils/FetchData';

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
import './Register.css';

const SignUp = () => {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isCompany, setIsCompany] = useState(false);
const [companyName, setcompanyName] = useState("");
const [idNum, setIdNum] = useState("");
const [address, setAddress] = useState("");
const [phone, setPhone] = useState("");

const [errPhone, setErrPhone] = useState(false);
const [errFN, setErrFN] = useState(false);
const [errLN, setErrLN] = useState(false);
const [errEmail, setErrEmail] = useState(false);
const [errPass, setErrPass] = useState(false);
const [errCN, setErrCompanyName] = useState(false);
const [errIdNum, setErrIdNum] = useState(false);
const [errAddress, setErrAddress] = useState(false);
const [errorMessage, setErrorMessage] = useState("");

const country = useRef();

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

const handleSelectCountry = (selected) => {
  country.current = selected;
}

const displayError = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
        setErrorMessage("");
    }, 5000);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateName(firstName)) { setErrFN(true); }
    if (lastName === "") { setErrLN(true); }
    if (email === "") { setErrEmail(true); }
    if (password === "") { setErrPass(true); }

    if (!isCompany){
      if (firstName === "" || lastName === "" || email === "" || password === "" || errFN || errLN || errEmail || errPass ){
        displayError("You have to fill out all of the required fields!");
        return;
      }
    }

    if (isCompany){
      if (firstName === "" || lastName === "" || email === "" || password === "" || errFN || errLN || errEmail || errPass || 
      companyName === "" || idNum === "" || address === "" || country === "" || phone === "" || errCN || errIdNum || errAddress || errPhone ){
       
        if (companyName === "") { setErrCompanyName(true); }
        if (idNum === "") { setErrIdNum(true); }
        if (address === "") { setErrAddress(true); }
        if (email === "") { setErrEmail(true); }
        if (phone === "") { setErrPhone(true); }
        if (password === "") { setErrPass(true); }
        displayError("You have to fill out all of the required fields!");
        return;
      }
    }
        
    const userInfo = {};

    if (!isCompany){
      userInfo.firstName = firstName;
      userInfo.lastName = lastName;
      userInfo.email = email;
      userInfo.password = password;
      userInfo.planId = 1;
      userInfo.userType = "people";
    }else{
      userInfo.firstName = firstName;
      userInfo.lastName = lastName;
      userInfo.email = email;
      userInfo.password = password;
      userInfo.planId = 1;
      userInfo.name = companyName;
      userInfo.regNumber = idNum;
      userInfo.address = address;
      userInfo.country = country.current;
      userInfo.img = "";
      userInfo.phone = phone;
      userInfo.userType = "company";
    }
            
    registerRequest(userInfo)
    .then(res => {          
      if (res.data.message === "Your registration was successful!"){
        history.push('/login');
      }else{
        displayError("Something went wrong! Try again!")
      }
    })
    .catch(err => {
      displayError(err.message);
    })
  }
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch(name){
      case "firstName":
        setFirstName(value);
        if (!validateName(value)){
          setErrFN(true);
        }else{
          setErrFN(false);
        }
        break;
      case "lastName":
        setLastName(value);
        if (!validateName(value)){
          setErrLN(true);
        }else{
          setErrLN(false);
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
      case "password":
        setPassword(value);
        if (!validatePass(value)){
          setErrPass(true);
        }else{
          setErrPass(false);
        }
        break;
      case "companyName":
        setcompanyName(value);
        if (!validateName(value)){
          setErrCompanyName(true);
        }else{
          setErrCompanyName(false);
        }
        break;
      case "idNum":
        setIdNum(value);
        if (!validateName(value)){
          setErrIdNum(true);
        }else{
          setErrIdNum(false);
        }
        break;
      case "address":
        setAddress(value);
        if (!validateName(value)){
          setErrAddress(true);
        }else{
          setErrAddress(false);
        }
        break;
      case "phone":
        setPhone(value);
        if (!validateName(value)){
          setErrPhone(true);
        }else{
          setErrPhone(false);
        }
        break;
      default:
        return;
    }
  }

  const handleIsCompanySelected = (event) => {
    setIsCompany(event.target.checked)       
  }

  return (
    <>
    <Container component="main" maxWidth="xs">
      <div className="paper">
        <Avatar className="avatar" style={{ backgroundColor: "#e91e63" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                error={errFN}
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                error={errLN}
                value={lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={errEmail}
                value={email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
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
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value={isCompany} color="primary" onClick={handleIsCompanySelected}/>}
                label= "I am representing a company."
              />
            </Grid>
            { isCompany ? 
              <div className="when-company">
                <Grid container spacing={2} justify={"center"}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      autoComplete="companyName"
                      error={errCN}
                      name="companyName"
                      variant="outlined"
                      required
                      fullWidth
                      id="companyName"
                      label="Company Name"
                      autoFocus
                      value={companyName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      autoComplete="idNum"
                      error={errIdNum}
                      name="idNum"
                      variant="outlined"
                      required
                      fullWidth
                      id="idNum"
                      label="Company ID number"
                      autoFocus
                      value={idNum}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <CountrySearch required={true} width="100%" variant="outlined" size="medium" handleSelectCountry={handleSelectCountry} />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      autoComplete="address"
                      error={errAddress}
                      name="address"
                      variant="outlined"
                      required
                      fullWidth
                      id="address"
                      label="Address"
                      autoFocus
                      value={address}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="phone"
                      label="Phone"
                      name="phone"
                      autoComplete="phone"
                      error={errPhone}
                      value={phone}
                      onChange={handleChange}
                    />
                  </Grid>
              </Grid>
              </div>
              : null
            }
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
            style={{ margin: "15px 0 20px 0"}}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
                <Link to="/login" className="link">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>

    <Container component="main" maxWidth="sm">
      <Box mt={6}>
        { errorMessage !== "" ? 
          (<Message message={errorMessage} variant="error"/>) : null
        }
      </Box>
    </Container>
    </>
  );
}

export default SignUp;