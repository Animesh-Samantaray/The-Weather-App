const apiKey="0336a0001799a2b050c5ddc99f4d0a2c";
let w=document.querySelector(".weather-icon");
let error=document.querySelector(".error");
document.querySelector("button").addEventListener('click',()=>{
     let cityName=document.querySelector("input").value;
     findWeather(cityName);
})
async function findWeather(x){
     let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${x}&units=metric`;
     const response = await fetch(apiUrl + `&appid=${apiKey}`);
     let data=await response.json();
     if(response.status==404){
          error.style.display="block";
          document.querySelector(".weather").style.display="none";
     }
     console.log(data);

     document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+" °C";
     document.querySelector(".city").innerHTML=data.name;
     document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
     document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
     if(data.weather[0].main == "Mist"){
          w.src="mist.png";
     }
     else if(data.weather[0].main == "Clouds"){
          w.src="clouds.png";
     }
     else if(data.weather[0].main == "Rain"){
          w.src="rain.png";
     }
     else if(data.weather[0].main == "Snow"){
          w.src="snow.png";
     }
     else if(data.weather[0].main == "Drizzle"){
          w.src="drizzle.png";
     }
     else{
          w.src="clear.png";
     }
     document.querySelector(".weather").style.display="block";
     error.style.display="none";
     document.querySelector("input").value="";

}

