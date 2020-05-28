import React, {useRef} from 'react';
import { useReduxState } from '../../utils/State';
import Button from '@material-ui/core/Button';
import history from '../../utils/History';
import CardsList from '../../components/cards/CardsList';
import { fetchHomeInfoCards } from '../../utils/FetchData';
import './Home.css'

const Home = () => {
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop-120)
    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)

    const [ {logedIn, isManufacturer} ] = useReduxState();

    const cards = fetchHomeInfoCards(isManufacturer);

    return(
        <>
            {/* { logedIn !== false ? 
                <>
                    You are logged in
                </> :  */}
            { isManufacturer ? 
            <>
                <div className="img-container img-transition">
                    <img alt="" width="100%" height="500px" style={{left: "0", marginTop: "-35px", opacity: "50%", transition: "5s"}} src={require('../../images/23322.png')} />
                </div>                
                <div style={{position: "relative", marginTop: "-400px"}}>
                    <h1> - Make your company and products visible!</h1>
                    <h1> - See projects, who needs manufacturer!</h1>
                    <h1> - Receive direct messages from interested parties!</h1>
                    <h1> - Send direct offers!</h1>

                </div>

                <br></br>
                <Button variant="contained" color="secondary" onClick={() => history.push("/login")}>Get Started</Button>
                
                <div className="man-details"></div>
                <Button variant="outlined" onClick={executeScroll}> More details </Button>
                
                <div ref={myRef} style={{marginTop: "20px"}}>                        
                    <CardsList cards={cards} type="row"/>
                </div>
            </> : 
                <>
                    <div className="img-container img-transition">
                        <img alt="" width="100%" height="500px" style={{left: "0", marginTop: "-35px", opacity: "50%", transition: "5s"}} src={require('../../images/23322.png')} />
                    </div>                    
                    <div style={{position: "relative", marginTop: "-400px"}}>
                        <h1>Find a Manufacturer</h1>
                        <h2 style={{color:"#f50057"}}>- OR -</h2>
                        <h1>Create a project and get offers from manufacturers</h1>
                    </div>

                    <br></br>
                    <Button variant="contained" color="secondary" onClick={() => history.push("/login")}>Get Started</Button>
                   
                    <div className="details"></div>
                    <Button variant="outlined" onClick={executeScroll}> More details </Button>
                    
                    <div ref={myRef} style={{marginTop: "20px"}}>                        
                        <CardsList cards={cards} type="row"/>
                    </div>
                </>
            }
        </>
    )
}

export default Home;