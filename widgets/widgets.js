// comment carousel
// jquery to hide and toggle the comments until button is clicked
function changeButtonName(button) {
  var currentBtnText = $(button).text();
  var buttonAction = currentBtnText.includes('see') ? 'hide' : 'see';
  $(button).text('Click to ' + buttonAction + ' Comments');
}
// toggle function
$('#btn_com').click(function(){
  $('#randSec').toggle('swing', changeButtonName.bind(null, this));
});
// display time 
// added by theTradeCoder
function displayTime() {  
  setInterval(() => {
    const date = new Date();
    $("#date").html(date.toLocaleDateString());
    $("#time").html(date.toLocaleTimeString());
  }, 1000);
};
displayTime();
// google search option 
// added by Mamun Abdullah, @theTradeCoder
$('#googleSearch').submit((e)=>{
      e.preventDefault();
      let searchTopic = $('.google-search').val();
      searchTopic = searchTopic.split(' ').join('+');
      let searchUrl = `https://www.google.com/search?q=${searchTopic}&oq=${searchTopic}&ie=UTF-8`;
     window.open(searchUrl);
    });
// weather ninja widget
// added by Terri Fricker, based on tutorial by NetNina
const cityForm = document.querySelector('form');
const display = document.querySelector('.display');
const details = document.querySelector('.details');
const image = document.querySelector('.display img');
const icon = document.querySelector('.icon img');

const updateDisplay = data => {
  const cityDetails = data.cityDetails;
  const weather = data.weather;
  details.innerHTML = `
    <h5>${cityDetails.EnglishName}</h5>
    <div class="condition">${weather.WeatherText}</div>
    <div class="temperature">
      <span>${weather.Temperature.Imperial.Value}</span>
      <span>&deg;F</span>
    </div>
  `;
  let imageSource = null;
  if(weather.IsDayTime) {
    imageSource = 'images/day.svg';
  } else {
    imageSource = 'images/night.svg';
  }
  image.setAttribute('src', imageSource);
  const iconSource = `images/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSource);
  if (display.classList.contains('hidden')) {
    display.classList.remove('hidden');
  }
}

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);
  console.log(weather);
  return {
    cityDetails: cityDetails,
    weather: weather
  }
};

cityForm.addEventListener('submit', e => {
  e.preventDefault();
  const city = cityForm.city.value.trim();
  cityForm.reset();
  updateCity(city)
    .then(data => updateDisplay(data))
    .catch(err => console.log(err));
})

