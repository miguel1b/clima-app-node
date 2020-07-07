const axios = require('axios');

const getLugarLtLg = async(dir) => {

    //const locationURI = encodeURI(dir);
    // const instance = axios.create({
    //     baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${locationURI}`,
    //     headers: { 'X-RapidAPI-Key': 'dd26cdc235msh187c32581d62439p1b44fejsn47e2be6d7639' }
    // });
    // const resp = await instance.get();
    // if (resp.data.Results === null) {
    //     throw new Error(`No hay resultado para : ${dir}`);
    // }

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=6b2c24a23ed3030cc5ada1674e9af23e&units=metric&q=${dir}`);

    return resp.data;
}


module.exports = {
    getLugarLtLg
}