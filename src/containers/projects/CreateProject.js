import React, { useState, useEffect, useRef } from 'react';
import { validateQuantity, validateName } from '../../utils/Validators';
import history from '../../utils/History';
import { useReduxState } from '../../utils/State';
import { 
    fetchCategories, 
    fetchSubCategories, 
    getOptions, 
    createProject 
} from '../../utils/FetchData';
import MultipleSelect from '../../components/search/Multiple';
import CategorySearch from '../../components/search/Category';

import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Projects.css';

const CreateProject = () => {
const [description, setDescription] = useState("");
const [quantity, setQuantity] = useState(0);
const [errPN, setErrPN] = useState(false);
const [errDesc, setErrDesc] = useState(false);
const [errQuantity, setErrQuantity] = useState(false);
const [successMessage, setSuccessMessage] = useState(undefined);
const [errorMessage, setErrorMessage] = useState(undefined);
const [ { id } ] = useReduxState();
// const id = "2";

const categories = fetchCategories();
const materials =  getOptions("materials");
const sizes =  getOptions("sizes");
const periodOptions =  getOptions("period");

const [subCategories, setSubCategories] = useState();

const [projectName, setProjectName] = useState("");
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

useEffect(() => {
  window.scrollTo(0, 0);
});

const displayAlertMessage = (message, type) => {
    if (type === "error"){
        setErrorMessage(message);
        setTimeout(() => {
            setErrorMessage(undefined);        
        }, 5000);
    }

    if (type === "success"){
        setSuccessMessage(message);
        setTimeout(() => {
            setSuccessMessage(undefined);
            history.push("/projects");       
        }, 1000);
    }
}

const handleSubmit = async(e) => {
    e.preventDefault();

    if (!validateName(projectName)) { setErrPN(true); }
    if (description === "") { setErrDesc(true); }

    if(projectName !== "" && description !== ""){      
      if (!errPN && !errDesc){

        const projectInfo = {
            name: projectName,
            description: description,
            category: category.current,
            subCategory: subCategory.current,
            materials: selectedMaterials.current.current,
            sizes: selectedSizes.current.current,
            quantity: quantity,
            forPeriod: period.current,
            offersRequested: false,
            offersReceived: false,
            statusMessage: "You haven't requested offers yet!",
        }

        const res = await createProject(projectInfo, id);
        if (res.status === 200){
            displayAlertMessage(res.message, "success");
        }
        
        // registerRequest(projectInfo)
        // .then(res => {          
        //   if (res.data.message === "Your registration was successful!"){
        //     history.push('/login');
        //   }else{
        //     console.log(res);
        //     displayError("Something went wrong! Try again!")
        //   }
        // })
        // .catch(err => {
        //   displayError(err.message);
        // })
      }else{
        displayAlertMessage("Fill out all required fields!", "error");
      }
    }else{
        displayAlertMessage("You have to fill out all of the required fields!", "error");
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
        <form onSubmit={handleSubmit} noValidate  className="form create_project_form">
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
                <MultipleSelect size="medium" variant="outlined" handleSelected={handleSelectedMaterials} multiOptions={materials} label="Materials" />
            </Grid>           
            <Grid item xs={12} sm={6}>
                <MultipleSelect size="medium" variant="outlined" handleSelected={handleSelectedSizes} multiOptions={sizes} label="Sizes" />
            </Grid>

          <Grid item xs={12} sm={6} className="min-height">
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                rows={4}
                id="description"
                label="Decribe your idea!"
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
      <Box mt={0}>
        <MuiAlert className={ errorMessage ? "fadeIn" : "fadeOut"} elevation={6} variant="filled" severity="error">{errorMessage}</MuiAlert>
        <MuiAlert className={ successMessage ? "fadeIn" : "fadeOut"} elevation={6} variant="filled" severity="success">{successMessage}</MuiAlert>
      </Box>
    </Container>
    </>
  );
}

export default CreateProject;