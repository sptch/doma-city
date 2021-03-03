const fetch = require('node-fetch');
const fs = require('fs');
// Example POST method implementation:
(async function getData() {
  // Default options are marked with *
  const response = await fetch('https://www.padmapper.com/api/t/1/pins', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Accept': '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9,uk;q=0.8',
      'Connection': 'keep-alive',
      'Content-Type': 'application/json',
      'Cookie': '_gcl_au=1.1.1506190528.1612280807; _ga=GA1.2.578999023.1612280808; _fbp=fb.1.1612280808221.661610691; _bs=fdad4f52-4d9d-3382-aed6-a9d77bf1cd47; padmapper.sid=s%3A2wKCMKQOHlCsojAymei7DgLjn0zqD1X2.%2F9rncTiw9sTUh8WUC1x065dviMa4EY%2FrWh3wRd%2BjLAg; csrftoken=k3h0MKGNAWhz3douUTZrimaC96UPnwJdQAWncxbF22hhdPaNBapXT8TBOajmFgIm971P3GfZ9sLruN0d; _gid=GA1.2.1656353770.1614781600; _gat_UA-6234140-3=1',
      'Host': 'www.padmapper.com',
      'Origin': 'https://www.padmapper.com',
      'Referer': 'https://www.padmapper.com/apartments/b-p447788?box=-124.1316403,49.1312886,-122.2940661,49.4520426',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36',
      'X-CSRFToken': 'ZxK7UIY9m1nEy7dSousvJjAAgquWAuy5v4pukvt1O7nmIJZb5LS1k5jzVuTtSexe971P3GfZ9sLruN0d',
      'X-Zumper-XZ-Token': 'ou72648mlc.kut2yp59f'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({
      external: true,
      limit: 1000,
      longTerm: false,
      maxLat: 49.4848912,
      maxLng: -122.0424481,
      minLat: 49.0183027,
      minLng: -123.8800223,
      minPrice: 0,
      shortTerm: false,
      transits: {}}) //-123.8800223,49.0183027,-122.0424481,49.4848912
  });
  const data = await response.json(); 
  const geojson = {
    type: "FeatureCollection",
    features: data.map(({is_pad, ...d})=>({
      type: "Feature",
      geometry: {
        type:"Point",
        coordinates: [d.lng, d.lat]
      },
      properties: {
        ...d
      }
    }))
  }
  fs.writeFile(`./data/padmapper_${(new Date()).toISOString().split('T')[0]}.geojson`, JSON.stringify(geojson), {}, (err, data)=>{if(err){console.log(err)}})

})()