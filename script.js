const inputBox =document.querySelector('.inputBox');
const search = document.getElementById('searchBtn');
const weatherImage = document.querySelector('.weatherImg');
const temparature = document.querySelector('.temp');
const weatherDes = document.querySelector('.description');
const humid = document.getElementById('humid');
const wind = document.getElementById('windSpeed');
// const backgroundColor = document.querySelector('container');



// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

async function checkWeather(city){
    const Key = "fe3a5df33b4ef9109aee0b3addba071e";  
    
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}`;
  
  const data = await fetch(`${url}`).then(response => response.json()); 
  
  console.log(data);

temparature.innerHTML = Math.round(data.main.temp - 273.15)+"\u00b0c";

   weatherDes.innerHTML = data.weather[0].main;
    wind.innerHTML = data.wind.speed+'\u2190';
    humid.innerHTML = data.main.humidity+'\&#37';

    switch (data.weather[0].main) {
        case 'Clouds':
            weatherImage.src = "/image/clouds.png";
            document.querySelector('.container').style.backgroundColor = "#808080";
            break;
            case 'Haze':
                weatherImage.src= "/image/haze.png";
                document.querySelector('.container').style.backgroundColor = "#D3D3D3";
                break;
                case 'Clear':
                    weatherImage.src= "/image/sunny.png";
                    document.querySelector('.container').style.backgroundColor = "#5fff";
                    break;
                    case 'Rain':
                        weatherImage.src= "/image/rain.png";
                        document.querySelector('.container').style.backgroundColor = " #000999";
                        // document.querySelector('.container').style.oundColor = " #fff";
                        break;
                        case 'Snow':
                            weatherImage.src= "/image/snow.jpg";
                            document.querySelector('.container').style.backgroundColor = "#fff";
                            break;
                            case 'Mist':
                                weatherImage.src= "/image/mist.png";
                                document.querySelector('.container').style.backgroundColor = "lime";



    }
}


search.addEventListener('click',()=>{
    checkWeather(inputBox.value)
});

