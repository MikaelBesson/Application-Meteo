// mes variables

let result = document.getElementById("result");
let ciel = document.getElementById("ciel");
let ville = document.getElementById("input");
let bouton = document.getElementById("valid");
let xhr = new XMLHttpRequest();

//recuperation de l'API est affichage des demandes

bouton.addEventListener("click", function (){
    if(ville.value !== ""){
        let requestUrl = "http://api.openweathermap.org/data/2.5/weather?q="+ville.value+"&lang=fr&units=metric&appid=9e873a431320b9766c279a6d50206ea9";
        xhr.open("GET", requestUrl);
        xhr.responseType = "json";
        xhr.send();
        xhr.onload = function (){
            if(xhr.status === 200){
                let response = xhr.response;
                console.log(response);
                result.style.fontSize = "x-large";
                result.innerHTML =
                    "actuellement a " + ville.value + "<br>" + "<br>" +
                    " lat " + response.coord.lat + "<br>" +
                    " long " + response.coord.lon + "<br>" +
                    "temperature " + Math.ceil(response.main.feels_like) + " degres" + "<br>" +
                    "ressentie " + Math.ceil(response.main.temp) + " degres" + "<br>" +
                    "temp max " + Math.ceil(response.main.temp_max) + " degres" + "<br>" +
                    "temp min " + Math.ceil(response.main.temp_min) + " degres" + "<br>" +
                    "humidité " + response.main.humidity + "<br>" +
                    "pression " + response.main.pressure;

                ciel.style.fontSize = "x-large";
                let renduCiel = response.weather[0].description;

                afficheFond(renduCiel);
                ciel.innerHTML =
                    "vitesse du vent " + response.wind.speed + "<br>" +
                    "ciel " + renduCiel
            }
        }
    }
})

// fonction pour changer l'image du div par apport au temps qu'il fait

function afficheFond (renduCiel) {
    switch (renduCiel){
        case "partiellement nuageux":
            ciel.style.backgroundImage = "url('./images/partiellementNuageux.jpg')";
            break
        case "nuageux":
            ciel.style.backgroundImage = "url('./images/nuageux.jpg')";
            break
        case "peu nuageux":
            ciel.style.backgroundImage = "url('./images/peuNuageux.jpg')";
            break
        case "brouillard":
            ciel.style.backgroundImage = "url('./images/brouillard.jpg')";
            break
        case "brume":
            ciel.style.backgroundImage = "url('./images/brume.jpg')";
            break
        case "ciel dégagé":
            ciel.style.backgroundImage = "url('./images/cielDegage.jpg')";
            break
        case "couvert":
            ciel.style.backgroundImage = "url('./images/couvert.jpg')";
            break
        case "pluie modérée":
            ciel.style.backgroundImage = "url('./images/pluieModeree.jpg')";
            break
        case "légères chutes de neige":
            ciel.style.backgroundImage = "url('./images/legeresChutesDeNeige.jpg')";
            break
        case "chutes de neige":
            ciel.style.backgroundImage = "url('./images/chutesDeNeige.jpg')";
            break
    }
}





