const axios = require('axios');

async function serpResults(data) {
  let config = {
    method: 'post',
    url: 'https://google.serper.dev/search',
    headers: { 
      'X-API-KEY': process.env.SERP_API, 
      'Content-Type': 'application/json'
    },
    data : JSON.stringify(data)
  };

  try {
    const response = await axios(config);
    console.log(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = serpResults;

