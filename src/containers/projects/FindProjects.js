import React, {useEffect, useState} from 'react';

import { useReduxState } from '../../utils/State';
import { getProjects } from '../../utils/FetchData';
import { fetchCreateProjectDesc, requestOffers } from '../../utils/FetchData';
import history from '../../utils/History';

import AddIcon from '@material-ui/icons/Add';
import CardsList from '../../components/cards/CardsList';

import './Projects.css'
import { Card, Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(1),
    }
  }),
);

const Projects = () => {
    const [projects, setProjects] = useState();
    const [ {id, logedIn} ] = useReduxState();
    const classes = useStyles();

    const card = fetchCreateProjectDesc();

    useEffect(() => {
        window.scrollTo(0, 0);

        async function fetchData() {
            const result = await getProjects("all");
            setProjects(result);
        }

        if (logedIn){
        // if (1){
            fetchData();
        }
      }, [id, projects, logedIn]);

      const handleRequestOffers = async (e, projectId) => {
          e.preventDefault();
          
          const res = await requestOffers(projectId, id);
          if (res.status === 200){
                const newProjects = [...projects];
                newProjects[projectId] = res.project;
                setProjects(newProjects);
          }
      }
    
    return(
        <>
        {logedIn ? 
            <>
            {projects ? 
                <>
                    <div className="title">Active Projects</div>
                    <div className="ideas-flex">
                        <div className="ideas-main">
                            {projects.map(p => 
                                <div key={p.id}>
                                    <Card className="card-idea">
                                        <div className="small-title blue p-small-title">{p.name}</div>
                                        <div className="ideas-flex-space-arround">
                                            <div className="i-column flex-company">
                                                <div className="desc">
                                                    <div className="i-column-title">Description</div>
                                                    <div className="small-italic">{p.description}</div>
                                                </div>
                                            </div>
                                            <div className="i-column">
                                            <div className="i-column-title">Category</div>
                                                <div className="small-italic blue">{p.category} / <span className="pink">{p.subCategory}</span></div>
                                                <br></br>
                                                <div className="i-column-title">Materials</div>
                                                <div className="flex-company">
                                                    { p.materials.map((m, i) => 
                                                        <div key={i}>
                                                            {p.materials.length - 1 === i? 
                                                                <span className="small-italic blue ml-5">{m}</span>: 
                                                                <span className="small-italic blue ml-5">{m}, </span>
                                                            }
                                                        </div>
                                                    )}
                                                </div>
                                                <br></br>
                                                <div className="i-column-title">Sizes</div>
                                                <div className="flex-company">
                                                    { p.sizes.map((s, i) => 
                                                        <div key={i}>
                                                            {p.sizes.length - 1 === i? 
                                                                <span className="small-italic blue ml-5">{s}</span>: 
                                                                <span className="small-italic blue ml-5">{s}, </span>
                                                            }
                                                        </div>
                                                    )} 
                                                </div>
                                            </div>
                                            <div className="i-column">
                                                <div className="i-column-title">Desired Quantity</div>
                                                <div className="small-italic blue">{p.quantity} pcs</div>
                                                <br></br>
                                                <div className="i-column-title">For Period</div>
                                                <div className="small-italic blue">{p.forPeriod}</div>
                                                <br></br>
                                                <div className="i-column-title">Status</div>
                                                <div className="small-italic blue">{p.statusMessage}</div>

                                                <br></br>
                                                <div><Button variant="outlined" color="secondary" onClick={() => history.push("/createOffer/" + p.id)}>Create Offer</Button></div>
                                                {/* { p.offersRequested && p.offersReceived ? 
                                                   <>
                                                        <br></br>
                                                        <div><Button variant="outlined" color="secondary" onClick={() => history.push("/seeOffers/" + p.id)}>See Offers</Button></div>
                                                   </>:null
                                                }
                                                { !p.offersRequested ? 
                                                   <>
                                                        <br></br>
                                                        <div><Button variant="outlined" color="secondary" onClick={(e) => handleRequestOffers(e, p.id)}>Request Offers</Button></div>
                                                   </>:null
                                                } */}
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="add-btn">
                       <Fab color="secondary" aria-label="add" className={classes.fab}>
                            <AddIcon onClick={() => history.push("/create-project")}/> 
                        </Fab> 
                    </div>
                </>: 
                <>
                    {/* <div className="ideas-flex">
                        <div className="no-ideas-cont">
                            <div className="title">You don't have any projects yet!</div>
                            <div className="no-ideas-btn"><Button variant="outlined" color="primary" onClick={() => history.push("/create-project")}>Create Project</Button></div>
                        </div>
                    </div> */}
                    <div className="ideas-flex">
                        <div>
                            <div className="title pink">How does it work?</div>
                            <div className="small-italic blue">See down below!</div>
                        </div>
                    </div>
                    <div className="ideas-flex">
                        <div className="no-ideas-info">
                            <CardsList cards={[card]} type="row"/>   
                        </div>
                    </div>
                </>
            }
            </>:
            <>
                <div className="ideas-flex">
                    <div className="not-loged-in">
                        <div className="ideas-title">You have to login</div>
                        <div className="ideas-title">in order to see this section!</div>
                        <Button style={{marginTop: "20px"}} variant="contained" color="secondary" onClick={() => history.push("/login")}>Login</Button>
                    </div>
                </div>
            </>
        }
        </>
    )
}

export default Projects;