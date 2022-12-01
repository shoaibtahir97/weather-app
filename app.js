const getData = ()=> {
    const cityName = document.getElementById("city-name").value;
    const city = document.getElementById("city");
    const country = document.getElementById("country");
    const temp = document.getElementById("temp");
    // Make a request for a user with a given ID
    axios.get(`https://api.weatherapi.com/v1/current.json?key=aa543576a5e64f2ab5380028222011&q=${cityName}&aqi=no`)
  .then(function (response) {
      // handle success
      let weatherData = response.data;
      console.log(weatherData);
      city.innerHTML = `${weatherData.location.name},`;
      country.innerHTML = weatherData.location.country;
      temp.innerHTML = `${weatherData.current.temp_c}&#176;C`;
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })


}