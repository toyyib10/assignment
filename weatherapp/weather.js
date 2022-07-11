   let convertedResponse = ''
   let city = '';
   let dateArray = [];
   let lat;
   let long;
   let h;
   let m;
   let s;
   let amPm;
   let loadData = ()=>{
     navigator.geolocation.getCurrentPosition(
        async (position)=>{
          lat = position.coords.latitude;
          long = position.coords.longitude;
          const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1475f9350b35a7b2e9833bcba802614f&units=metric`;
          let response = await fetch(url);
          convertedResponse = await response.json();
          cit.value = convertedResponse.name;
          var val = convertedResponse.main.temp;
          temp.value = val.toFixed(2)
          var description = convertedResponse.weather[0].description;
          des.innerText = description;
          var feel = convertedResponse.main.feels_like
          var humid = convertedResponse.main.humidity;
          var windSpeed = convertedResponse.wind.speed;
          humidity.innerHTML = `Feels Like : ${feel}  <sup class="o">o</sup><span class="c">C</span> <br> Humidity : ${humid}% <br> Wind Speed : ${windSpeed} m/s`
          const url2 =  `https://api.ipgeolocation.io/timezone?apiKey=680cc1c7a6f645ae893d6c578ecb1ac9&lat=${lat}&lon=${long}` 
          let response2 = await fetch(url2);   
          convertedResponse2 = await response2.json();
          dateArray = convertedResponse2.date_time_txt.split(',');
          let [day , date, dat] = dateArray;
          let [ , , time] = dat.split(' ');
          amPm = time.split(':');
          [h , m, s] = amPm;
          if (h <= 12){
            da.innerHTML = `<span class="tim">${time}</span> <span class="amPm">AM</span>`
          }
          else {
            da.innerHTML = `<span class="tim">${time}</span> <span class="amPm">PM</span>`
          }
          dy.innerText = ` ${day} ${date}`
        }
      ) 
    }
    let getData = async ()=>{
      city = cit.value;
      const url2 =  `https://api.ipgeolocation.io/timezone?apiKey=680cc1c7a6f645ae893d6c578ecb1ac9&location=${city}` 
      let response2 = await fetch(url2)   
      convertedResponse2 = await response2.json()
      dateArray = convertedResponse2.date_time_txt.split(',')
      let [day , date, dat] = dateArray
      let [ , , time] = dat.split(' ')
      amPm = time.split(':')
      [h ,m , s] = amPm
      if (h <= 12){
        da.innerHTML = `<span class="tim">${time}</span> <span class="amPm">AM</span>`
      }
      else {
        da.innerHTML = `<span class="tim">${time}</span> <span class="amPm">PM</span>`
      }
      dy.innerText = ` ${day} ${date}`
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1475f9350b35a7b2e9833bcba802614f&units=metric`
      let response = await fetch(url)
      convertedResponse = await response.json()
      var val = convertedResponse.main.temp;
      temp.value = val.toFixed(2)
      var description = convertedResponse.weather[0].description
      des.innerText = description;
      var feel = convertedResponse.main.feels_like
      var humid = convertedResponse.main.humidity
      humidity.innerHTML = `Feels Like : ${feel}  <sup class="o">o</sup><span class="c">C</span> <br> Humidity : ${humid}% <br> Wind Speed : ${windSpeed} m/s`
    }
