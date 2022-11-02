function check(){
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    if(num1 > num2){
        document.getElementById('big').innerHTML = "number1 (" + num1 +")";
    }
    else{
        document.getElementById('big').innerHTML = "number2 (" + num2 + ")";
    }
}