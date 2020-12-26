const currenciesURL = 'https://api.exchangeratesapi.io/latest'
const $selectCurrencies = document.querySelector('#currency')
const $selectBase = document.querySelector('#base')
const $submitButton = document.querySelector('#submitButton')
const $rate = document.querySelector('#rate')

fetchCurrencies(currenciesURL, $selectBase , $selectCurrencies);


$submitButton.onclick = function() {

    if($selectBase.value === $selectCurrencies.value){ // To solve API's bug regarding EUR - EUR exhange rate

        $rate.innerText = `1 ${$selectBase.value} = 1 ${$selectCurrencies.value}`
        return false;
    }

    fetch(`https://api.exchangeratesapi.io/latest?base=${$selectBase.value}`)
    .then( response => response.json())
    .then( JSONresponse => {
        console.log(JSONresponse)
        //console.log( JSONresponse.rates[$selectBase.value] )
        console.log( JSONresponse.rates[$selectCurrencies.value] )

        $rate.innerText = `1 ${$selectBase.value} = ${JSONresponse.rates[$selectCurrencies.value]} ${$selectCurrencies.value}`

    });

    return false;
}

