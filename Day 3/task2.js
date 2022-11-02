function check(){
    let string = document.getElementById('string').value;
    let count =0;
    let newstr = string.trim();
    for(let i=0;i<string.length;i++){
        if(newstr[i]==" "){

            count++
        }
    }
    document.getElementById('spaces').innerHTML = count;
}