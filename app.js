// giving classes and ids names
    let mainContainer = document.querySelector('.main-container');
    let resetButton = document.querySelector('.reset-button');
    let billing = document.querySelector('#bill');
    let tipAmount = document.querySelector('.tip-num');
    let totalAmount = document.querySelector('.pricing-num2');
    let buttonPercentage = document.querySelector('.p-buttons');
    let fivePercent = document.querySelector('.five-percent');
    let tenPercent = document.querySelector('.ten-percent');
    let fifteenPercent = document.querySelector('.fifteen-percent');
    let twentyfivePercent = document.querySelector('.twentyfive-percent');
    let fiftyPercent = document.querySelector('.fifty-percent');
    let customInput = document.querySelector('.custom-percent');
    let numPeople = document.querySelector('.num-input');


    class calculator {// naming the 3 sections
        constructor(amount, tip, persons) {
            this.amount = amount;
            this.tip = tip;
            this.persons = persons;
        }
    }
    // declaring the above constructor
    let calculate = new calculator(0.00, 0.00, 0);

   calculate = { // re naming to add in the above calculate
    amount : billing.value,
    tip : buttonPercentage.value,
    persons : numPeople.value
   }
   
   // convert all 3 to decimal numbers & persons to integer
   let amount = parseFloat(calculate.amount);
   let tip = parseFloat(calculate.tip);
   let persons = parseInt(calculate.persons);
    
    // connecting buttons functionality
    function calCul(e){
        let value = e.target.innerText;
        let display = document.querySelector('.pricing-num');
        let display2 = document.querySelector('.pricing-num2');
        buttonPercentage = document.addEventListener('click', calCul);

        switch(value){ // displaying functionality before entering green conatiner

            case "billing":
                display.innerText = '';
                break;

            case "fivePercent":
                display.innerText = '';
                display2.innerText.slice(0.05)// matching percentages
                break;

            case "tenPercent":
                display.innerText = '';
                display2.innerText.slice(0.1);
                break;

            case "fifteenPercent":
                display.innerText = '';
                display2.innerText.slice(0.15);
                break;

            case "twentyfivePercent":
                display.innerText = '';
                display2.innerText.slice(0.25);
                break;

            case "fiftyPercent":
                display.innerText = '';
                display2.innerText.slice(0.5);
                break;
        }
        console.log(calCul);
    }

    let divideFullPrice = function(){// making calculations to show result in greenContainer
        amount.forEach( () => {
            if(persons < tip){
                return amount * tip / persons;
            }
        });
    }  
    
    const re = /^\d{0,2}$/g; // rules for person input

    function reGex(e){// anything below 1 person will show invalid warning input
        const inValid = re.exec(e.value);

        persons.textContent = inValid 
        ? `Can't be zero` : ``;
    }

    buttonPercentage.addEventListener('input', (event) => {
        event.preventDefault();
        reGex(persons);
    });

    tipAmount = []; 

    totalAmount = [];

    (function(element){ // connecting button percentages to display result in green container
     if(element <= tip){
         tip.push(amount / persons);

         return tipAmount && totalAmount;
     }
  })();
     

   function addCode(){// dynamically inserted by clicking reset
       buttonPercentage = document.querySelector('.secondgreen-container').innerHTML += ` 
    
       <div class="tip-price">
        <p class="pricing-num">${tipAmount}</p>
       </div>

       <div class="total-price">
        <p class="pricing-num2">${totalAmount}</p>
       </div>
     `;
    }
 
    // reset button to delete all info
    resetButton.addEventListener('click', function(data) {
        if(data <= calculate){
             return calculate.delete && tipAmount.delete && totalAmount.delete;
        }
    });


    