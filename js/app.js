
const input = document.getElementById("input")
const btn = document.getElementById("btn")
const form = document.getElementById("form")
const art = document.getElementById("art")
const error = document.getElementById("error")
const cards = document.getElementById("cards")
const trash = document.getElementsByClassName("ilian")

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${import.meta.env.VITE_APIKEY}`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if (res.cod !== 200) return error.innerText = "Please search for a valid city"
            if (document.getElementById(res.name)) return error.innerText = "Please search for uniq city"
            if (!document.getElementById(res.name)) {
                error.innerText = ""
                art.innerHTML += `
            <div class="cards" id="${res.name}">
            <h2 class="card__name">${res.name}<span id="country">${res.sys.country}</span></h2>
            <p class="temp">${res.main.temp + " °C"}</p>
            <img src="http://openweathermap.org/img/wn/${res.weather[0].icon}@4x.png" class="icon">
            <p>${res.weather[0].description}</p>
            <img src="images.png" class="ilian">
          </div>`
                for (let index = 0; index < trash.length; index++) {
                    const t = trash[index];
                    t.addEventListener("click", (ev) => {
                        ev.currentTarget.parentElement.remove()
                    })
                }
            }
        })
})
