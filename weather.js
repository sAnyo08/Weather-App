const apiKey="7950d156c43820d06f68fde51fb92265"
//const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&Units=metric&q="
const apiUrl="https://api.openweathermap.org/data/2.5/weather"

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city){
    const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`
    const response = await fetch(url)
    let data = await response.json()

    document.querySelector('.weather').style.display = "flex"

    document.querySelector('.city').innerHTML=data.name
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+"°c"
    document.querySelector('.humidity').innerHTML=data.main.humidity +"%"
    document.querySelector('.wind').innerHTML=data.wind.speed +"km/h"

    if(data.weather[0].main == "clouds"){
        weatherIcon.src="clouds.jpg"
    }
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src="Rain.jpg"
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src=""
    }
    else if(data.weather[0].main == 'Mist'){
        weatherIcon.src="mist.jpg"
    }
}

searchBtn.addEventListener("click",function(){
    checkWeather(searchBox.value)
})