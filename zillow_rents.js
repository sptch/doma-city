const fetch = require('node-fetch');
const fs = require('fs');
// Example POST method implementation:
(async function getData() {
  const searchQuery = 'searchQueryState={'+
      '"pagination":{},'+
      '"mapBounds":{'+
        '"west":-123.39390043012746,'+
        '"east":-122.85419706098683,'+
        '"south":49.16089395186731,'+
        '"north":49.279742125071834},'+
    '"mapZoom":14,'+
    '"isMapVisible":true,'+
    '"filterState":{'+
      '"isPreMarketForeclosure":{"value":false},'+
      '"isForSaleForeclosure":{"value":false},'+
      '"isAllHomes":{"value":true},'+
      '"isAuction":{"value":false},'+
      '"isNewConstruction":{"value":false},'+
      '"isForRent":{"value":true},'+
      '"isForSaleByOwner":{"value":false},'+
      '"isComingSoon":{"value":false},'+
      '"isPreMarketPreForeclosure":{"value":false},'+
      '"isForSaleByAgent":{"value":false}},'+
    '"isListVisible":true}'+
    '&wants={"cat1":["listResults","mapResults"]}&requestId=4'

  const url = encodeURI('https://www.zillow.com/search/GetSearchPageState.htm?'+searchQuery)

  //API is limited to 500
  const response = await fetch(
      url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'authority': 'www.zillow.com',
      'method': 'GET',
      'scheme': 'https',
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'en-US,en;q=0.9,uk;q=0.8',
      'cache-control': 'max-age=0',
      'cookie': 'zguid=23|%2451285b16-37f4-45f5-917b-663563c67503; zgsession=1|3e5ddea4-62b0-48ec-8026-22ddbb4e4845; _ga=GA1.2.384506404.1614702122; _gid=GA1.2.2031382408.1614702122; zjs_user_id=null; zjs_anonymous_id=%2251285b16-37f4-45f5-917b-663563c67503%22; _pxvid=6c815047-7b73-11eb-aa97-0242ac120010; _gcl_au=1.1.885793679.1614702235; KruxPixel=true; DoubleClickSession=true; _fbp=fb.1.1614702236026.929562857; __gads=ID=f1f7fe906301c0f2:T=1614702235:S=ALNI_MYOFm_845Vdi-8rGK4kc3v3KF0_GA; _pin_unauth=dWlkPU0yWmhPR00zWXpJdE9HSXdaQzAwTkRSaUxUazRZek10WW1RMVptRTJOekptTmpnNQ; KruxAddition=true; ki_r=; ki_s=; JSESSIONID=917A2FB70F29C7ABA91C63E485284248; _uetsid=af4709107b7311eba6d361f5cf17ce80; _uetvid=af4766f07b7311eba605712ef0e26371; ki_t=1614702816045%3B1614788805367%3B1614789203585%3B2%3B101; AWSALB=vKr+HIsdpnAWJ5gneTLOCbFt35gEq9aiMN0tmYda2Tung5vmQVsZWBO86GNkxLLeqCx0YRddXQEpEBiYW9/cFulZfHzLfRuSwdQKzPu3UuYDpQfu+lFMo/tczYpp; AWSALBCORS=vKr+HIsdpnAWJ5gneTLOCbFt35gEq9aiMN0tmYda2Tung5vmQVsZWBO86GNkxLLeqCx0YRddXQEpEBiYW9/cFulZfHzLfRuSwdQKzPu3UuYDpQfu+lFMo/tczYpp; search=6|1617381203944%7Crect%3D49.3296457167524%252C-122.8521371244634%252C49.16639963754756%252C-123.39184049360402%26disp%3Dmap%26mdm%3Dauto%26p%3D1%26sort%3Ddays%26z%3D1%26fs%3D0%26fr%3D1%26mmm%3D0%26rs%3D0%26ah%3D0%26singlestory%3D0%26housing-connector%3D0%26abo%3D0%26garage%3D0%26pool%3D0%26ac%3D0%26waterfront%3D0%26finished%3D0%26unfinished%3D0%26cityview%3D0%26mountainview%3D0%26parkview%3D0%26waterview%3D0%26hoadata%3D1%26zillow-owned%3D0%263dhome%3D0%09%09791534%09%09%09%09%09%09; _px3=1ca095d1b84d734936b1418c303e4a1b511047d284a02c9c0c123a59c69aff25:rIf5Is8tzPY3CounKxS0agqCMA2RJulf79ZEyAgh30ZTI4S98gl0WW/WGGWqLU4azPjtlSpY2n2OyfUdvuk9UA==:1000:1zN2cnca+OzsiEYEdUg0kQiDgdslPJ6eW3pUa4AeDypXGeJOB9+PcmB4OM6NoY4eD8mGwSq6Y59ZSAyQxsdOUnlHgE18AKqoEfY07IiIQrrFzeMR8W951zScboUeCUvh64ZAqc5Fp85bMs7uVz/3X56uuRTfjL9UmLoaOAn5QXc=',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'none',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  const data = await response.json(); 
  console.log(data.cat1.searchResults.listResults[0])
  console.log(data.cat1.searchResults.mapResults[0])

  const geojson = {
    type: "FeatureCollection",
    features: data.cat1.searchResults.mapResults.filter(v=>v.hdpData).map(({hdpData:{homeInfo:i}, ...d})=>({
      type: "Feature",
      geometry: {
        type:"Point",
        coordinates: [i.longitude, i.latitude]
      },
      properties: {
        price: i.price,
        dateSold: i.dateSold,
        bathrooms: i.bathrooms,
        bedrooms: i.bedrooms,
        livingArea: i.livingArea,
        homeType: i.homeType,
        homeStatus: i.homeStatus,
        daysOnZillow: i.daysOnZillow,
        taxAssessedValue: i.taxAssessedValue
      }
    }))
  }
  fs.writeFile(`./data/zillow_rents_${(new Date()).toISOString().split('T')[0]}.geojson`, JSON.stringify(geojson), {}, (err, data)=>{if(err){console.log(err)}})

})()