    let convertedResponse = ''
    let city = '';
    let dateArray = [];
    let lat;
    let long;
    async function loadData(){
    navigator.geolocation.getCurrentPosition(
        (position)=>{
          lat = await position.coords.latitude;
          long = await position.coords.longitude;
          console.log(long , lat)
        }
      ) 
      console.log(long , lat)
      const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=1475f9350b35a7b2e9833bcba802614f`;
      let response = await fetch(url);
      convertedResponse = await response.json();
      var val = convertedResponse.main.temp;
      console.log(convertedResponse);
      // temp.value =  val  
      // var description = convertedResponse.weather[0].description
      // des.innerText = description;
      // var feel = convertedResponse.main.feels_like
      // var humid = convertedResponse.main.humidity
      // humidity.innerText = `Feels Like ; ${feel} <br> Humidity : ${humid}%`
      // const url2 =  `https://api.ipgeolocation.io/timezone?apiKey=680cc1c7a6f645ae893d6c578ecb1ac9&location=${city}` 
      // let response2 = await fetch(url2)   
      // convertedResponse2 = await response2.json()
      // dateArray = convertedResponse2.date_time_txt.split(',')
      // let [day , date, dat] = dateArray
      // let [ , , time] = dat.split(' ')
      // let amPm = time.split(':')
      // let [h , m, s] = amPm
      // if (h <= 12){
      //   da.innerHTML = `<span style="font-size: 4em;">${time}</span> <span style="font-size:2em;  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">AM</span>`
      // }
      // else {
      //   da.innerHTML = `<span style="font-size: 4em;">${time}</span> <span style="font-size:2em;  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">PM</span>`
      // }
      // dy.innerText = ` ${day} ${date}`
    }
    
    async function getData(){
      city = cit.value;
      const url2 =  `https://api.ipgeolocation.io/timezone?apiKey=680cc1c7a6f645ae893d6c578ecb1ac9&location=${city}` 
      let response2 = await fetch(url2)   
      convertedResponse2 = await response2.json()
      //console.log(convertedResponse2.date_time_txt.split(' '))
      dateArray = convertedResponse2.date_time_txt.split(',')
      let [day , date, dat] = dateArray
      let [ , , time] = dat.split(' ')
      let amPm = time.split(':')
      let [h ,m , s] = amPm
      if (h <= 12){
        da.innerHTML = `<span style="font-size: 4em;">${time}</span> <span style="font-size:2em;  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; ">AM</span>`
      }
      else {
        da.innerHTML = `<span style="font-size: 4em;">${time}</span> <span style="font-size:2em;  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">PM</span>`
      }
      //console.log(day,date,time)
      
      dy.innerText = ` ${day} ${date}`
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1475f9350b35a7b2e9833bcba802614f&units=metric`
      let response = await fetch(url)
      convertedResponse = await response.json()
      var val = convertedResponse.main.temp;
      temp.value = val
      var description = convertedResponse.weather[0].description
      des.innerText = description;
      var feel = convertedResponse.main.feels_like
      var humid = convertedResponse.main.humidity
      humidity.innerHTML = `Feels Like :  ${feel} <br> Humidity : ${humid}%`
    }