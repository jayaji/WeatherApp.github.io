
function getWeather() {
  clicked=false;
      const apiKey = "70859cbcc1msh196d044d4753994p116993jsnfc5d99cd38c4";
      const city = document.getElementById("city").value;
      const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}`;

      fetch(url, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          "x-rapidapi-key": '70859cbcc1msh196d044d4753994p116993jsnfc5d99cd38c4'
        }
      })
        .then(response => response.json())
        .then(response => {

var container = document.getElementById("container");
  var el = document.createElement("span");
  el.className ="card";
  el.id = "card";
  el.innerHTML = `<li><h5>${response.location.name}</h5></li>
                  <li><h5>${response.location.country}</h5></li>
                  <li>${response.current.condition.text}</li>
                  <li>humidity: ${response.current.humidity}</li>
                  <li>feelslike_c: ${response.current.feelslike_c}</li>
                  <li>feelslike_f: ${response.current.feelslike_f}</li>
                  <li>last_updated: ${response.current.last_updated}</li>`;
  container.append(el);
                                                    
          // console.log(response)
        }
          )
  .catch(err => console.error(err));
    }



