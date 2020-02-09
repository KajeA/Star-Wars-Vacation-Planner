// when the button is clicked RNG runs to pick one of three (one of three functions)




// fetch arid planets

function pickDesert() {

    planetSelection = computerPlay()

    function computerPlay(){
        let planetSelection = Math.floor(Math.random() * Math.floor(3)); {
          if (planetSelection === 0) {
          url = "https://swapi.co/api/planets/11/"   
        } if (planetSelection === 1) {
          url = "https://swapi.co/api/planets/12/"     
        } if (planetSelection === 2) {
        url = "https://swapi.co/api/planets/13/"    
        }  
        } 
        } 

fetch(url)
    .then(x => x.json())
    .then(data => {
        planetClimate(data.climate)
        planetName(data.name)
    })

    function planetClimate(text) {
        document.getElementById("climate").innerHTML = text
  
    }
    function planetName(text) {
        document.getElementById("planet").innerHTML = text

    }

}
/*arid1.then(function(response) {
  response.text().then(function(data.name) {
    planet.textContent = name;
  });
});*/


// fetch temperate planets


// fetch cold planets

//16 4