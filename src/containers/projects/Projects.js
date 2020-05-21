import React, {useEffect, useState} from 'react';

import { useReduxState } from '../../utils/State';
import { getProjects } from '../../utils/FetchData';
import { fetchCreateProjectDesc } from '../../utils/FetchData';
import history from '../../utils/History';

import AddButton from '../../components/buttons/Button';
import CardsList from '../../components/cards/CardsList';

import './Projects.css'
import { Card, Button } from '@material-ui/core';


const Projects = () => {
    const [projects, setProjects] = useState();
    const [ {id, logedIn} ] = useReduxState();

    const card = fetchCreateProjectDesc();

    useEffect(() => {
        window.scrollTo(0, 0);

        async function fetchData() {
            const result = await getProjects(id);
            // const result = await getProjects(2);
            setProjects(result);
        }

        if (logedIn){
        // if (1){
            fetchData();
        }
      }, [id, projects, logedIn]);
    
    return(
        <>
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
                                        <div>{p.name}</div>
                                    </Card>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="add-btn"><AddButton variant="add" color="secondary"/></div>
                </>: 
                <>
                    <div className="ideas-flex">
                        <div className="no-ideas-cont">
                            <div className="title">You don't have any projects yet!</div>
                            <div className="no-ideas-btn"><Button variant="outlined" color="primary">Create Project</Button></div>
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