// console.log(1)
// setTimeout(function (){
//     console.log(2)
// },3000);
// console.log(3)
async function getData (){
    const url = "https://api.github.com/users"
    //let userLocation = smtn.value
    //const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=09756d60b2011a99fb389f6e43e766cc`
    let response = await fetch(url)
    let convertedResponse = await response.json()
    for (let index = 0; index < convertedResponse.length; index++) {
    //    disp.innerHTML +="<div>"+ convertedResponse[index].login + " <img src=''>"+ "</div>";
    disp.innerHTML += `<div>${convertedResponse[index].login} <img src=${convertedResponse[index].avatar_url}></div>`
    }
    console.log(convertedResponse)
    
}