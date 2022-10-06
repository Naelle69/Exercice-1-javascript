/* //EXERCICE 1:Réaliser des scripts simples avec JavaScript
alert("Bonjour tout le monde");  // afficher une chaine de caractères


let prenom = prompt("Entrez votre prénom");//demander le prénom de l'utilisateur
alert("Bonjour " + prenom);//afficher "bonjour + prénom"


//Exercice 2 : Somme de deux nombres.
let nbr1, nbr2;

nbr1 = parseInt(prompt("Entrer un nombre"));
nbr2 = parseInt(prompt("Entrer un deuxième nombre"));
alert(nbr1+nbr2);

 */
 //Exercice 3 : Réaliser des conditions (if/else)
/* 
let age;

  age = parseInt(prompt("Entrer votre âge"));
if(age > 18 && age < 100){
  alert("âge valide");
} else {
  alert(`Erreur: Entrez à nouveau votre âge`);
};
 */


//Exercice 4 : boucle do while dans une boucle for, et en utilisant 3 variables. 
 
let i = 0;
let result = '';

for (let i = 0; i < 100; i++) {
do {
  i = i + 1;
  result = result + i;
} while (i < 100);
  str = str + i;
};
document.getElementById('p1').innerHTML 


//EXERCICE 5:

 function addNumbers() {
  let number;
  let result = "Table de multiplication";

  number = Number(document.getElementById("number").value);

  for(let i = 1; i<= 9; i++){
    result = result + "<p>"+number + "*" + i + "=" + number * i+"</p>";
  }

  document.getElementById("result").innerHTML = result;
} 

//EXERCICE 6: 
let bodyMain = document.getElementById("main");
let bouton = document.getElementById("btn");
bouton.addEventListener("click", function(){
  bodyMain.style.backgroundColor="pink";
},false);



