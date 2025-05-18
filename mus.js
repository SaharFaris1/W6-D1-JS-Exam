let container = document.getElementById("container");
let country = document.createElement("div");


fetch("https://api.harvardartmuseums.org/object?apikey=4b37f3a3-d9c3-407a-ae20-25c85dd07abc")
    .then((response) => response.json())
    .then((data) => {
        data.result.forEach(item => { 
            console.log(item.name);
 let card = document.createElement("div")
          card.className="card"

        })
    })

   