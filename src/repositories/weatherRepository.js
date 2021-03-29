const axios = require('axios');

const config = require('../config');

class WeatherRepository {

    constructor(){
        this.units= 'metric';
        this.lang = 'es';
        this.pathBase = config.openweathermap.pathBase;
        this.appid = config.openweathermap.apikey;
    }

    async weatherByCoordinates(lon, lat) {
        try {
            const instance = axios.create ({
                baseURL: `${this.pathBase}`,
                params:{
                    'appid': this.appid, 
                    'units': this.units,
                    'lang': this.lang,
                    lon,
                    lat
                } ,
                
            });
    
            const response = await instance.get();
          
            return response.data;

        } catch (err){
            throw err;
        }
    }
}

module.exports= WeatherRepository;