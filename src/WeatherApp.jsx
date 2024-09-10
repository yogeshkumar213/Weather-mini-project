import { useState } from "react"
import Weather from "./Searchbox"
import Infobox from "./infobox"
export default function WeatherApp(){
    let [weatherInfo,setweatherInfo]=useState({
        city:"Delhi",
        feelslike:"happy",
        temp:"23.4",
        tempMin:"27.4",
        tempMax:"33.7",
        weather:"haze",
    
        humidity:"81%"
    })
    let updateInfo=(info)=>{
        console.log(info)
        setweatherInfo(info)
        
       

    }
    return (
        <>
         <Weather updateInfo={updateInfo}/>
         <Infobox Info={weatherInfo}/>
        </>
    )
}