/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (val1, val2) {
  if (typeof val1 === "number" && typeof val2 === "number") {
    areaRett = val1 * val2;
    return areaRett;
  }
};
console.log("esercizio 1 ; ", area(2, 3));
//-----------------------------------------------------------
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (val1, val2) {
  if (typeof val1 === "number" && typeof val2 === "number") {
    if (val1 !== val2) {
      opeExer2 = val1 + val2;
    } else {
      opeExer2 = val1 * val2;
    }
    return opeExer2;
  }
};
console.log("esercizio 2 :", crazySum(2, 6), crazySum(2, 2));
//----------------------------------------------------------------------------------------------
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (val1, val2 = 19) {
  if (typeof val1 === "number" && typeof val2 === "19") {
    if (val1 > 19) {
      opeExer3 = Math.abs((val1 - val2) * 3);
    } else {
      opeExer3 = Math.abs(val1 - val2);
    }
    return opeExer3;
  }
};

console.log("esercizio 3 :", "se 39 : ", crazyDiff(39), "se 10 : ", crazyDiff(10));
//------------------------------------------

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (val1) {
  if (typeof val1 === "number") {
    if ((val1 >= 20 && val1 <= 100) || val1 === 400) {
      opeExer4 = true;
    } else {
      opeExer4 = false;
    }
    return opeExer4;
  }
};

console.log("esercizio 4 : se 10", boundary(10), "se 40", boundary(40));
//------------------------------------------------------------
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (str1) {
  if (typeof str1 === "string") {
    str1.split(" ");
    let str2 = (str1[0] + str1[1] + str1[2] + str1[3] + str1[4] + str1[5] + str1[6]).toLowerCase();
    if (str2 !== "epicode") {
      EPIC1 = "EPICODE " + str1;
      return EPIC1;
    } else {
      console.log(str1);
      return str1;
    }
  }
};

console.log("esercizio 5 : se EPICODE = ", epify("EPICODE is franco"), "se altro =", epify("is pippo"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (val1) {
  if (typeof val1 === "number") {
    if (val1 % 3 === 0 && val1 % 7 === 0) {
      stringExe6_1 = "il numero è divisibile per entrambi";
      return stringExe6_1;
    } else if (val1 % 3 === 0) {
      stringExe6_2 = "il numero è divisibile per 3";
      return stringExe6_2;
    } else if (val1 % 7 === 0) {
      stringExe6_3 = "il numero è divisibile per 7";
      return stringExe6_3;
    } else {
      stringExe6_4 = "il numero non è divisibile per nessuno dei 2";
      return stringExe6_4;
    }
  }
};
console.log(
  "esercizio 6 : se 63 ",
  check3and7(63),
  "|   se 33",
  check3and7(33),
  "|se 70",
  check3and7(70),
  "|se 41",
  check3and7(41)
);
//---------------------------------------------------------
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (str1) {
  if (typeof str1 === "string") {
    let str2 = str1.split("");
    str2.reverse();
    strExer7_1 = str2.join("");
    return strExer7_1;
  }
};

console.log("esercizio 7 : ", reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const UpperFirst = function (str1) {
  let singleWords = str1.split(" ");
  let finalString = [];
  for (let i = 0; i < singleWords.length; i++) {
    let firstChar = singleWords[i].charAt(0);
    let uppercaseChar = firstChar.toUpperCase();
    let cutString = singleWords[i].slice(1);
    let finalWord = uppercaseChar + cutString;
    finalString.push(finalWord);
  }
  console.log(finalString.join(" "));
  return finalString;
};

console.log(UpperFirst("ciao mondo"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (str1) {
  strExer9_1 = str1.slice(1, str1.length - 1);
  return strExer9_1;
};

console.log(cutString("ciao sono groot"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (val1) {
  const fVal = [];
  for (let i = 0; i < val1; i++);
  {
    fVal.push(Math.floor(Math.random() * 11));
  }
  return fVal;
};

console.log("esercizio 10 : ", giveMeRandom(6));
