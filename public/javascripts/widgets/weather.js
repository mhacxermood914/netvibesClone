
function createWeatherWidget(cityWeather) {
    /*Get Data*/
    var key = '168f9b5ea2c406ff9630d3051bbc5f73'
    var city = cityWeather
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            var country = data.sys.country
            var temp = Math.round(parseFloat(data.main.temp) - 273.15);
            var desc = data.weather[0].description
            var reloadId = 'h2' + cityWeather
            var first = '<h1>' + '<strong>' + city + ', ' + country + '</strong>' + '</h1>'
            var second = '<h2 id="' + reloadId + '" class="flex items-center"><span class="material-icons">sunny</span> ' + temp + ' °, ' + desc + '</h2>'

            $('.display-temperature').html("")

            $('.display-temperature').removeClass('hidden')

            $(".display-temperature").append(second)

            console.log({ second })
        })
        .catch(function () {
            return false
        })
}