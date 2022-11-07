let array = ['f1','f2','f3','f4','f5','f6'];

let ub = array;
console.log(ub[0]);

array.forEach((item)=>{
    console.log(item);
})

array.forEach(fn);
function fn(item){

    console.log(item);

}


function child(u){
    console.log(u)
}

let ubaid = child;
console.log(ubaid);
ubaid(2);