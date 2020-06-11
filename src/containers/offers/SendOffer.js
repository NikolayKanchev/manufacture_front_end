import React, { useEffect, useState } from 'react';
import { getProject } from '../../utils/FetchData';
import { validatePrice, validateName } from '../../utils/Validators';
import { useReduxState } from '../../utils/State';
import history from '../../utils/History';
import { sendOffer } from '../../utils/FetchData';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './SeeOffers.css';


const SendOffers = ({match}) => {
    const [project, setProject] = useState();
    const { projectId } = match.params;
    const [prices, setPrices] = useState([]);
    const [errPrices, setErrPrices] = useState(false);
    const [details, setDetails] = useState("");
    const [date, setDate] = useState("2020-06-23");
    const [errDetails, setErrDetails] = useState(false);
    const [ { user } ] = useReduxState();

    useEffect(() => {
        window.scrollTo(0, 0);

        async function fetchData() {
            const result = await getProject(projectId);            
            setProject(result.data);            
        }

        fetchData();
      }, [projectId]);

      const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        const index = e.currentTarget.id;
        switch(name){
          case "price":                 
            if (!validatePrice(value)){                
                setErrPrices(true);
                const newPrices = [...prices];
                newPrices[index] = value;
                setPrices(newPrices);
            }else{
                setErrPrices(false);
                const newPrices = [...prices];
                newPrices[index] = value;
                setPrices(newPrices);
            }        
            break;
          case "details":
            if (!validateName(value)){                
                setErrDetails(true);
                setDetails(value);
            }else{
                setErrDetails(false);
                setDetails(value);
            } 
            break; 
          case "date":
            setDate(value); 
            break;        
          default:
            return;
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (!details || errDetails){
            return setErrDetails(true)
        }

        if ( !errPrices ) {

            const offerLines = [];

            project.lines.map((line, i) => {
                const newLine = {
                    lineProductId: line.id,
                    price: prices[i],
                }
                offerLines.push(newLine);
            })

            const offer = {
                projectId,
                manufacturerId: user.id,
                validTo: date,
                text: details,
                lines: offerLines
            }

            sendOffer(offer).then(res => {
                if(res.status === 200){
                    history.goBack();
                }
            });
        }
    }
    
    return(
        <>
            { project ? <>
            <Container component="main" maxWidth="md" className="mt-30">
                <div className="paper">
                    <Typography component="h1" variant="h5">
                        Send an offer for <span className="blue">"{ project.name }"</span>!
                    </Typography>
                    <br></br>
                    <br></br>
                    <Typography component="h1" variant="h6" className="pink">
                        Desired Products
                    </Typography>
                    <form onSubmit={handleSubmit} noValidate  className="form send_offer_form">
                        <Grid container spacing={1}>
                            <Grid item xs={6} sm={3} className="blue">
                                Product Name
                            </Grid>
                            <Grid item xs={6} sm={3} className="blue">
                                Quantity
                            </Grid>
                            <Grid item xs={6} sm={3} className="blue">
                                How Often
                            </Grid>
                            <Grid item xs={6} sm={3} className="blue">
                                Your offer
                            </Grid>
                        </Grid>
                        <hr></hr>
                        { project.lines.map((p, i) => 
                            <div key={i}>
                                <Grid container spacing={3}>
                                    <Grid item xs={6} sm={3} className="mt10">
                                        <div>{p.type.name}</div>
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <div>{p.quantity}</div>
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        <div>{p.howOften}</div>
                                    </Grid>
                                    <Grid item xs={6} sm={3}>
                                        
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        id={"" + i}
                                        label="Price"
                                        name="price"
                                        autoComplete="price"
                                        error={errPrices}
                                        value={prices[i] || ""}
                                        onChange={handleChange}
                                    />
                                    </Grid>
                                </Grid>
                            </div>
                        )}
                        <br></br>
                        <br></br>
                        <Grid item xs={12} sm={12} className="min-height">
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                multiline
                                rows={4}
                                id="details"
                                label="More details about the offer"
                                name="details"
                                autoComplete="details"
                                error={errDetails}
                                value={details}
                                onChange={handleChange}
                            />
                        </Grid>
                        <br></br>
                        <Grid container spacing={2} justify="center">
                            <TextField
                                id="date"
                                label="Valid Until"
                                type="date"
                                name="date"
                                // defaultValue="2020-06-22"
                                value={date}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                onChange={handleChange}
                            />
                        </Grid>
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
                                    Send Offer
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
            </>: null}
        </>
    )
}

export default SendOffers;