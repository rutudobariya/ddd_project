function clc(){
    var p=Number(document.getElementById("money").value);
    var t=Number(document.getElementById("time").value);
    var r=Number(document.getElementById("rate").value);
    var c=(p*t*r)/100;                                                            //formula
    // alert(c);  
    document.getElementById("tot").innerHTML ="Total Paying Rate = " + c;
}
function reset(){
    document.getElementById("money").value ="0";
    document.getElementById("time").value = "0";
    document.getElementById("rate").value = "0";
    document.getElementById('tot').innerHTML = "Total Paying Rate= 0"
}