import React from "react";

export default function WeatherForecast(){
    return(
        <div className="WeatherForecast row">
                        <div className="col">
                            <div class="WeatherForecastPreview">
                                <div class="forecast-time">Sun</div><canvas width="38" height="38"></canvas>
                                <div class="forecast-temperature"><span class="forecast-temperature-max">15°</span><span
                                        class="forecast-temperature-min">12°</span></div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="WeatherForecastPreview">
                                <div class="forecast-time">Mon</div><canvas width="38" height="38"></canvas>
                                <div class="forecast-temperature"><span class="forecast-temperature-max">17°</span><span
                                        class="forecast-temperature-min">12°</span></div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="WeatherForecastPreview">
                                <div class="forecast-time">Tue</div><canvas width="38" height="38"></canvas>
                                <div class="forecast-temperature"><span class="forecast-temperature-max">19°</span><span
                                        class="forecast-temperature-min">12°</span></div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="WeatherForecastPreview">
                                <div class="forecast-time">Wed</div><canvas width="38" height="38"></canvas>
                                <div class="forecast-temperature"><span class="forecast-temperature-max">17°</span><span
                                        class="forecast-temperature-min">12°</span></div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="WeatherForecastPreview">
                                <div class="forecast-time">Thu</div><canvas width="38" height="38"></canvas>
                                <div class="forecast-temperature"><span class="forecast-temperature-max">15°</span><span
                                        class="forecast-temperature-min">11°</span></div>
                            </div>
                        </div>
                    </div> 
    )
}