function addLogItem(msg){
    var li = document.createElement("li");
    var msg_node = document.createTextNode(msg);    
    li.appendChild(msg_node); 
    document.getElementById("log").appendChild(li);  
}

function calculate_math(){
    expression = document.getElementById("expression").value;
    log = document.getElementById("log").innerHTML;
    if(expression){                
        try {
            answer = math.evaluate(expression)
            document.getElementById("expression").value = answer;
            addLogItem(expression+"="+answer)
        } catch (e) {                   
            addLogItem(expression+" is invalid. Please fix it.")
        }
    }else{
        addLogItem("Enter a valid expression")
    }
}
function initialize(){
    button = document.getElementById("calculate")
    button.addEventListener("click", calculate_math);
}