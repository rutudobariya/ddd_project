function area(){
    var ip1=Number(document.getElementById("base").value);
    var ip2=Number(document.getElementById("height").value);
    var area=ip1*ip2/2;                                                                        //formula
    document.getElementById("display").innerHTML="Area of Triangle = "+area;
}
    var cal=document.getElementById("cal");
    cal.onclick=area;
    
function  reset(){
    document.getElementById("base").value ="0";
    document.getElementById("height").value ="0";
    document.getElementById("display").innerHTML ="Area of Traingle = 0";
}