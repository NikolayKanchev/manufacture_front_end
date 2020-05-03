// import React, {useEffect, useState, useRef} from 'react';
import React, {useRef} from 'react';
import { useReduxState } from '../../utils/State';
import Button from '@material-ui/core/Button';
import history from '../../utils/History';


const Home = () => {
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop-120)
    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)

    const [ {logedIn} ] = useReduxState();

    // useEffect(() => {
    //     const API_KEY = "0ae446b87f727fa6bdc4d19ec01dcb7d";
    //     const API_URL = "https://api.openweathermap.org/data/2.5/weather?q="+ city.toLowercase +","+ country +"&appid=" + API_KEY;
        
    //     const fetchData = async () => {

    //         const res = await fetch(API_URL);
    //         const resJson = await res.json();
    //         const { id, main, description, icon } = resJson.weather[0];
    //         const { deg, speed } = resJson.wind;
    //         const {temp, pressure, humidity, temp_min, temp_max} = resJson.main;

    //         setWeather([id, main, description, icon]);
    //         setWind([ deg, speed ]);
    //         setMainInfo([ temp, pressure, humidity, temp_min, temp_max ]);
    //     }

    //     if (city !== undefined && city !== "" && country !== undefined && country !== ""){
    //         fetchData();
    //     }
    // }, [city, country]);

    return(
        <>
            { logedIn !== false ? 
                <>
                    You are logged in
                </> : 
                <>
                    <img alt="" width="100%" height="100%" style={{position: "fixed", left: "0", top: "50px", opacity: "30%"}} src={require('../../images/factory2.JPG')} />
                    <div style={{position: "fixed", left: "0", top: "50px", backgroundColor: "#3949ab", width: "100%", height:"100%", opacity: "20%"}}></div>
                    <div style={{marginTop: "200px"}}></div>
                    <h1>Find a Manufacturer</h1>
                    <h4 style={{color:"#f50057"}}>- OR -</h4>
                    <h2>Create a project and get offers from manufacturers</h2>

                    <br></br>
                    <Button variant="contained" color="secondary" onClick={() => history.push("/plans")}>Get Started</Button>
                   
                    <div style={{marginTop: "180px"}}></div>
                    <Button variant="outlined" onClick={executeScroll}> More details </Button>
                    
                    <div style={{ marginTop: "20px" ,width:"100%" , display:"flex", justifyContent:"center"}}>
                        <div style={{width:"700px"}} ref={myRef}>    
                            Developing an idea for a product is meaningless if you can't adequately produce it. 
                            Properly manufacturing your product requires an understanding of the design, materials and budget.
                            For most businesses trying to turn ideas and prototypes into a tangible product, you'll need the 
                            help of a manufacturing facility, especially if you're trying to produce in bulk. Here's what you
                            need to consider as you search for a factory to produce your product.
                            Before you hire a factory and start producing your product, you need to take care of a few beginning
                            steps.

                            Market research. Avoid manufacturing the product if customers aren't willing to buy it. Look at 
                            competitors in the industry and understand how your product provides additional value to your 
                            customers. If you're creating a worse version of a competitor's product, you're unlikely to be 
                            successful.
                            Licensing. The next step is to decide whether you want to produce and sell the product yourself or
                            license the idea to a company with the means and experience to handle it. Licensing is sort of like
                            renting your idea. The company handles everything – the manufacturing, marketing, distribution – and
                            then pays you royalties based on sales. No upfront investment is required. Many large corporations
                            license ideas, as do designated licensing companies. For more information about licensing, read this
                            article.
                            Build and test a prototype. If you go the solo route, you'll need a sample or prototype to make sure
                            the product can be made to your specifications in a factory. Opinions from experts vary on how to go
                            about this. You can make your own, if possible. This step may take several iterations and many, many
                            months to complete. Learn more about producing a product and testing it here.
                            Protect intellectual property. You might also want to protect your intellectual property. You can
                            register for a patent, copyright your work or buy a trademark.
                            Market research. Avoid manufacturing the product if customers aren't willing to buy it. Look at 
                            competitors in the industry and understand how your product provides additional value to your 
                            customers. If you're creating a worse version of a competitor's product, you're unlikely to be 
                            successful.
                            Licensing. The next step is to decide whether you want to produce and sell the product yourself or
                            license the idea to a company with the means and experience to handle it. Licensing is sort of like
                            renting your idea. The company handles everything – the manufacturing, marketing, distribution – and
                            then pays you royalties based on sales. No upfront investment is required. Many large corporations
                            license ideas, as do designated licensing companies. For more information about licensing, read this
                            article.
                            Build and test a prototype. If you go the solo route, you'll need a sample or prototype to make sure
                            the product can be made to your specifications in a factory. Opinions from experts vary on how to go
                            about this. You can make your own, if possible. This step may take several iterations and many, many
                            months to complete. Learn more about producing a product and testing it here.
                            Protect intellectual property. You might also want to protect your intellectual property. You can
                            register for a patent, copyright your work or buy a trademark.
                        </div>
                    </div> 
         

                </>
            }

        </>
    )
}

export default Home;