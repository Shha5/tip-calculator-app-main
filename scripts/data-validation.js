function labelColor(){
    var t5 = document.getElementById("t5");
    var t5Label = document.getElementById("t5-label");
    var t10 = document.getElementById("t10");
    var t15 = document.getElementById("t15");
    var t25 = document.getElementById("t25");
    var t50 = document.getElementById("t50");
    var t10Label = document.getElementById("t10-label");
    var t15Label = document.getElementById("t15-label");
    var t25Label = document.getElementById("t25-label");
    var t50Label = document.getElementById("t50-label");
    var tCustom = document.getElementById("t-custom");

    if(t5.checked==true){
        check(t5,t5Label);
        uncheck(t10, t10Label);
        uncheck(t15, t15Label);
        uncheck(t25, t25Label);
        uncheck(t50, t50Label);
    }

    else if(t10.checked==true){
        check(t10, t10Label);
        uncheck(t5, t5Label);
        uncheck(t15, t15Label);
        uncheck(t25, t25Label);
        uncheck(t50, t50Label);
    }

    else if(t15.checked==true){
        check(t15, t15Label);
        uncheck(t5, t5Label);
        uncheck(t10, t10Label);
        uncheck(t25, t25Label);
        uncheck(t50, t50Label);
    }

    else if(t25.checked==true){
        check(t25, t25Label);
        uncheck(t5, t5Label);
        uncheck(t10, t10Label);
        uncheck(t15, t15Label);
        uncheck(t50, t50Label);
    }

    else if(t50.checked==true){
        check(t50, t50Label);
        uncheck(t5, t5Label);
        uncheck(t10, t10Label);
        uncheck(t25, t25Label);
        uncheck(t15, t15Label);
    }

    tCustom.addEventListener('click', (InputEvent) => {
        uncheck(t5, t5Label);
        uncheck(t10, t10Label);
        uncheck(t25, t25Label);
        uncheck(t15, t15Label);
        uncheck(t50, t50Label);
    });
}

function billValidation(){
var bill = document.getElementById("bill").value;
var billInput = document.getElementById("bill");
var billAlert = document.getElementById("bill-alert");
var pattern = /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/;

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
    var numberOfPeople = document.getElementById("people").value;
    var numberOfPeopleInput = document.getElementById("people");
    var peopleAlert = document.getElementById("people-alert");
    var pattern = /^[1-9]\d*$/;
   
    
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
    var customTip = document.getElementById("t-custom").value;
    var customTipInput = document.getElementById("t-custom");
    var tipAlert = document.getElementById("tip-alert");
    var pattern = /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/;

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