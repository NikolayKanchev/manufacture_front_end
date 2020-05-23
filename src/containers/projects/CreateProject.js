import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Message from '../../components/message/Message';
import { validateQuantity, validatePass, validateName } from '../../utils/Validators';
import history from '../../utils/History';
import MultipleSelect from '../../components/search/Multiple';
import CategorySearch from '../../components/search/Category';

import { registerRequest, fetchCategories, fetchSubCategories, getOptions } from '../../utils/FetchData';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Projects.css';

const CreateProject = () => {
const [projectName, setProjectName] = useState("");
const [description, setDescription] = useState("");
const [quantity, setQuantity] = useState(0);
const [errPN, setErrPN] = useState(false);
const [errDesc, setErrDesc] = useState(false);
const [errQuantity, setErrQuantity] = useState(false);
const [errorMessage, setErrorMessage] = useState("");

const categories = fetchCategories();
const materials =  getOptions("materials");
const sizes =  getOptions("sizes");
const periodOptions =  getOptions("period");

const [subCategories, setSubCategories] = useState();
const category = useRef();
const subCategory = useRef();
const selectedSizes = useRef([]);
const selectedMaterials = useRef([]);
const period = useRef("Just once");

const handleSelectCategory = async (selected) => {
    const data = await fetchSubCategories(selected);

    setSubCategories(data);
    category.current = selected;
}

const handleSelectSubCategory = (selected) => {
    subCategory.current = selected;
}

const handleSelectedSizes = (selected) => {
    selectedSizes.current = selected;
}

const handleSelectPeriod = (selected) => {
    period.current = selected;
    console.log(selected);
    
}

const handleSelectedMaterials = (selected) => {
    selectedMaterials.current = selected;    
}
//                          description: "fffffffffffff",
//                          category: "Category",
//                          subCategory: "Sub Category",
//                          materials: ["iron","leder","textil","plastic"],
//                          sizes: ["small", "medium", "large"],
//                          quantity: 15,
//                          forPeriod: "per year",
//                 offersRequested: true,
//                 offersReceived: false,
//                 statusMessage: "You haven't requested offers yet!",

useEffect(() => {
  window.scrollTo(0, 0);
});

const displayError = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
        setErrorMessage("");
    }, 5000);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateName(projectName)) { setErrPN(true); }
    if (description === "") { setErrDesc(true); }
    // if (email === "") { setErrEmail(true); }
    // if (period === "") { setErrPass(true); }

    if(projectName !== "" && description !== ""){      
      if (!errPN && !errDesc){

        const projectInfo = {
          projectName: projectName,
          description: description,
        //   email: email,
        //   period: period
        }
        
        registerRequest(projectInfo)
        .then(res => {          
          if (res.data.message === "Your registration was successful!"){
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
        // displayError("Your email or period are invalid!");
      }
    }else{
      displayError("You have to fill out all of the fields!");
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch(name){
      case "projectName":
        setProjectName(value);
        if (!validateName(value)){
          setErrPN(true);
        }else{
          setErrPN(false);
        }
        break;
      case "description":
        setDescription(value);
        if (!validateName(value)){
          setErrDesc(true);
        }else{
          setErrDesc(false);
        }
        break;
      case "quantity":        
        if (!validateQuantity(+value)){
          setErrQuantity(true);
        }else{
            setErrQuantity(false);
            setQuantity(+value);
        }        
        break;
    //   case "period":
    //     setperiod(value);
    //     if (!validatePass(value)){
    //       setErrPass(true);
    //     }else{
    //       setErrPass(false);
    //     }
    //     break;
      default:
        return;
    }
  }

  return (
    <>
    <Container component="main" maxWidth="md" className="mt-30">
      <div className="paper">
        <Typography component="h1" variant="h5">
          Create Project / Describe your idea
        </Typography>
        <Typography component="h1" variant="h5" className="pink">
          and get offers
        </Typography>
        <form className="form" onSubmit={handleSubmit} noValidate  className="create_project_form">
          <Grid container spacing={3} justify="center">
            <Grid item xs={6} sm={3}>
              <TextField
                autoComplete="pname"
                error={errPN}
                name="projectName"
                variant="outlined"
                required
                fullWidth
                id="projectName"
                label="Project Name"
                autoFocus
                value={projectName}
                onChange={handleChange}
              />
            </Grid>
            </Grid>
            
        <Grid container spacing={3}>
            
            <Grid item xs={6} sm={3}>
                <CategorySearch size="medium" variant="outlined" handleSelected={handleSelectCategory} categories={categories} label="Category"/>
            </Grid>
            <Grid item xs={6} sm={3}>
                <CategorySearch size="medium" variant="outlined" handleSelected={handleSelectSubCategory} categories={subCategories} label="Sub Category" />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="quantity"
                label="Desire Quantity"
                name="quantity"
                autoComplete="quantity"
                error={errQuantity}
                value={quantity === 0 ? "" : quantity}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
                <CategorySearch size="medium" variant="outlined" handleSelected={handleSelectPeriod} categories={periodOptions} label="How often?" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <MultipleSelect width={{width: "450px"}} size="medium" variant="outlined" handleSelected={handleSelectedMaterials} multiOptions={materials} label="Materials" />
            </Grid>           
            <Grid item xs={12} sm={6}>
                <MultipleSelect width={{width: "450px"}} size="medium" variant="outlined" handleSelected={handleSelectedSizes} multiOptions={sizes} label="Sizes" />
            </Grid>

          <Grid item xs={12} sm={6} className="min-height">
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                rowsMax={4}
                id="description"
                label="Decription"
                name="description"
                autoComplete="desc"
                error={errDesc}
                value={description}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} justify="center">
            <Grid item xs={6} sm={3}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className="submit"
                    style={{ margin: "15px 0 20px 0"}}
                >
                    Create Project
                </Button>
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

export default CreateProject;