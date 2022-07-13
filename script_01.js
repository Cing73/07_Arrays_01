"use strict";

/* Die Satzbau-Maschine | Arrays */

/*** 02. Theorie: Array */
// let arr;
// // arr = new Array();  // Konstruktor
// // arr = []; // Literal
// // arr = [2,7,11,4]; // 4 Elemente
// // arr = [false,true,true];
// // arr = ["Ich","bin","Maxine","Mützerich"];
// arr = [2,7,11,4,5,6,7,8,9,"I am 10"]; // 4 Elemente

// output(arr);
// output(arr.length);  // Anzahl der Elemente
// output(arr[0]);  // Index 0 (1. Pos. im Array)
// output(arr[3]);  // Index 3 (letzte Pos. im Array)
// output(arr[arr.length-1]);  // (letzte Pos. im Array)

/* 02a. */

/* */

// Inkrement (untere Grenze --> obere Grenze)
// for (let i = 0; i <= 10; i++) {
//      output("index i: " + i);
// }
// Dekrement (obere Grenze --> untere Grenze)
// for (let i = 10; i > 0; i--) {
//     output("index i: " + i);
// }
// Inkrement (var. Schrittweite)
// for (let i = 0; i <= 100; i+=10) {
//     output("index i: " + i);
// }

/* 02b. For-Schleife für Array-Index (Iteration)*/
let arr = ["Ich","bin","die","coole","Maxine","Mützerich"];
for (let i = 0; i < arr.length; i++) {
     output(arr[i]);  // i als Index des Arrays
}

/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentence("Ich","bin","Maxine","Mützerich"));
// output(getSentence("Ich","bin","der","coole","Maxine","Mützerich"));

function getSentence(word1,word2,word3,word4,word5,word6) {

    const gap   = " ";
    const punct = ".";
    let str   =     word1 + gap +
                    word2 + gap +
                    word3 + gap +
                    word4 + gap +
                    word5 + gap +
                    word6 +
                    punct;

    return str;
}

/*** 01a. Funktionalität mit Array 1 */
// Kritik | Überlegung
// word1,word2, .... wordN :: Semantische Struktur
// arr[0],arr[1] ... arr[n] ::Numerische Struktur (0,1,2,3 ... n)
// --> Transformation semantisches Problem --> numerisches Problem
// output(getSentenceArr(["Ich","bin","Max","Mütze"]));
function getSentenceArr(arr) {

    const gap   = " ";
    const punct = ".";
    let str   =     arr[0] + gap +
                    arr[1] + gap +
                    arr[2] + gap +
                    arr[3] +
                    
                    punct;

    return str;
}



// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(inputStr) {
    console.log(inputStr);
}


