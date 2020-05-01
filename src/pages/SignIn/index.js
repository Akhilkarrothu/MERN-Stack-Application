import React from "react";
import  "../../styles.css"

import logo from "../SignIn/yelp_og_image.png"
//import Background from '../../YelpLogo.png';

// var sectionStyle = {
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundImage: `url(${Background})`
// };

export default function SignIn() {
    return <div className="App" style={{backgroundImage: `url(${logo})` }}>
           <div className="inputdiv" >
               <div>
               <h1>Welcome to Yelp Search!!</h1>

            <form className="example" action="http://localhost:4000/find/business/" method="post">
                <label className="radio-inline"></label>
                <input type="radio" name="optradio" value="Name" checked/>Name
                <label className="radio-inline"/>
                <input type="radio" name="optradio" value="Location" />Location
                <label className="radio-inline"></label>
                <input type="radio" name="optradio" value="Category" />Category
                <br/><input type="text" id="name" name="name" className="inputtext"/><br/>
                <input type="reset" value="Reset" className="inputreset"/><br/>
                <input type="submit" value="Submit" className="inputsubmit"/><br/>
            </form><br/>
               </div>
           </div>
        </div>;

}

//  <a href="http://localhost:3000/register"><button className="button button5">Register new user</button></a>