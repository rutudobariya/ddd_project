function swap(){
    var a=document.getElementById("aa").value;
    var b=document.getElementById("bb").value;
    // console.log('The value of a is : ${a},The value of b is : ${b}');
    //a = 10 , b = 15
    a=a+b;      // a = 25
    b=a-b;      // b = -5
    a=a-b;      // a =  20
    // console.log('After Swapping \n The value of a is : ${a}, \n The value of b is: ${b}');
    // alert()
    document.getElementById('result').innerHTML="After swapping A & B are "+ a +","+ b;
}
function reset(){
    document.getElementById("aa").value = "0";
    document.getElementById("bb").value = "0";
    document.getElementById("result").innerHTML = "";
}
