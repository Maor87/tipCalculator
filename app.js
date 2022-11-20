// Calculations
let resetButton = document.getElementsByClassName('reset-button');

   resetButton = document.addEventListener('click', function(){
    let billing = document.getElementById('bill').value;
    let percentage5 = document.getElementsByClassName('five-percent').value = parseFloat(billing) / parseFloat(5);
    let percentage10 = document.getElementsByClassName('ten-percent').value = parseFloat(billing) / parseFloat(10);
    let percentage15 = document.getElementsByClassName('fifteen-percent').value = parseFloat(billing) / parseFloat(15);
    let percentage25 = document.getElementsByClassName('twentyfive-percent').value = parseFloat(billing) / parseFloat(25);
    let percentage50 = document.getElementsByClassName('fifty-percent').value = parseFloat(billing) / parseFloat(50);

    let tipAmount = document.getElementsByClassName('pricing-num').value = billing / percentage5 || percentage10 || percentage15 || percentage25 || percentage50;
    let totalAmount = document.getElementsByClassName('pricing-num2').value = parseFloat(billing) / parseFloat(tipAmount);
    
    for(let i = 0; i < totalAmount.length; i++){
        if(percentage5 || percentage10 || percentage15 || percentage25 || percentage50){
            totalAmount[i];
        }
    }

    resetButton = document.getElementsByClassName('reset-button').innerHTML += ` 
    <div class ="secondgreen-container">
     <div class="tip-price">
        <p class="pricing-num">${tipAmount}</p>
    </div>

    <div class="total-price">
        <p class="pricing-num2">${totalAmount}</p>
    </div>
   </div>
`;

//console.log(billing);
console.log(tipAmount);
console.log(totalAmount);

});




    