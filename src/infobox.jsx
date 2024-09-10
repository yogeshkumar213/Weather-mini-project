import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function Infobox({Info}){
  // console.log(weatherInfo)
    const url="https://media.istockphoto.com/id/1322096928/photo/hot-summer-sunlight-rays-pouring-through-human-hand-hand-covering-sun-light-heat-temperature.webp?a=1&b=1&s=612x612&w=0&k=20&c=FJXHh8eOCvGTfyDBbKMgWWtE966qr3w5-rWvz7e0cO4="
 const COLD_URL="https://media.istockphoto.com/id/160840799/photo/icicles-and-snowstorm.webp?a=1&b=1&s=612x612&w=0&k=20&c=2HCnfJ8Cpe1EF1pSW15UsUC3ZwpPhbkv7A30pisf_iw="
 const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEhPVCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
 const RAIN_URL="https://media.istockphoto.com/id/1164520030/photo/rain-on-umbrella-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=956PGzmeuwcAxXARRp8qp99MeVAMZIhAzi5WxGb_ki0="
   
    return(
        <>
        <h1>WeatherInfo-</h1>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Info.humidity>80?COLD_URL:Info.temp>15?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
         <b>{Info.city}
          {
            Info.humidity>80?<ThunderstormIcon/>:Info.temp>15?<LightModeIcon/>:<AcUnitIcon/>
          }
         </b>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         
         <div>Tempreature={Info.temp}&deg;C</div>
         <p>Humidity={Info.humidity}</p>
        <p>Min Temp={Info.tempMin}&deg;C</p>
         <p>Max Temp={Info.tempMax}&deg;C</p>
         <p>The weather can be described as <i>{Info.weather}</i> feels like as{Info.feelsLike}</p>
         

        </Typography>
      </CardContent>
      <CardActions>
   
      </CardActions>
    </Card>
        </>
    )
}