
function getWeather() {

    document.querySelector(".info").style.display = "flex";
    const cityName = document.querySelector("input").value;

    $.ajax({
        url:
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fb7296206e736a3c4c5c1e8718503389&units=metric`,
        success: function (data) {
            console.log(data);
            // setInnerHtml(".city",data.name);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp>span").innerHTML = data.main.temp;
            document.querySelector(".description").innerHTML = data.weather[0].main;
            document.querySelector(".min").innerHTML = data.main.temp_min;
            document.querySelector(".max").innerHTML = data.main.temp_max;
            document.querySelector("#icon").innerHTML = "<img  class = 'bg-img' src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>";

            let time = new Date();
            let sunrise = new Date(data.sys.sunrise * 1000);
            let sunset = new Date(data.sys.sunset * 1000);

// ----------------------i should do these changes-------------------------------------------
            // document.querySelector("body").style["background-position"] = `bottom`;
            // document.querySelector("body").style["background-attachment"] = `fixed`;
// ---------------------------------------------------------------------------------------------
            if (time > sunrise && time < sunset) {
                document.querySelector("body").style["background-image"] = `url(images/day.jpg)`;
                document.querySelector("body").style["background-position"] = `bottom`;
                document.querySelector("body").style["background-attachment"] = `fixed`;
                document.querySelector("body").style.color = `black`;
            } else {
                document.querySelector("body").style["background-image"] = `url(images/night.png)`;
                document.querySelector("body").style["background-position"] = `bottom` ;
                document.querySelector("body").style["background-attachment"] = `fixed`;
                document.querySelector("body").style.color = `white`;
            }

        },
        error: function (err) {

            document.querySelector("body").style["background-image"] = `url(images/4o4.jpg)`;
            document.querySelector("body").style[" background-size"] = ` cover`;
            document.querySelector("body").style[" background-position"] = `bottom`;
            document.querySelector("body").style[" background-attachement"] = `fixed`;
            document.querySelector(".info").style.display = "none";


        },
        // setInnerHtml: function(querySelector, setValue){
        //     document.querySelector(querySelector).innerHTML = setValue;
        // }
    });
}


