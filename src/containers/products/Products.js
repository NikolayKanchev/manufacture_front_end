import React, { useEffect, useState, useRef } from 'react';
import { useReduxState } from '../../utils/State';
import { getProducts } from '../../utils/FetchData';
import CategorySearch from '../../components/search/Category';
import { validateQuantity, validateName } from '../../utils/Validators';
import { 
    fetchCategories, 
    fetchSubCategories, 
    getOptions,
    addProduct
} from '../../utils/FetchData';
import history from '../../utils/History';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import './Products.css';


const useStyles = makeStyles((theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(1),
    }
  }),
);

const Products = () => {
    let [ { user } ] = useReduxState();
    const classes = useStyles();

    const [products, setProducts] = useState();
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [capacity, setCapacity] = useState(0);
    const [minOrder, setMinOrder] = useState(0);
    const [subCategories, setSubCategories] = useState();
    const [categories, setCategories] = useState();
    const periodOptions =  getOptions("capacityPeriod");

    const [errPN, setErrPN] = useState(false);
    const [errDesc, setErrDesc] = useState(false);
    const [errCapacity, setErrCapacity] = useState(false);
    const [errMinOrder, setErrMinOrder] = useState(false);

    const period = useRef();
    const category = useRef();
    const subCategory = useRef();
    const unitType = useRef();
    const unitTypeOptions = getOptions("productType");

    useEffect(() => {
        async function fetchData() {
            const result1 = await fetchCategories("categories");
            const result2 = await getProducts(user.id);
            setCategories(result1);        
            setProducts(result2);
        }
        fetchData();
      }, [user]);

    const handleSelectCategory = async (cat) => {
        const data = await fetchSubCategories(cat.id);
        setSubCategories(data);
        category.current = cat;
    }

    const handleSelectSubCategory = async (subCat) => {
        subCategory.current = subCat;
    }

    const handleSelectPeriod = (selected) => {
        period.current = selected;
    }

    const handleSelectUnitType = (selected) => {
        unitType.current = selected;
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
    
        if (!validateName(productName)) { setErrPN(true); }
        if (description === "") { setErrDesc(true); }
    
        if(productName !== "" && description !== ""){      
          if (!errPN && !errDesc){
    
            const productType = {
                categoryId: subCategory.current.id,
                name: productName,
                desc: description
            }

            const productDetails = {
                minOrder: minOrder,
                unitType: unitType.current.name,
                capacity,
                capacityPeriod: period.current.name,
                type: productType,
                manufacturerId: user.id
            }

            console.log(productDetails);
            

            const res = await addProduct(productDetails);
            if (res.status === 200){
                const result2 = await getProducts(user.id);
                setProducts(result2);
                // displayAlertMessage(res.message, "success");
            }
          }else{
            // displayAlertMessage("Fill out all required fields!", "error");
          }
        }else{
            // displayAlertMessage("You have to fill out all of the required fields!", "error");
        }
    }
    
    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        switch(name){
          case "productName":
            setProductName(value);
            if (value === ""){
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
          case "capacity":        
            if (!validateQuantity(+value)){
              setErrCapacity(true);
            }else{
                setErrCapacity(false);
                setCapacity(+value);
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
          default:
            return;
        }
      }
    
    return(
        <>
            { products ? <>
                <Typography component="h1" variant="h5">
                    <span className="pink">Your Products!</span>
                </Typography>
                <br></br>
                <div  className="products-cont">
                    <div className="prod-sub-cont">
                        <Grid container spacing={1}>
                            <Grid item xs={6} sm={2} className="blue">
                                Product Name
                            </Grid>
                            <Grid item xs={6} sm={4} className="blue">
                                Description
                            </Grid>
                            <Grid item xs={6} sm={2} className="blue">
                                Production Capacity
                            </Grid>
                            <Grid item xs={6} sm={2} className="blue">
                                For Period
                            </Grid>
                            <Grid item xs={6} sm={2} className="blue">
                                Minimum Order
                            </Grid>
                        </Grid>
                        <hr></hr>
                    </div>
                </div>
                { products.map((p, i) => 
                    <div key={i} className="products-cont">
                        <div key={p.id} className="prod-sub-cont">
                            <Grid container spacing={1}>
                                <Grid item xs={6} sm={2}>
                                    {p.type.name}
                                </Grid>
                                <Grid item xs={6} sm={4}>
                                    <span className="p-desc">{p.type.desc}</span>
                                </Grid>
                                <Grid item xs={6} sm={2}>
                                    {p.capacity}/{p.unitType}
                                </Grid>
                                <Grid item xs={6} sm={2}>
                                    {p.capacityPeriod}
                                </Grid>
                                <Grid item xs={6} sm={2}>
                                    {p.minOrder}
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                )}
                </>: 
                <>
                    <Typography component="h1" variant="h5">
                        <span className="blue">You dont have any products yet!</span>!
                    </Typography>
                </>
            }
            <br></br>
            <br></br>
                <Typography component="h1" variant="subtitle1" className="pink">
                    Add another product
                </Typography>
            <div className="prod-form">
                <form onSubmit={handleSubmit} noValidate  className="form create_product_form">
                <hr></hr>
                <br></br>
                <Grid container spacing={3}>
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
                    <Grid item xs={12} sm={3} className="min-height">
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        multiline
                        rows={4}
                        id="description"
                        label="Decribe your product!"
                        name="description"
                        autoComplete="desc"
                        error={errDesc}
                        value={description}
                        onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <CategorySearch size="small" variant="outlined" handleSelected={handleSelectCategory} categories={categories} label="Category"/>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <CategorySearch size="medium" variant="outlined" handleSelected={handleSelectSubCategory} categories={subCategories} label="Sub Category" />
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
                        <CategorySearch width={{width: "210px"}} size="medium" variant="outlined" handleSelected={handleSelectPeriod} categories={periodOptions} label="Specify the period!" />
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
                        <CategorySearch width={{width: "210px"}} size="medium" variant="outlined" handleSelected={handleSelectUnitType} categories={unitTypeOptions} label="Unit Type" />
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
                            Add Product
                        </Button>
                    </Grid>
                </Grid>  
                </form>
            </div>
        </>
    )
}

export default Products;