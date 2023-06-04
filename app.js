const apiKey = 'f467f4a9-3c0d-4d50-9113-b37965e81302';
const url = `https://pro-api.coinmarketcap.com/v1/exchange/map`;

fetch(url, {
    mode: 'no-cors',

    headers: {
        'X-CMC_PRO_API_KEY': apiKey
    },



})
    .then(response => {
        if (response.ok) {
            return response.json(); // Parse response data as JSON
        } else {
            throw new Error('Error: ' + response.status);
        }
    })
    .then(data => {
        console.log(data); // Process the response data
        // Perform further operations with the data
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error
    });
