/*
const criptos = ["BTC", "ETH", "LTC", "XRP", "USDC", "BCH"];
const price = [];

var requisicaoMB = criptos.map(function(cripto){
  return axios.get("https://www.mercadobitcoin.net/api/"+ cripto.toString() + "/ticker/");
});




axios.all(requisicaoMB).then(axios.spread((...responses) => {
responses.forEach(function(response, index){
  const cripto = {};
  cripto.sigla = criptos[index];
  cripto.price = response.data.ticker.last;
  cripto.exchange = "Mercado Bitcoin";
  price.push(cripto);
});

})).catch(errors => {

})

console.log(price);
*/






     
     
     
