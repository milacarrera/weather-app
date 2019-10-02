const express = require('express');
const router = express.Router();
const request = require('request');
const config = require("../config");

router.get('/', function(req, res){
    res.render('index', {weather: null, error: null});
});

router.post('/', function(req, res){
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${config.unit}&appid=${config.apiKey}`;

    request(url, (err, response, body) => {
        let weather = JSON.parse(body);
        if(err){
            res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
            console.log(weather);
            if(weather.main == undefined){
                res.render('index', {weather: null, error: weather.message});
            } else {
                let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
                res.render('index', {weather: weatherText, error: null});
            }
        }
    })
})

module.exports = router;