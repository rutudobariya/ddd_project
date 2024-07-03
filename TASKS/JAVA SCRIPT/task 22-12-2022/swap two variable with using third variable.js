function swap(){
    var a=(document.getElementById("aa").value);
    var b=(document.getElementById("bb").value);
    // console.log('The value of a is : ${a}, The value of b is : ${b}');
    var temp;
    //using comparision operatore
    //a = 5 , b = 6
    temp = a;   // temp = 5 
    a = b;      // a = 6
    b = temp;   // b = 5
    // console.log('After Swappimg \n The value of a is : ${a}, The value of b is : ${b}');
    document.getElementById("as").value = a;
    document.getElementById("bs").value = b;
    }
    function rst(){
        document.getElementById("aa").value = " ";
        document.getElementById("bb").value = " ";
        document.getElementById("as").value = " ";
        document.getElementById("bs").value = " ";
    }