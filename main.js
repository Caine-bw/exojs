// # Boucle while

// - ## Exercice 1

//   - À l'aide d'un prompt, choisissez un chiffre
//   - Déclarez une variable `compteur` qui commence à 0
//   - Au moyen d'une boucle `while`, `incrémentez` de 1 la variable compteur à `chaque itération` de la boucle et affichez touts les chiffres de 0 jusqu'au nombre choisis

// let chiffre = parseInt(prompt("Choisissez un chiffre"))
// let compteur = 0


// while (compteur <= chiffre) {
    
//     console.log(compteur);
//     compteur++;
// }








// - ## Exercice 2

//   - Créez une variable de type array et insérez toutes les personnes de la classe
//   - A l'aide d'une boucle `while`, dites `bonjour + prenom` à chaque personne du tableau

// let c17= [
//     "abdel", "amine", "antoine", "ayoub", "bilal", "camille", "cem", "gauthier", "laurie", "mahad", "mufassa", "nghia", "redwane", "salim", "said", "yahya", "yasmina", "yassin"
// ]

// let bjr= "bonjour "
// let i=0

// while (c17.length > i ) {
    
//     i++;

//     console.log( bjr + c17[i] )
// }





// - ## Exercice 3
//   - Créez une variable classe contenant un array vide
//   - À l'aide d'un prompt, choisissez le nombre max d'étudiants dans la classe
//   - Au moyen d'une boucle `while`, insérez des étudiants dans la classe tant que celle-ci n'est pas remplie
//   - Une fois l'array "rempli", affichez tous les étudiants

// let c= [

// ]
// let x = parseInt(prompt("Choisissez un nombre max d'éleves dans la classe"));

// while (c.length < x) {
//     c.push(prompt("donne moi un nombre a ajouté dans la classe"))
    
//     console.log(c);
// }




//   # Boucles DO...WHILE

// - ## Exercice 1

//   - À l'aide d'un prompt, choisissez un chiffre
//   - Déclarez une variable `compteur` qui commence à 0
//   - Au moyen d'une boucle `do...while`, `incrémentez` de 1 la variable compteur à `chaque itération` de la boucle et affichez touts les chiffres de 0 jusqu'au nombre choisis

// let a = parseInt(prompt("Choisissez un choffre jeune bg"))
// let b = 0

// do {
//     console.log(b);
//     b++;
// } 
// while (b <= a);

// - ## Exercice 2

//   - Créez une variable de type array et insérez toutes les personnes de la classe
//   - A l'aide d'une boucle `do...while`, dites `bonjour + prénom` à chaque personne du tableau

// let a = [
//        "abdel", "amine", "antoine", "ayoub", "bilal", "camille", "cem", "gauthier", "laurie", "mahad", "mufassa", "nghia", "redwane", "salim", "said", "yahya", "yasmina", "yassin"
// ]

// let i=0
// let bjr= "Bonjour"

// do {console.log(bjr + a[i]);
//     i++;
    
// } while ( i < a.length);

// - ## Exo 02
//   - Créez un tableau de 6 fruits
//   - Au moyen d'une boucle `do...while`, videz le tableau

// let x = [
//     "Banane",
//     "Pomme",
//     "Cerise",
//     "Peche",
//     "Poire",
//     "Orange",
// ]

// let i=0

// do { 

//     i--;
//     console.log(x);
  
// } while (x.shift());





// # Boucles WHILE && DO...WHILE

// - ## Exo 1 Boucles simples

//   1. Créez une boucle qui demande une valeur à l'utilisateur tant que celui-ci n'entre rien

// let x = parseInt(prompt("Donne moi un chiffre"))

// while (!x || isNaN(x)) { 
    
//     x = prompt('Entrez un chiffre svp')
    
// }
// alert(x)

//   2. Créez une boucle qui demande un chiffre à l'utilisateur tant que celui-ci écrit un chiffre plus petit que 10

// let x = parseInt(prompt("Donne moi un chiffre plus petit que 10"))

// while (!x  || isNaN(x) || x < 10) { 
    
//     x = prompt('Entrez un chiffre svp')
    
// }
// alert(x)

//   3. Créez une boucle while qui affiche un console.log indiquant chaque itération

// while (!x  || isNaN(x) || x < 10) { 
    
//     x = prompt('Entrez un chiffre svp')
//     console.log(x);
// }
// alert(x)


//      > ☢ Ceci créera normalement une boucle infinie ☢



//   4. Créez une boucle while qui affiche un console.log indiquant chaque itération en commençant à 3 et s'arrêtant à 6

// let x = 3;
// while (x < 6) {
//     console.log(x);
//     x++;
// }


//   5. Créez une boucle qui affiche l'itération et qui s'incrémente de 2

let a = 3;

while (condition) {
    
}



// - ## Exo 2

//   - Créez un tableau de 4 légumes du nom de `panierLegumes`
//   - Vider le tableau `panierLegumes` pour mettre son contenu dans un second tableau du nom de 'caisseLegumes'





// - ## Exo4

//   - Préparez une énigme, puis posez la à l'utilisateur via un prompt
//   - Faites une boucle `while` qui va vérifier si l'utilisateur répond correctement à l'énigme
//     - Tant qu'il se trompe, reposez la question.
//     - S'il a juste, faites une alerte qui le félicite.




// - ## Exo5

//   - Refaites l'exo 4 avec `do...while`




// - ## Exo6

//   - Créez une variable contenant l'année actuelle
//   - Créez un programme qui génère une année de façon aléatoire entre 1970 et 2018 (ex: -> `let randomYear`). L’utilisateur doit donner le bon âge en répondant à la question suivante :
//     > Si je suis né(e) en 1988(`randomYear`), quel âge ai-je aujourd’hui ?
//   - L’utilisateur a trois essais. S’il donne la bonne réponse ou qu’il échoue ses trois essais, on sort de la boucle
//   - Finir en affichant quelques chose de pertinant.





// - ## Exo7
//   - Demandez à l'utilisateur de remplir un panier de fruits jusqu'à en obtenir 8
//   - Quand son panier est rempli montrez lui, puis demandez lui si il désire retirer un fruit
//   - Si il met le nom d'un fruit alors le fruit est retiré, on lui montre son nouveau panier puis on lui repose la question, si il met autre chose que le nom d'un fruit alors on lui dit : "Merci bon appétit"
//   - Chaque fruit entré par l'utilisateur doit finir par être ortographié avec une première lettre majuscule et le reste en minuscule
//   - Lui montrer son panier
