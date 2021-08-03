const API_KEY="018d4100068a2e18ec3c5d1d0fa68367"
function geoOk(position){
    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response =>response.json()).then(data=>{
        const weather=document.querySelector("#weather span:first-child");
        const city=document.querySelector("#weather span:last-child");
        city.innerText=data.name;
        weather.innerText = `${data.weather[0].main},${data.main.temp}`;
    });
}
function geoError(){
    alert("cannot find you");
}
navigator.geolocation.getCurrentPosition(geoOk,geoError);