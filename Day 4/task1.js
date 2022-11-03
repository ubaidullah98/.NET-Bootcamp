function loop(){
    result = ''
    input1 = document.getElementById('input1').value;
    input2 = document.getElementById('input2').value;

    for(let i=input1;i<=input2;i++){

        result += i + " ";

    }

    document.getElementById('result').innerHTML = result;
}
