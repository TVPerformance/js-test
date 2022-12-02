// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

function palyginimas(a, b) {
    if (a === b) {return 'Skaiciai lygus'}
    else {return Math.max(a, b) };
};
console.log(palyginimas(11, 11));

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

function seka(x) {
    for (let i=1; i <= x; i++) {
        console.log(i)
    };
    return 'Done';
};
console.log(seka(10));

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

function nulisIrPoriniai(x) {
    for (let i = 0; i <= x; i++) {
        if (i === 0) {console.log(i)}
        else if (i % 2 === 0) {console.log(i)}
    };
    return 'Done'
};
console.log(nulisIrPoriniai(10));

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

function rand(x) {
    for (let i = 1; i <= x; i++) {
        console.log(Math.floor(Math.random() * 10 + 1))   
    };
    return 'Done'
};
console.log(rand(5));

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

let ats = 0;
while (ats != 5) {
 ats = Math.floor(Math.random() * 10 + 1);;
 if (ats === 5)break;
 console.log(ats);
};
console.log(ats);

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)



function masyvas() {
    let arr = [];
    const r1 = () => Math.floor(Math.random() * 11 + 20);
    for (let i=1; i <= r1(); i++) {
      const r2 = () => Math.floor(Math.random() * 21 + 10);
     arr.push(r2());
  };
  return arr;
};
console.log(masyvas());
function maxIntg() {
    let ats2 = 0;
    for (i=0; i < masyvas().length; i++) {
        if (masyvas()[i] > ats2) {ats2 = masyvas()[i]}
    
    };
    return ats2;
};
console.log(maxIntg());
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

const arr2 = Array(100);
console.log(arr2);

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)


// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

function arPirminis(x) {
    for (i=2; i<x; i++){
        if (x % i === 0) {return 'ne pirminis'}
        else {return 'pirminis'}
    }
};
console.log(arPirminis(17));

// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)
function telNr(x) {
    return `'('+${x[0]}+${x[1]}+${x[2]} + ') +${x[3]}+${x[4]}+${x[5]} +'-' +${x[6]}+${x[7]}+${x[8]}+${x[9]}'`
}
