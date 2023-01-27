    function calculate(){
        var bill = document.getElementById("bill").value;
        var t5 = document.getElementById("t5");
        var t10 = document.getElementById("t10");
        var t15 = document.getElementById("t15");
        var t25 = document.getElementById("t25");
        var t50 = document.getElementById("t50");
        var tCustom = document.getElementById("t-custom");
        var people = document.getElementById("people").value;
        var tipResult = document.getElementById("tip/person");
        var totalResult = document.getElementById("total/person");
        var tip;
        var tipAmount;
        var total;
 
        if(!t5.checked && !t10.checked && !t15.checked
            && !t25.checked && !t50.checked && tCustom)
        {
            tip = 0;
        }

        if(people==0)
        {
            tipAmount = "0.00";
            total = "0.00";
        } 
        else
        {
            if(bill.length>0 && people.length>0){
                bill = parseFloat(bill);
                people = parseFloat(people);
            }

            if(tCustom.length>0){
                if(tCustom==0){
                    tip = 0; 
                    
                } else{
                    tip = (tCustom.value/100) * bill;
                }
                
            }
            else if(t5.checked){
                tip = (t5.value/100) * bill;
            }
            else if(t10.checked){
                tip= (t10.value/100) * bill;
            }
            else if(t15.checked){
                tip = (t15.value/100) * bill;
            }
            else if(t25.checked){
                tip = (t25.value/100) * bill;
            }
            else if(t50.checked){
                tip = (t50.value/100) * bill;
            }  

            tipAmount = (tip / people).toFixed(2);
            total = ((bill+tip) / people).toFixed(2);
        }
        
        tipResult.innerHTML = "$" + tipAmount;
        totalResult.innerHTML = "$" + total; 
    }




