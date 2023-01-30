 
  
  function calculate(){
        var bill = document.getElementById("bill").value;
        var t = Array.from(document.getElementsByName("tip-percentage"));
        var tCustom = document.getElementById("t-custom");
        var people = document.getElementById("people").value;
        var tipResult = document.getElementById("tip/person");
        var totalResult = document.getElementById("total/person");
        var tip;
        var tipAmount;
        var total;
        
        if(people==0)
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




