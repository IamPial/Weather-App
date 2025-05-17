//finding the necessary all elements
const input = document.getElementById('input');
const search = document.getElementById('search-icon');
const weatherImg = document.getElementById('weather-img');
const temp = document.getElementById('temp');
const city = document.getElementById('city');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const invalidCityName = document.getElementById('invalid');
const mainElement = document.getElementById('main');
//get api
const apiKey = '9363f30f37b6150a74f7f30b14645505';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';



async function myWeather(city){


    const response = await fetch( apiUrl + city +`&appid=${apiKey}`);
    // console.log(data);
    

    
    if(response.status == 404){
        invalidCityName.style.display = 'block';
        mainElement.style.display = 'none';
    }

    
    else{

        const data = await response.json();

        document.getElementById('city').innerHTML = data.name
        temp.innerHTML = `${(data.main.temp).toFixed()}°C`; 
        humidity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${data.wind.speed} km/h`;
    
        if(data.weather[0].main === 'Clear'){
            weatherImg.src = '/images/Sunny.svg';
        }
        else if(data.weather[0].main === 'Clouds'){
            weatherImg.src = '/images/Cloudy.svg';
        }
        else if(data.weather[0].main === 'Rain'){
            weatherImg.src = '/images/Rain.svg';
        }
        else if(data.weather[0].main === 'Thunderstorm'){
            weatherImg.src = '/images/Thunderstorms.svg';
        }
        else if(data.weather[0].main === 'Haze'){
            weatherImg.src = '/images/visibility.svg';
        }

        invalidCityName.style.display = 'none';
        mainElement.style.display = 'block';
    }
    
}

search.addEventListener('click', function(){
    if(input.value === ''){
        alert('Please, You must write a city name!');
    }
    myWeather(input.value)
})

myWeather()