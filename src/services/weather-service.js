
const API_TOKEN = '15ca787f2d191cf1f09525804a2ce85d';
const API_URL = 'https://api.openweathermap.org/data/2.5/forecast';

 async function getWeatherDetailsForCity(city){

    const weathrPromise = await fetch(`${API_URL}?appid=${API_TOKEN}&q=${city}&units=metric`);
    if(!weathrPromise.ok) {
        throw new Error(weathrPromise.text);
    }
    let data = await weathrPromise.json();  
    let fiveDays = [];
    data.list.forEach(data => {
        if(!fiveDays.find(x => x?.key == data.dt_txt?.slice(0,data.dt_txt?.indexOf(' ')))) {
            fiveDays.push({
                key:  data.dt_txt?.slice(0,data.dt_txt?.indexOf(' ')),
                data
               });
        }
          
        });

        console.log(fiveDays);
    return fiveDays.slice(0,5);
}   

export { 
    getWeatherDetailsForCity
}