let fruit = ["banana","apple","pineapple","mango","pomegranate"];

let fruitname ='';

for(let i=0;i<fruit.length;i++){
   fruitname += fruit[i]+ " ";
  
}

document.getElementById('fruitname').innerHTML = fruitname;
