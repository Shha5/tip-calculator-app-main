//Validation functions
function billValidation(){
const bill = document.getElementById("bill").value;
const billAlert = document.getElementById("bill-alert");
const billInput = document.getElementById("bill");
const pattern = /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/;

if(bill.length>0 && bill==0){
    makeInvalid(billInput);
    billAlert.innerHTML = "Can't be 0.";
}
else if(bill.includes("-") || bill.startsWith("-")){
    makeInvalid(billInput);
    billAlert.innerHTML = "Can't be negative";
}
else if(bill.match(pattern)){
    makeValid(billInput);
    billAlert.innerHTML = "";
}
if(bill.length == 0){
    isEmpty(billInput);
    billAlert.innerHTML="";
}
}

function numberOfPeopleValidation(){
    const numberOfPeople = document.getElementById("people").value;
    const numberOfPeopleInput = document.getElementById("people");
    const peopleAlert = document.getElementById("people-alert");
    const pattern = /^[1-9]\d*$/;
   
    
    if(numberOfPeople.length==0){
        isEmpty(numberOfPeopleInput);
        peopleAlert.innerHTML = "";
    } 
    else if(numberOfPeople.length>0 && numberOfPeople==0){
        makeInvalid(numberOfPeopleInput);
        peopleAlert.innerHTML = "Can't be 0.";
    }
    else if(numberOfPeople.includes(".") || numberOfPeople.includes(",")){
        makeInvalid(numberOfPeopleInput);
        peopleAlert.innerHTML = "Must be a whole number.";
    }
    else if(numberOfPeople.includes("-") || numberOfPeople.startsWith("-")){
        makeInvalid(numberOfPeopleInput);
        peopleAlert.innerHTML = "Can't be negative";
    }
    else if(numberOfPeople.match(pattern)){
        makeValid(numberOfPeopleInput);
        peopleAlert.innerHTML = "";
    }
    else{
        makeInvalid(numberOfPeopleInput);
        peopleAlert.innerHTML = "Invalid number of people.";
    }
      
}

function customTipValidation(){
    const customTip = document.getElementById("t-custom").value;
    const customTipInput = document.getElementById("t-custom");
    const tipAlert = document.getElementById("tip-alert");
    const pattern = /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/;

    if(customTip.includes("-") || customTip.startsWith("-")){
        makeInvalid(customTipInput);
        tipAlert.innerHTML = "Can't be negative";
    }
    else if(customTip.match(pattern)){
        makeValid(customTipInput);
        tipAlert.innerHTML = "";
    }
    if(customTip.length == 0){
        isEmpty(customTipInput);
        tip.innerHTML="";
    }
    
}

//Style functions
function labelColor(){
    const tCustom = document.getElementById("t-custom");
    const tipPercentage = Array.from(document.getElementsByName("tip-percentage"));
    const selectedTip = tipPercentage.find(element => element.checked);
    
    if(selectedTip!==undefined){
        let selectedTipLabel = selectedTip.parentElement;
        check(selectedTip, selectedTipLabel);

        tipPercentage.forEach(function(element) {
            if(!element.checked){
                let notSelectedLabel = element.parentElement;
                uncheck(element, notSelectedLabel);
            }})
    }

    tCustom.addEventListener('click', (InputEvent) => {
        tipPercentage.forEach(function(element){
            let radioLabel = element.parentElement;
            uncheck(element, radioLabel);
        })
    });
}

function resetForm(){

    const billAlert = document.getElementById("bill-alert");
    const peopleAlert = document.getElementById("people-alert");
    const tipAlert = document.getElementById("tip-alert");
    const tipPercentage = Array.from(document.getElementsByName("tip-percentage"));
    const tipResult = document.getElementById("tip-person");
    const totalResult = document.getElementById("total-person");

    tipPercentage.forEach(function(element){
        let notSelectedLabel = element.parentElement;
        uncheck(element, notSelectedLabel);
    })
 
    tipResult.innerHTML="$0.00";
    totalResult.innerHTML="$0.00";
    billAlert.innerHTML = "";
    peopleAlert.innerHTML = "";
    tipAlert.innerHTML = "";
}

function toggleEnabled(){
    const bill = document.getElementById("bill").value;
    const people = document.getElementById("people").value;
    const resetBtn = document.getElementById("reset");
    const tCustom = document.getElementById("t-custom").value;
    const tipPercentage = Array.from(document.getElementsByName("tip-percentage"));
    let tipPercentageNotSelected = tipPercentage.every(element => !element.checked);

    if( tipPercentageNotSelected==false | bill!=="" | tCustom!=="" | people!=="" ){
        resetBtn.removeAttribute("disabled");
    } else {
        resetBtn.setAttribute("disabled", "");
    }   
}

//Functions used by other functions
function isEmpty(input){
    input.classList.remove("valid");
    input.classList.remove("invalid");
}

function makeValid(input){
    input.classList.remove("invalid");
    input.classList.add("valid");
}

function makeInvalid(input){
    input.classList.remove("valid");
    input.classList.add("invalid");
}

function check(input, inputLabel){
    input.style.backgroundColor = "hsl(172, 67%, 45%)";
    input.style.color = "hsl(183, 100%, 15%)";
    inputLabel.style.backgroundColor = "hsl(172, 67%, 45%)";
    inputLabel.style.color = "hsl(183, 100%, 15%)";
}

function uncheck(input, inputLabel){
    input.style.backgroundColor = "hsl(183, 100%, 15%)";
    input.style.color = "hsl(0, 0%, 100%)";
    inputLabel.style.backgroundColor = "hsl(183, 100%, 15%)";
    inputLabel.style.color = "hsl(0, 0%, 100%)";
}