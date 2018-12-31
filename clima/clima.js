const axios = require('axios');

const getClima = async(lat, lng) => {
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=aa59cec2cfe55097ef8ea203f1bdc0a5`;

    var resp = await axios.get(url);
    if (resp.data.error) {
        throw new Error(`No se encontro el clima para la ubicacion seleccionada. ${lat},${lng}`);
    }

    return resp.data.main.temp;
};

module.exports = {
    getClima
};