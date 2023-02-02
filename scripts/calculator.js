 function calculate(){
    const billAlert = document.getElementById("bill-alert");
    const peopleAlert = document.getElementById("people-alert");
    const t = Array.from(document.getElementsByName("tip-percentage"));
    const tipAlert = document.getElementById("tip-alert");
    const tCustom = document.getElementById("t-custom");
    const tipResult = document.getElementById("tip-person");
    const totalResult = document.getElementById("total-person");
    let bill = document.getElementById("bill").value;
    let people = document.getElementById("people").value;
    let tip;
    let tipAmount;
    let total;
    
    if(billAlert.innerHTML!=="" | peopleAlert.innerHTML!=="" | tipAlert.innerHTML!==""){
        tipAmount = "0.00";
        total = "0.00"
    }
    else if(people==0)
    {
        tipAmount = "0.00";
        total = "0.00";
    } 
    else
    {
        if(bill.length>0 & people.length>0){
            bill = parseFloat(bill);
            people = parseFloat(people);
        }
        if(tCustom.value.length>0){
            tip = (tCustom.value/100) * bill;
        }
        else{
            var selectedTip = t.find(element => element.checked);
                if(selectedTip!==undefined){
                    tip = (parseFloat(selectedTip.value)/100) * bill;
                }
                else{
                    tip = 0;
                }
        }
          
        tipAmount = (tip / people).toFixed(2);
        total = ((bill+tip) / people).toFixed(2);
    }
        
    tipResult.innerHTML = "$" + tipAmount;
    totalResult.innerHTML = "$" + total; 
}




