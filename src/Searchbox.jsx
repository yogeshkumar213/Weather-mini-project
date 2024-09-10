import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useState } from "react";
export default function Weather({ updateInfo }) {
  let [City, setCity] = useState("");
  let [Error, setError] = useState(false);
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_key = "18b200987a092e075cd25257ca26376e";
  
    let getWhetherInfo = async () => {
      try {
      // console.log("called");
      let response = await fetch(
        //generally our temp is in matric means degree celcius
        `${API_URL}?q=${City}&appid=${API_key}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    }catch (err) {
      throw err;
    }
  } 

  function handleChange(event) {
    let result = event.target.value;
    //    console.log(result)
    setCity(result);
  }

  async function handleSubmit(event) {
    try {
      console.log("submit");
      event.preventDefault();
      setCity("");
      let info = await getWhetherInfo();
      updateInfo(info);

      // setCity("")
    } catch (err) {
      setError(true);
    }
  }

  return (
    <>
      <h2>Search for whether whether</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="city Name"
          variant="outlined"
          value={City}
          onChange={handleChange}
          required
        />
        <br></br> <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        {Error && <p style={{ color: "red" }}><b>No such place exist!</b></p>}
      </form>
    </>
  );
}
