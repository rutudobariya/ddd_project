function check(){
    var num = document.getElementById('enter').value;
    // alert(num);
    if ((num % 2)===0){
        document.getElementById("result").innerHTML = " Number " + num + " is even Number";
    }
    else{
        document.getElementById("result").innerHTML = " No,The Number " + num + " is Odd Number";
    }
    if(num == ""){
        document.getElementById("result").innerHTML = "";
    }
}