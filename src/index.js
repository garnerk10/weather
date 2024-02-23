import './style.css'

async function getWeather(city) {
    try {
        fetch(`http://api.weatherapi.com/v1/current.json?key=6e674ec9f4db435aa96210137231912&q=${city}&aqi=no`, {mode: `cors`})

        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);
        })
    }
    catch (error){
        console.log(error)
    }
};

const pageSetup = (() => {
    const initialSetup = document.createElement(`div`);
    initialSetup.innerHTML = `
        <h1 class="title" id="title">Check the Weather!</h1>

        <div id="searchHolder">
            <input type="text" id="searchInput" name="searchInput" placeholder="Search"></input>
            
            <div id="btnHolder">
                <h3>Search</h3>
            </div>
        </div>
        
        <div id="displayHolder">
        </div>`
    document.body.appendChild(initialSetup);
})();

const searchButton = document.getElementById(`btnHolder`);
;


searchButton.onclick = function(){
    const searchInput = document.getElementById(`searchInput`).value;
    getWeather(searchInput);
};


