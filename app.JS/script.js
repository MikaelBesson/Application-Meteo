// mes variables

let result = $("#result");
let ciel = $("#ciel");
let button = $("#valid");
let xhr = new XMLHttpRequest();

//recuperation de l'API est affichage des demandes

button.click(function(){
    let ville = $("#input").val();
    if(ville !== ""){
        let requestUrl = "http://api.openweathermap.org/data/2.5/weather?q="+ville+"&lang=fr&units=metric&appid=9e873a431320b9766c279a6d50206ea9";
        $.getJSON(requestUrl,function (response){
            console.log(response);
            result.css("fontSize","x-large");
            result.html(
                "actuellement a " + ville + "<br>" + "<br>" +
                " lat " + response.coord.lat + "<br>" +
                " long " + response.coord.lon + "<br>" +
                "temperature " + Math.ceil(response.main.feels_like) + " degres" + "<br>" +
                "ressentie " + Math.ceil(response.main.temp) + " degres" + "<br>" +
                "temp max " + Math.ceil(response.main.temp_max) + " degres" + "<br>" +
                "temp min " + Math.ceil(response.main.temp_min) + " degres" + "<br>" +
                "humidité " + response.main.humidity + "<br>" +
                "pression " + response.main.pressure
            );

            ciel.css("fontSize",  "x-large");
            let renduCiel = response.weather[0].description;

            afficheFond(renduCiel);
            ciel.html(
                "vitesse du vent " + response.wind.speed + "<br>" +
                "ciel " + renduCiel
            )
        });
    }
})

// fonction pour changer l'image du div par apport au temps qu'il fait

function afficheFond (renduCiel) {
    switch (renduCiel){
        case "partiellement nuageux":
            ciel.css("backgroundImage", "url('./images/partiellementNuageux.jpg')");
            break
        case "nuageux":
            ciel.css("backgroundImage", "url('./images/nuageux.jpg')");
            break
        case "peu nuageux":
            ciel.css("backgroundImage", "url('./images/peuNuageux.jpg')");
            break
        case "brouillard":
            ciel.css("backgroundImage", "url('./images/brouillard.jpg')");
            break
        case "ciel dégagé":
            ciel.css("backgroundImage", "url('./images/cielDegage.jpg')");
            break
        case "couvert":
            ciel.css("backgroundImage", "url('./images/couvert.jpg')");
            break
        case "pluie modérée":
            ciel.css("backgroundImage", "url('./images/pluieModeree.jpg')");
            break
        case "légère pluie":
            ciel.css("backgroundImage", "url('./images/legerePluie.jpg')");
            break
        case "légères chutes de neige":
            ciel.css("backgroundImage", "url('./images/legeresChutesDeNeige.jpg')");
            break
        case "chutes de neige":
            ciel.css("backgroundImage", "url('./images/chutesDeNeige.jpg')");
            break
    }
}





