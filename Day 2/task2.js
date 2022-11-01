function check(){
    input = document.getElementById("input1").value;

    if(input > 21){
        document.getElementById('check').innerHTML = "you are allow to use mobile and laptop";

    }
    else if (input >= 18) {
        document.getElementById('check').innerHTML="you are allow to use mobile";    
    }
}