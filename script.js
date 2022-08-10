var weatherContainer=document.getElementById('weatherContainer')

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=50f517015e5efe89eef1307b37e69a2e

async function getWeatherData(){
  var cityName=document.getElementById('cityName').value
  console.log(cityName)
    let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=50f517015e5efe89eef1307b37e69a2e`)
    let res=await data.json()
    console.log(res)


weatherContainer.innerHTML=`
<div class="row g-0">
            <div class="col-md-4">
                <img src="weatherapp.jpg" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Weather Update ${cityName}</h5>
                    <p class="card-text m-0"><small class="text-muted">Humidity: ${res.main.humidity}</small></p>
                    <p class="card-text m-0"><small class="text-muted">Wind: ${res.wind.speed}</small></p>
                    <p class="card-text m-0"><small class="text-muted">Description: ${res.weather[0].description}</small></p>
                    <p class="card-text m-0"><small class="text-muted">Temperature: ${res.main.temp}</small></p>
                </div>
            </div>
        </div>
`
}
getWeatherData()