navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const unit = 'metric';
  const apiKey = "93538f0e30f3e0062ebbbfb9d367ab76";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&unit=${unit}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const cityName = data.name;
      const temperature = Math.round(data.main.temp - 273.15);

      const weatherInfo = document.getElementById("weather-info");
      const info = document.createElement('div');
      info.innerHTML = `
      <div class="menuLoc">
          <img style="width:25px;" src="images/pin.svg">
          <p style="margin:auto;">&nbsp;${cityName}: ${temperature}°C</p>
      </div>
      `;
      weatherInfo.appendChild(info);
    })
    .catch(error => console.log(error));
}

function error() {
  console.log("Unable to retrieve your location.");
}