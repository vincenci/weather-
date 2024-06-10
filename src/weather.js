import React from "react";
import "./weather.css"
import WeatherForecast from "./foreast";
import Footer from "./footer";
export default function Weather(){
    return (
        
      <div className="weather">
          
                    <div class="WeatherInfo">
                        <div class="row">
                            <div class="col-6">
                                <h1>San Francisco</h1>
                                <ul>
                                    <li><span>Monday 09:40</span>, broken clouds</li>
                                    <li>Humidity: <strong>89%</strong>, Wind: <strong>5.66km/h</strong></li>
                                </ul>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-8">
                                <div class="temperature-container d-flex justify-content-end"><canvas width="52"
                                        height="52"></canvas>
                                    <div><span class="temperature">12</span><span class="unit">°C</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                  <WeatherForecast/> 
                  <Footer/>
            </div>
        
        
 )   
}
