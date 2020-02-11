// when the button is clicked RNG runs to pick one of three (one of three functions)


// fetch arid planets     13 17

function pickDesert() {

   randomPlanet()

    function randomPlanet(){

        let planetSelection = Math.floor(Math.random() * Math.floor(3)); {
        if (planetSelection === 0) {
             return"https://swapi.co/api/planets/19/"   
        } if (planetSelection === 1) {
         return "https://swapi.co/api/planets/13/"     
        } if (planetSelection === 2) {
             return "https://swapi.co/api/planets/17/"    
        }  
       
        } 
    } 

    let url = randomPlanet()
    getData(url)
}

 // fetch temperate planets  
function pickTemperate() {

    randomPlanet()
 
     function randomPlanet(){
 
         let planetSelection = Math.floor(Math.random() * Math.floor(3)); {
         if (planetSelection === 0) {
              return"https://swapi.co/api/planets/3/"   
         } if (planetSelection === 1) {
          return "https://swapi.co/api/planets/7/"     
         } if (planetSelection === 2) {
              return "https://swapi.co/api/planets/8/"    
         }  
        
         } 
     } 
 
     let url = randomPlanet()
     getData(url)
 }
 


// fetch cold planets


 function pickCold() {

    randomPlanet()
 
     function randomPlanet(){
 
         let planetSelection = Math.floor(Math.random() * Math.floor(3)); {
         if (planetSelection === 0) {
              return"https://swapi.co/api/planets/16/"   
         } if (planetSelection === 1) {
          return "https://swapi.co/api/planets/4/"     
         } if (planetSelection === 2) {
              return "https://swapi.co/api/planets/55/"    
         }  
        
         } 
     } 
 
     let url = randomPlanet()
     getData(url)
 }
 





function getData(url) {

    loading()
    
    fetch(url)  
        .then(x => x.json())
        .then(data => {
            removeLoading()
            planetClimate(data.climate)
            planetName(data.name)
            planetGravity(data.gravity)
            planetTerrain(data.terrain)
        })

        function planetClimate(text) {
            document.getElementById("climate").innerHTML = text

        }
        function planetName(text) {
            document.getElementById("planet").innerHTML = text

        }
        
        function planetGravity(text) {
            document.getElementById("gravity").innerHTML = text

        }
        function planetTerrain(text) {
            document.getElementById("terrain").innerHTML = text

        }

}

function loading() {
    document.getElementById("loadingStatus").innerHTML = "Loading... Punch it Chewy!"
}

function removeLoading() {
    document.getElementById("loadingStatus").innerHTML = "Waiting for a selection..."
}

   

