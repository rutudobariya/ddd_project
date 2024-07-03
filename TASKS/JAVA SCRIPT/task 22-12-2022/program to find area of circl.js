        // let pi=3.141;
        // value of pie
        // let r;
        // r=parseInt(prompt("Enter radius of circle"));
        // radius of circle
        // let a=pi*r*r;
        // alert("area of circle : "+a);
        


        function clc(){
            var r=Number(document.getElementById("radius").value);
            var areaofcircle = Math.PI*r*r;                                                         //formula
            document.getElementById("span").innerHTML = "Area of Circle = " + areaofcircle.toFixed(2);
        }
        function reset(){
            document.getElementById("radius").value = "0";
            document.getElementById("span").innerHTML = "Area of Circle = 0";
        }