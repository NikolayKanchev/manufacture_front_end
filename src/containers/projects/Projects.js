import React, {useEffect, useState} from 'react';

import { useReduxState } from '../../utils/State';
import { getProjects } from '../../utils/FetchData';
import { fetchCreateProjectDesc, requestOffers, deleteProductLine } from '../../utils/FetchData';
import history from '../../utils/History';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import CardsList from '../../components/cards/CardsList';

import './Projects.css'
import { Card, Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(1)
    }
  }),
);

const Projects = () => {
    const [projects, setProjects] = useState();
    const [ {user, logedIn} ] = useReduxState();
    const classes = useStyles();
    const card = fetchCreateProjectDesc();

    useEffect(() => {
        window.scrollTo(0, 0);

        if(logedIn){            
            getProjects(user.id).then(p => setProjects(p));
        }
    },[logedIn, user]); 

      const handleRequestOffers = async (e, projectId) => {
          e.preventDefault();
          
          const res = await requestOffers(projectId, user.id);
          if (res.status === 200){
                const newProjects = [...projects];
                newProjects[projectId] = res.project;
                setProjects(newProjects);
          }
      }

    const handleEdit = () => {

    }

    const handleDelete = async (id) => {
            
        const res = await deleteProductLine(id);
        if(res.status = 200){
            getProjects(user.id).then(p => setProjects(p));
        }
    }
    
    return(
        <>
        {/* {!logedIn ?  */}
        {logedIn ? 
            <>
            {projects ? 
                <>
                    <div className="title">Your Projects</div>
                    <div className="ideas-flex">
                        <div className="ideas-main">
                            {projects.map(p => 
                                <div key={p.id}>
                                    <Card className="card-idea">
                                        <div className="small-title blue p-small-title">{p.name}</div>
                                        <div className="edit-icon">
                                            <Fab size="small" color="default" aria-label="edit" className={classes.fab}>
                                                <EditIcon onClick={() => history.push('edit-project/' + p.id)}/> 
                                            </Fab>
                                        </div>
                                        
                                        <div>
                                            <div className="i-column flex-company">
                                                <div className="desc">
                                                    <div className="i-column-title">Description</div>
                                                    <div className="small-italic">{p.desc}</div>
                                                </div>
                                            </div>
                                            <div className="i-column">
                                                <div className="small-title blue p-small-title">Products that you want to produce</div>
                                                <div className="">
                                                    { p.lines.map((line, i) => 
                                                        <div key={i} href="#">
                                                            <div className="flex-company">
                                                                <div className="flex-lines border-top">
                                                                    <div className="i-column">
                                                                        <div className="product-title">Product Name</div>
                                                                        <span className="small-italic ml-5">{line.type.name}</span>
                                                                    </div>
                                                                    <div className="i-column">
                                                                        <div className="product-title">Quantity</div>
                                                                        <span className="small-italic ml-5">{line.quantity}</span>
                                                                    </div>
                                                                    <div className="i-column">
                                                                        <div className="product-title">For Period</div>
                                                                        <span className="small-italic ml-5">{line.howOften}</span>
                                                                    </div>
                                                                    <div className="i-column mw300 ta-justify" >
                                                                        <div className="product-title">Description</div>
                                                                        <span className="small-italic">{line.type.desc}</span>
                                                                    </div>
                                                                    <div className="delete-icon">
                                                                        <DeleteIcon onClick={() => handleDelete(line.id)}/> 
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <br></br>
                                        </div>
                                        { !p.offersRequested ? 
                                            <>
                                                <br></br>
                                                <div><Button variant="outlined" color="secondary" onClick={(e) => handleRequestOffers(e, p.id)}>Request Offers</Button></div>
                                            </>:null
                                        }
                                        <br></br>
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
                    <div className="ideas-flex">
                        <div className="no-ideas-cont">
                            <div className="title">You don't have any projects yet!</div>
                            <div className="no-ideas-btn"><Button variant="outlined" color="primary" onClick={() => history.push("/create-project")}>Create Project</Button></div>
                        </div>
                    </div>
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