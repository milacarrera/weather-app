

// const request = require('request');
// const argv = require('yargs').argv;

// let apiKey = 'f535e7332586bfcca10e0a6134c8a0b2';
// let city = argv.c || 'amsterdam';
// let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

// request(url, function(err, response, body){
//     if(err){
//         console.log('error');
//     }else{
//         let weather = JSON.parse(body);
//         let message = `It's ${weather.main.temp} degrees in
//                ${weather.name}!`;
//         console.log(message);
//     }
// });
