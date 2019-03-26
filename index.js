// Calling the weather API
const request = require('request'); //using request to make API calls
const argv = require('yargs').argv; //using Yargs to allow for flexible cities

let apiKey = '1dc35ffff3e6b3175b42ede72bd56806';
let city = argv.c || 'portland'; //use city name specified. if none specified, use portland
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}` //URL to access from openweathermap documentation

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body); //Convet jumbled text into a javascript object so that we can call specific elements of this object like temprature etc.
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`; //creating a message (calling name and temp)
    console.log('body:', message);
  }
});
