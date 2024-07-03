function clc(){
    var p=Number(document.getElementById("p").value);
    var t=Number(document.getElementById("t").value);
    var r=Number(document.getElementById("r").value);
    var amount= p*(Math.pow(1+r/100,t));
    var ci = amount-p;
    // alert(ci)
    document.getElementById("result").innerHTML="Amount : "+ amount.toFixed(2) + "<br>Compound Interest : "+ ci.toFixed(2);
}
function reset(){
    var p=document.getElementById("p").value = "0";
    var t=document.getElementById("t").value = "0";
    var r=document.getElementById("r").value = "0";
    document.getElementById("result").innerHTML = "";
}
