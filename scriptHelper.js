// Write your helper functions here!

require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    // Here is the HTML formatting for our mission target div.
    document.getElementById('missionTarget').innerHTML = `
    
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}"> `
    
 }
 
 function validateInput(testInput) {
    let pilot = document.querySelector("input[name=pilotName]").value
    let copilot = document.querySelector("input[name=copilotName]").value
    let fuelLevel =  document.querySelector("input[name=fuelLevel]").value
    let cargoLevel =  document.querySelector("input[name=cargoMass]").value

    if(pilot === "" || copilot === "" || fuelLevel  === "" || cargoLevel === "") {
        return alert("Please complete all forms.")
    }

    if (testInput === "") {
        return "Empty"
    } else if (!isNaN(parseInt(testInput))) {
        return "Is a Number"
    } else {
        return "Not a Number"
    } 
}
    
 

 function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {

     validateInput(pilot);
     validateInput(copilot);
     validateInput(fuelLevel);
     validateInput(cargoLevel);

    document.getElementById('pilotStatus').innerText = `Pilot ${pilot} Ready`
    document.getElementById('copilotStatus').innerText = `Copilot ${copilot} Ready`

    if(fuelLevel < 10000) {
        document.getElementById('faultyItems').style.visibility = 'visible'
        document.getElementById('fuelStatus').innerText = 'Insufficient fuel for launch'
        document.getElementById('launchStatus').style.color = 'red'
        document.getElementById('launchStatus').innerText = 'Shuttle not ready for launch'
    }
    if(cargoLevel > 10000) {
        document.getElementById('faultyItems').style.visibility = 'visible'
        document.getElementById('cargoStatus').innerText = 'Cargo mass too high for launch'
        document.getElementById('launchStatus').style.color = 'red'
        document.getElementById('launchStatus').innerText = 'Shuttle not ready for launch'

    }
    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        document.getElementById('launchStatus').innerText = 'Shuttle is ready for launch'
        document.getElementById('launchStatus').style.color = 'green'
        document.getElementById('faultyItems').style.visibility = 'hidden'
    }

    }
 

    async function myFetch() {
        
            let response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
            let planetsReturned = await response.json();
            return planetsReturned;
        } 
    
  
 
 function pickPlanet(planets) {
   return planets[Math.floor(Math.random() * planets.length)]
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;   