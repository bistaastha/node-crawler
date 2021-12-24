const axios = require('axios');

const fetchData = async (url, pageNumber) => {
    console.log('Starting Crawler...');
    const params = new URLSearchParams([['page', pageNumber]]);
    let response = await axios.get(url, {params}).catch((err) => console.log(err));

    if(response.status !== 200){
        console.log('Error: Data not fetched');
        return;
    }
    return response;
}

module.exports = fetchData;