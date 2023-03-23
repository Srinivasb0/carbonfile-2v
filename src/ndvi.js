import fs from 'fs';
import fetch from "node-fetch";


const url = "http://api.agromonitoring.com/agro/1.0/image/search?start=1672464324&end=1675142724&polyid=635cf25a176fe6831443f2df&appid=b58f66ea030f42fad0c0d3c651b4fbe5"
const data = await fetch(url).then(response => response.json());
// console.log(data[0].stats);

const API = async function() {
	const url = "http://api.agromonitoring.com/stats/1.0/12363b4c180/635cf25a176fe6831443f2df?appid=b58f66ea030f42fad0c0d3c651b4fbe5"
	const ndvi = await fetch(url).then(response => response.json())
	const ndvi_stats = { 'NDVI_sd' : ndvi['std'], 'NDVI_max' : ndvi['max'], 'NDVI_median' : ndvi['median']}
    console.log(ndvi_stats) 
}

API()