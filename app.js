const price = document.querySelector('#btc')

async function logJsonData() {
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const jsonData = await response.json();
    console.log(jsonData['bpi']['USD']['rate']);
    price.innerHTML = '$ ' + jsonData['bpi']['USD']['rate']
}


logJsonData();