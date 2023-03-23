// import fs from 'fs';
// import fetch from "node-fetch";
const fetch = require("node-fetch");


const API = async function() {
		
	// Satelite data
	const url = "http://api.agromonitoring.com/stats/1.0/12363b4c180/635cf25a176fe6831443f2df?appid=b58f66ea030f42fad0c0d3c651b4fbe5"
	const ndvi = await fetch(url).then(response => response.json())
	const ndvi_stats = { 'NDVI_sd' : ndvi['std'], 'NDVI_max' : ndvi['max'], 'NDVI_median' : ndvi['median']}
    console.log(ndvi_stats)

	// field data

}

API()