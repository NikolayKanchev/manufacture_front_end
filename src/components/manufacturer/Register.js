import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import CountrySearch from '../../components/search/Country';
import Message from '../../components/message/Message';
import { validateEmail, validatePass, validateName } from '../../utils/Validators';
import history from '../../utils/History';

import { registerRequest } from '../../utils/FetchData';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import './Register.css';

const SignUp = () => {
const [companyName, setcompanyName] = useState("");
const [idNum, setIdNum] = useState("");
const [address, setAddress] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [conPerson, setConPerson] = useState("");
const [password, setPassword] = useState("");

const [errCN, setErrCompanyName] = useState(false);
const [errIdNum, setErrIdNum] = useState(false);
const [errAddress, setErrAddress] = useState(false);
const [errEmail, setErrEmail] = useState(false);
const [errPhone, setErrPhone] = useState(false);
const [errConPerson, setErrConPerson] = useState(false);
const [errPass, setErrPass] = useState(false);

const [errorMessage, setErrorMessage] = useState("");
const country = useRef();

useEffect(() => {
  window.scrollTo(0, 0);
});

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

    if (!validateName(companyName)) { setErrCompanyName(true); }
    if (companyName === "") { setErrCompanyName(true); }
    if (idNum === "") { setErrIdNum(true); }
    if (address === "") { setErrAddress(true); }
    if (email === "") { setErrEmail(true); }
    if (phone === "") { setErrPhone(true); }
    if (conPerson === "") { setErrConPerson(true); }
    if (password === "") { setErrPass(true); }

    if(companyName !== "" && idNum !== "" && address !== "" && email !== "" && phone !== "" && conPerson !== "" && password !== ""){      
      if (!errCN && !errIdNum  && !errAddress && !errEmail && !errPhone  && !errConPerson && !errPass){

        const userInfo = {
          name: companyName,
          address: address,
          email: email,
          password: password
        }

        registerRequest(userInfo)
        .then(res => {          
          if (res.data.message === "Your registration was successful!"){
            const manProfile = {
              id: "from response",
              regNumber: idNum,
              phone: phone,
              conPerson: conPerson,
              img: " uploaded"
            }
            alert(manProfile);
            history.push('/login');
          }else{
            console.log(res);
            displayError("Something went wrong! Try again!")
          }
        })
        .catch(err => {
          displayError(err.message);
        })
      }else{
        displayError("Your email or password are invalid!");
      }
    }else{
      displayError("You have to fill out all of the fields!");
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch(name){
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
      case "email":
        setEmail(value);
        if (!validateEmail(value)){
          setErrEmail(true);
        }else{
          setErrEmail(false);
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
      case "conPerson":
        setConPerson(value);
        if (!validateName(value)){
          setErrConPerson(true);
        }else{
          setErrConPerson(false);
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
      default:
        return;
    }
  } 

  return (
    <>
    <div className="man-main-cont">
      <div className="paper man-form-cont">
        <form className="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2} justify={"center"}>
            <Grid item xs={12} sm={4}>
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
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
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
            <Grid item xs={12} sm={4}>
              <CountrySearch required={true} width="100%" variant="outlined" size="medium" handleSelectCountry={handleSelectCountry} />
            </Grid>
            <Grid item xs={12} sm={4}>
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
            <Grid item xs={12} sm={4}>
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
            <Grid item xs={12} sm={4}>
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
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="conPerson"
                label="Contact Person's Name"
                name="conPerson"
                autoComplete="conPerson"
                error={errConPerson}
                value={conPerson}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
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
          </Grid>
          <Grid container spacing={2} justify={"center"}>
            <Grid item xs={12} sm={4}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className="submit"
                style={{ margin: "15px 0 20px 0"}}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item>
                <Link to="/login" className="link">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>

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