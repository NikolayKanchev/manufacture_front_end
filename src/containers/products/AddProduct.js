import React, { useState, useEffect, useRef } from 'react';
import { validateQuantity, validateName } from '../../utils/Validators';
import history from '../../utils/History';
import { useReduxState } from '../../utils/State';
import { 
    fetchCategories, 
    fetchSubCategories, 
    getOptions, 
    addProduct 
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
import './Products.css';

const AddProduct = () => {
const [ { id } ] = useReduxState();

const [productName, setProductName] = useState("");
const [description, setDescription] = useState("");
const [minOrder, setMinOrder] = useState(0);
const [minOrderStr, setMinOrderStr] = useState("");
const [capacity, setCapacity] = useState(0);

const [errPN, setErrPN] = useState(false);
const [errDesc, setErrDesc] = useState(false);
const [errMinOrder, setErrMinOrder] = useState(false);
const [errCapacity, setErrCapacity] = useState(false);

const [successMessage, setSuccessMessage] = useState(undefined);
const [errorMessage, setErrorMessage] = useState(undefined);
const [subCategories, setSubCategories] = useState();

const categories = fetchCategories();
const materials =  getOptions("materials");
const sizes =  getOptions("sizes");
const colors =  getOptions("colors");
const productType =  getOptions("productType");
const capacityPeriodOptions =  getOptions("capacityPeriod");

const category = useRef();
const subCategory = useRef();
const selectedSizes = useRef([]);
const selectedMaterials = useRef([]);
const selectedColors = useRef([]);
const selectedProductTypes = useRef();
const img = useRef();

const period = useRef("Just once");

// I have to add companyID

// id: "0",
// img: "https://s3.amazonaws.com/uifaces/faces/twitter/therealmarvin/128.jpg", 
    // name: "Product1", 
    // desc: "The best", 
    // minOrder: 12,
    // minOrderStr: "pcs",
    // capacity: 5000,
    // capacityPeriod: "per month",
    // materials: "textil, plastic",
    // sizes: "l, xl, xxl, xxxl"
    // colors: "red, green, pink, black",

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

const handleSelectedColors = (selected) => {
    selectedColors.current = selected;
}

const handleSelectCapacityPeriod = (selected) => {
    period.current = selected;
    console.log(selected);
    
}

const handleSelectedProductType = (selected) => {
    selectedProductTypes.current = selected;    
}

const handleSelectedMaterials = (selected) => {
    selectedMaterials.current = selected;    
}

const handleImgUpload = (e) => {
    img.current = e.target.files[0];
    console.log(img.current);
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

    if (!validateName(productName)) { setErrPN(true); }
    if (description === "") { setErrDesc(true); }

    if(productName !== "" && description !== ""){      
      if (!errPN && !errDesc){

        const productData = {
            img: img.current.name,
            // id: "10",
            // img:"https://s3.amazonaws.com/uifaces/faces/twitter/therealmarvin/128.jpg",
            name: productName,
            desc: description,
            materials: selectedMaterials.current.current,
            sizes: selectedSizes.current.current,
            minOrder: minOrder,
            minOrderStr: minOrderStr,
            capacity: capacity,
            capacityPeriod: period.current,
            materials: selectedMaterials.current.current,
            sizes: selectedSizes.current.current,
            colors: selectedColors.current.current,
            // category: category.current,
            // subCategory: subCategory.current,
        }

        addProduct(productData, '1', '0', id);
        history.push('/products');

        // const res = await createProject(productData, id);
        // if (res.status === 200){
        //     displayAlertMessage(res.message, "success");
        // }
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
      case "productName":
        setProductName(value);
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
      case "minOrder":        
        if (!validateQuantity(+value)){
          setErrMinOrder(true);
        }else{
            setErrMinOrder(false);
            setMinOrder(+value);
        }        
        break;
      case "capacity":        
        if (!validateQuantity(+value)){
          setErrCapacity(true);
        }else{
            setErrCapacity(false);
            setCapacity(+value);
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
          Add New Product
        </Typography>
        <Typography component="h1" variant="h6" className="pink">
          So people can find it!
        </Typography>
        <form onSubmit={handleSubmit} noValidate  className="form create_project_form">
          <Grid container spacing={3} justify="center">
            <Grid item xs={6} sm={3}>
            <TextField
                autoComplete="pname"
                error={errPN}
                name="productName"
                variant="outlined"
                required
                fullWidth
                id="productName"
                label="Product Name"
                autoFocus
                value={productName}
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
                id="minOrder"
                label="Minimum Order"
                name="minOrder"
                autoComplete="minOrder"
                error={errMinOrder}
                value={minOrder === 0 ? "" : minOrder}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
                <CategorySearch size="medium" variant="outlined" handleSelected={handleSelectedProductType} categories={productType} label="type" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <MultipleSelect size="medium" variant="outlined" handleSelected={handleSelectedMaterials} multiOptions={materials} label="Materials" />
            </Grid>           
            <Grid item xs={12} sm={6}>
                <MultipleSelect size="medium" variant="outlined" handleSelected={handleSelectedSizes} multiOptions={sizes} label="Sizes" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <MultipleSelect size="medium" variant="outlined" handleSelected={handleSelectedColors} multiOptions={colors} label="Colors" />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="capacity"
                label="Production Capacity"
                name="capacity"
                autoComplete="capacity"
                error={errCapacity}
                value={capacity === 0 ? "" : capacity}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
                <CategorySearch size="medium" variant="outlined" handleSelected={handleSelectCapacityPeriod} categories={capacityPeriodOptions} label="Capacity Period" />
            </Grid>
            <Grid item xs={12} sm={6} className="min-height">
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                rows={4}
                id="capacity"
                label="Product Decribtion"
                name="description"
                autoComplete="description"
                error={errDesc}
                value={description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} className="min-height">
                <input type="file" name="file" onChange={handleImgUpload}/>
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

export default AddProduct;