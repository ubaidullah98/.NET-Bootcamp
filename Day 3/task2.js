function check(){
    let string = document.getElementById('string').value;
    let count ="";
    let nospace= "";
    for(let i=0;i<string.length;i++){
        if(string[i]==" "){
            count++
        }
        else{
            nospace += string[i];
        }
    }
    document.getElementById('spaces').innerHTML = count + "spaces";
    document.getElementById('nospace').innerHTML = nospace;
}