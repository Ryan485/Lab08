const form = document.querySelector("form");
const weatherDiv = document.getElementById("weatherDiv");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = form.elements.city.value;
    const response = await fetch(`https://lab08-3gn4.onrender.com/weather?city=${city}`);
    const data = await response.json();
    weatherDiv.innerHTML = `
        <p>Temperature: ${data.temperature}</p>
        <p>Description: ${data.description}</p>
        <img src="http://openweathermap.org/img/w/${data.icon}.png" alt="Weather Icon" />
    `;
});