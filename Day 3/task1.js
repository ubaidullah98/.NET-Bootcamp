function check(){
    let num1 = parseInt(document.getElementById('num1').value);

    if(num1%2==0){
        document.getElementById('big').innerHTML= num1 +" is even";
    }
    else{
        document.getElementById('big').innerHTML=num1 +" is odd";
    }
}