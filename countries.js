
let container = document.getElementById("container");
let country = document.createElement("div");
container.appendChild(country);
country.className="country"

fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        data.forEach(item => { 
          console.log(item.name);
          let card = document.createElement("div")
          card.className="card"
          card.style.width="300px"
          let nameCountry = document.createElement("p");
          nameCountry.innerText = item.name.common
          let nameoffisional = document.createElement("p");
          nameoffisional.innerText = item.name.official
          let numpopulation = document.createElement("p")
          numpopulation.innerText = item.population
          let flags = document.createElement("img")
       flags.src= item.flags.png
       flags.className="flags"
       flags.style.width="300px"
       flags.style.alignContent="center"
          
let regionName = document.createElement("p")
regionName.innerText = item.region
let languageNum = document.createElement("p")
languageNum.innerText=item.languages.eng

let maps = document.createElement("a")
maps.innerText= item.maps.googleMaps
card.appendChild(flags)
card.appendChild(nameCountry)
card.appendChild(nameoffisional)
card.appendChild(numpopulation)
card.appendChild(regionName)
card.appendChild(languageNum)
card.appendChild(maps)
country.appendChild(card)

        });
    })
   
