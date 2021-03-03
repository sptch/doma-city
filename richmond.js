const fetch = require('node-fetch');
const fs = require('fs');
// Example POST method implementation:
(async function getData() {
  // Default options are marked with *
  const response = await fetch(`https://maps.richmond.ca/DotNet/proxy.ashx?https://maps.richmond.ca/internal/rest/services/RIM?f=json`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-US,en;q=0.9,uk;q=0.8',
      'Connection': 'keep-alive',
      'Cookie': 'nmstat=793b2350-0bca-aed9-81ff-65a5bf4fc6ba',
      'Host': 'maps.richmond.ca',
      'Referer': 'https://maps.richmond.ca/rim/',
      'Sec-Fetch-Dest': 'image',
      'Sec-Fetch-Mode': 'no-cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36'
    },
  });
  const data = await response.text(); 
  console.log(data)
})()