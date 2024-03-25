import './style.css'

async function getWeather(city) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=6e674ec9f4db435aa96210137231912&q=${city}&aqi=no`, {mode: `cors`})

        const weatherData = await response.json();
        return weatherData;
    }
    catch (error){
        console.log(error)
    }
};

const pageSetup = (() => {
    const initialSetup = document.createElement(`div`);
    initialSetup.innerHTML = `
        <h1 class="title" id="title">Check the Weather</h1>

        <div id="searchHolder">
            <input type="text" id="searchInput" name="searchInput" placeholder="Search"></input>
            
            <div id="btnHolder">
                <h3>Search</h3>
            </div>
        </div>
        
        <div id="displayHolder">
            <h3 id="temp"></h3>
        </div>`
    document.body.appendChild(initialSetup);
})();

const searchButton = document.getElementById(`btnHolder`);

searchButton.addEventListener("click", async function(){
    const searchInput = document.getElementById(`searchInput`).value;

    const getData = await getWeather(searchInput);

    displayTemp(getData.current.temp_f);
});

const displayTemp = temp => {
    const tempText = document.getElementById(`temp`);
    tempText.innerText = `${temp}`
}

console.log(await getWeather(`perrysburg`));