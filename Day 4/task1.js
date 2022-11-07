function loop(){

    let array =['f1','f2','f3','f4','f5','f6'];

   let result = '';
   let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;

    for(let i=input1;i<input2;i++){

        result += array[i] + " " ;

    }

    document.getElementById('result').innerHTML = result;

    
}
