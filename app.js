// when the button is clicked RNG runs to pick one of three (one of three functions)




// fetch arid planets     13 17

function pickDesert() {

   randomPlanet()

    function randomPlanet(){
        let planetSelection = Math.floor(Math.random() * Math.floor(3)); {
          if (planetSelection === 0) {
        url="https://swapi.co/api/planets/19/"   
        } if (planetSelection === 1) {
        url="https://swapi.co/api/planets/13/"     
        } if (planetSelection === 2) {
      url="https://swapi.co/api/planets/17/"    
        }  
       
        } 
        } 



fetch(url)  // HOW DO I MAKE URL GLOBAL??
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



// fetch temperate planets  3 7 8


// fetch cold planets

//16 4 55