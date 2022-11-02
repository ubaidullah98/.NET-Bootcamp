

function check(){
    let str = document.getElementById('string').value;
    let reverse="";
    for(let i=str.length-1;i>=0;i--){

        reverse+= str[i];

    }
    if(str==reverse){
        document.getElementById('big').innerHTML= reverse + " is a palindrome";

    }
    else{
        document.getElementById('big').innerHTML= reverse + " is not a palindrome";
        ;
    }

   


}