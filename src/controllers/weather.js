const express = require('express');
const logger = require ('../loaders/logger');
const Success = require ('../handlers/successHandler');
const {weatherByCoordinates: weatherByCoordinatesService,
weatherByCityId: weatherByCityIdService} = require('../services/weatherService');


//const CityRepository = require('../repositories/cityRepository');
//const repository = new CityRepository();

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

 const weatherByCoordinates =  async (req, res) =>{
    try {
    const {lon, lat} = req.query;

    const weather = await weatherByCoordinatesService(lon, lat);
    const success = new Success (weather);

    res.json(success);
    } catch (err){
        next(err);
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

 const weatherByCityId =  async (req, res) =>{
    //logger.info(JSON.stringify(req.params));
    try {
    const id = req.params.id;
    const city = req.params.city;

    const weather = await weatherByCityIdService(city, id);
    const success = new Success (weather);

    res.json(success);
    } catch(err){
        next(err);
    }
};



module.exports = {
    
    weatherByCoordinates,
    weatherByCityId
    
}