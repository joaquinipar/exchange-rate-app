let $button = document.querySelector('#submitButton');
let $currency = document.querySelector('#currency');
let $container = document.querySelector('#table-container');
let URL =`https://api.exchangeratesapi.io/latest?base=${$currency.value}`;

fetch(URL)
.then( response => response.json())
.then( JSONresponse => {

    const currencies = Object.keys(JSONresponse.rates)
    
    const base = JSONresponse.base
    

    //Add rates to #currency
    appendRates( $currency ,currencies, base, true);


})
.catch(error => console.error("Failed", error));

$button.onclick = function() {

    $container.innerHTML = '';  //reset


    fetch(`https://api.exchangeratesapi.io/latest?base=${$currency.value}`)
    .then( response => response.json())
    .then( JSONresponse => { 

        Object.entries(JSONresponse.rates).forEach( pair =>{

            row = document.createElement('div')  //create row
            rowAttribute = document.createAttribute('class');
            rowAttribute.value = "row";
            row.setAttributeNode(rowAttribute);

            col1 = document.createElement('div');
            col2 = document.createElement('div');
            col1Attribute = document.createAttribute('class');
            col1Attribute.value = "col-sm"
            col2Attribute = document.createAttribute('class');
            col2Attribute.value = "col-sm"
            col1.setAttributeNode(col1Attribute);
            col2.setAttributeNode(col2Attribute);
            col1.innerText = pair[0];
            col2.innerText = pair[1];

            row.appendChild(col1);
            row.appendChild(col2);

            $container.appendChild(row);

            console.log("a")
        })

    });

    return false;
}