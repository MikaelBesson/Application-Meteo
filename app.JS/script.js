
let result = document.getElementById("result");
let ville = document.getElementById("input");
let bouton = document.getElementById("valid");
let xhr = new XMLHttpRequest();


bouton.addEventListener("click", function (){
    if(ville.value !== ""){
        XMLHttpRequest = "http://api.openweathermap.org/data/2.5/weather?q="+ville.value+"&fr&unit=metric&appid=9e873a431320b9766c279a6d50206ea9";
        xhr.open("GET",XMLHttpRequest);
        xhr.responseType = "json";
        xhr.send();
        xhr.onload = function (){
            if(xhr.status === 200){
                let response = xhr.response;
                console.log(response);

            }
        }
    }
})


