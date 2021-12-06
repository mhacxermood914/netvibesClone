'use strict'

class WeatherWidget {

  constructor(index, cityWeather = "") {
    this.index = index
    this.name = "Weather"
    this.city = cityWeather
  }


  createWeatherWidget() {

    const stream = `
            <div class=" shadow-md bg-gray-200 my-2">
              <div class="hiddenClass">
                <div class="" id="weatherClass">
                  <div class="flex justify-between text-semibold border-b border-black px-2 py-2">
                    <h1>
                      <strong><i class="fas fa-film"></i> Weather Widget
                    </h1></strong>
                    <button id="removeWindowCinemaButton"><span x-on:click="alert('Hello World!')"
                        class="material-icons">close</span></button>
                  </div>

                  <form @submit.prevent="console.log('submitted')" method=" POST" class="weather-form px-2 mt-2 h-24s"
                    >

                    <label for="">Get Temperature display for a city V </label>



                    <input x-on:click="weatherCard" type="text" placeholder="Ex : Paris" name="cityWeather"
                      id="cityWeather" class="my-3 p-2 border-2 rounded-sm focus:ring-gray-3000 focus:ring-2" required>

                    <input class="p-2 rounded-sm bg-gray-900 text-gray-200 cursor-pointer" type="submit" value="Find">

                  </form>

                  <div class="display-temperature hidden px-2 py-4">
                  </div>

                </div>
              </div>
            </div>
        `

    return stream;
  }

  createWeatherInfoContent(cityWeather, i) {
    
  }
}
