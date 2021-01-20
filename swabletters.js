//

let myArray = "";

function startArray(){    
    
   myArray = Array(3);
   let pval = "";
   for(i =0; i < myArray.length; i++){
       myArray[i] = prompt("Enter three names", "");        
            
   }

   let ul = document.createElement('ul');
  document.getElementById('app1').appendChild(ul);
  for (i = 0; i<myArray.length; i++){
      let li = document.createElement('li');
      ul.appendChild(li);
     li.innerHTML = myArray[i];
  }

  two.style.display = "block";
  one.style.display = "none";
  
} 


function mySwab( ){ 
    let secondArray = myArray.map(function(oneWord) {
     return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0); }); 
 
 let ul = document.createElement('ul');
 document.getElementById('app2').appendChild(ul);
 for (i = 0; i<secondArray.length; i++){
     let li = document.createElement('li');
     ul.appendChild(li);
    li.innerHTML = secondArray[i];
 }

 let app1 = document.getElementById('app1');

 app1.style.display = "none";

 let btn1 = document.getElementById('btn1');

 btn1.style.display = "none";

 }

// make local names just to save typing later
    
    startBtn = document.querySelector("#startArray"),
    fireBtn = document.querySelector("#mySwab")

function startGameHandler( ) {
    // Hide the intro screen, show the game screen
    one.style.display = "none";
    two.style.display = "block";
     
}
  







