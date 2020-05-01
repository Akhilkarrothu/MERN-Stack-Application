import React from "react";
import  "../../styles.css"
import logo from "../SignIn/yelp_og_image.png"


export default function exit() {
    return <div className="App" style={{backgroundImage: `url(${logo})` }}>
        <div className="inputdiv" >
            <div>
                <h1>You have sucessfully closed the application</h1>
                <h2>Please close the browser</h2>
            </div>
        </div>
    </div>;

}