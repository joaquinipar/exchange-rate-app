function appendRates( $element ,rates, base, baseFlag = true ){

    newRates = [ ...rates, base ]
   
    newRates.forEach( rate => {
        
        optionElem = createOption(rate)

        $element.appendChild(optionElem)
    });

    console.log(newRates)

}

function createOption(rate){
    optionElem = document.createElement('option');
    
    attributeElem = document.createAttribute('value');
    
    attributeElem.value = rate;
    optionElem.innerText = rate;
    //console.log(optionElem);
    //console.log(attributeElem);
    optionElem.setAttributeNode(attributeElem);
    //console.log(optionElem)
    return optionElem
}

function fetchCurrencies(URL,$base, $currencies) {

    

    fetch(URL)
    .then( response => response.json())
    .then( JSONresponse => {

        
        const currencies = Object.keys(JSONresponse.rates)
        console.log(currencies);
        const base = JSONresponse.base
        console.log(base);

        //Add rates to #currency
        appendRates( $currencies ,currencies, base, false);


        //Add rates to #base
        appendRates( $base ,currencies, base, true)
        

    })
    .catch(error => console.error("Failed", error));

}

