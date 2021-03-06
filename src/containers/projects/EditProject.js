import React, { useState, useEffect, useRef } from 'react';
import { validateQuantity, validateName } from '../../utils/Validators';
import history from '../../utils/History';
import { useReduxState } from '../../utils/State';
import { 
    fetchCategories, 
    fetchSubCategories, 
    getOptions, 
    editProject,
    fetchProductTypes,
    getProject,
    deleteProductLine
} from '../../utils/FetchData';
import CategorySearch from '../../components/search/Category';

import DeleteIcon from '@material-ui/icons/Delete';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Projects.css';

const EditProject = ({match}) => {
  const { projectId } = match.params;
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [errPN, setErrPN] = useState(false);
  const [errDesc, setErrDesc] = useState(false);
  const [errQuantity, setErrQuantity] = useState(false);
  const [successMessage, setSuccessMessage] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [ { user } ] = useReduxState();

  const periodOptions =  getOptions("period");
  const [subCategories, setSubCategories] = useState();
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [projectProducts, setProjectProducts] = useState([]);
  const [existingProjectProducts, setExistingProjectProducts] = useState([]);

  const [projectName, setProjectName] = useState("");
  const category = useRef();
  const subCategory = useRef();
  const selectedProductType = useRef();

  const period = useRef();

useEffect( () => {
    window.scrollTo(0, 0);

    const fetchData = async() => {
      const result = await fetchCategories("categories");
      setCategories(result);
      const p = await getProject(projectId);      
      setDescription(p.data.desc);
      setProjectName(p.data.name);
      setExistingProjectProducts(p.data.lines);      
    }
    fetchData();

},[projectId]);

const handleSelectCategory = async (cat) => {
    const data = await fetchSubCategories(cat.id);
    setSubCategories(data);
    category.current = cat;
}

const handleSelectProduct = (prod) => {  
  selectedProductType.current = prod;
}

const handleSelectSubCategory = async (subCat) => {
    const data = await fetchProductTypes(subCat.id);
    setProducts(data);  
    subCategory.current = subCat;
}

const handleSelectPeriod = (selected) => {
    period.current = selected;
}

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
      if (!errPN && !errDesc && projectProducts.length > 0){

        const projectInfo = {
            projectId,
            userId: user.id,
            name: projectName,
            desc: description,
            productLines: projectProducts.concat(existingProjectProducts),
        }
        const res = await editProject(projectInfo);
        if (res.status === 200){
            displayAlertMessage(res.message, "success");
        }
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

  const handleAddProduct = () => {
    if (category.current && subCategory.current && 
        selectedProductType.current && quantity !== 0 && period.current){
          
          setProjectProducts([...projectProducts, 
            { 
              projectId,
              name: selectedProductType.current.name,
              quantity,
              howOften: period.current,
              type: selectedProductType.current
            }
          ]);
    }else{
      // to show a message
    }
  }

const handleDelete = async (obj) => {

  if (obj.productId){
    const res = await deleteProductLine(obj.productId);
      if ( res.status = 200 ){
          const p = await getProject(projectId);      
          setDescription(p.data.desc);
          setProjectName(p.data.name);
          setExistingProjectProducts(p.data.lines);
      }
  }else{
    const newArr = projectProducts.splice(obj.index, 1);
    setProjectProducts(newArr);
  }
}

  return (
    <>
    <Container component="main" maxWidth="md" className="mt-30">
      <div className="paper">
        <Typography component="h1" variant="h5">
          Edit Project
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
            <Grid container spacing={3} justify="center">
              <Grid item xs={12} sm={8} className="min-height">
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
        </Grid>        
          <br></br>
          <br></br>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={4} className="blue">
                Product Name
            </Grid>
            <Grid item xs={6} sm={4} className="blue">
                Quantity
            </Grid>
            <Grid item xs={6} sm={4} className="blue">
                How Often
            </Grid>
            <Grid item xs={6} sm={4} className="blue">
                
            </Grid>
          </Grid>
          <hr></hr>
            { existingProjectProducts.map((p, i) => 
            <div key={i}>
              <Grid container spacing={3}>
                <Grid item xs={6} sm={4}>
                  <div>{p.type.name}</div>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <div>{p.quantity}</div>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <div>{p.howOften}</div>
                </Grid>
                <Grid item xs={6} sm={4} className="delete-icon">
                  <DeleteIcon onClick={() => handleDelete({ productId : p.id })}/> 
                </Grid>
              </Grid>
            </div>

            )}
            { projectProducts.map((p, i) =>
            <div key={i}>
              <Grid container spacing={3}>
                <Grid item xs={6} sm={4}>
                  <div>{p.name}</div>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <div>{p.quantity}</div>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <div>{p.howOften.name}</div>
                </Grid>
                <Grid item xs={6} sm={4} className="delete-icon">
                  <DeleteIcon onClick={() => handleDelete({ index : i })}/> 
                </Grid>
              </Grid>
            </div>
            )}

          <br></br>
          <Typography component="h1" variant="subtitle1" className="pink">
            Add one or multiple products, which have to be produced!
          </Typography>
          <br></br>
        <hr></hr>
        <br></br>

        <Grid container spacing={3}>
            <Grid item xs={6} sm={4}>
                <CategorySearch size="small" variant="outlined" handleSelected={handleSelectCategory} categories={categories} label="Category"/>
            </Grid>
            <Grid item xs={6} sm={4}>
                <CategorySearch size="medium" variant="outlined" handleSelected={handleSelectSubCategory} categories={subCategories} label="Sub Category" />
            </Grid>
            <Grid item xs={6} sm={4}>
                <CategorySearch size="small" variant="outlined" handleSelected={handleSelectProduct} categories={products} label="Product"/>
            </Grid>
            <Grid item xs={6} sm={4}>
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
            <Grid item xs={6} sm={4}>
                <CategorySearch width={{width: "210px"}} size="medium" variant="outlined" handleSelected={handleSelectPeriod} categories={periodOptions} label="How often?" />
            </Grid>
            <Grid item xs={6} sm={4}>
                <Button
                      fullWidth
                      variant="outlined"
                      color="secondary"
                      style={{ height: "55px"}}
                      onClick={handleAddProduct}
                  >
                      Save
                </Button>
                </Grid>
            </Grid>
          <br></br>
          <hr></hr>
          <br></br>
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
                    Save Changes
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

export default EditProject;