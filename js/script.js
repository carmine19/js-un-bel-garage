/*
  Un bel garage
  Scrivi un programma per la gestione di un garage.
  Definisci un oggetto che rappresenti un automobile, dovrà contenere almeno marca del veicolo e nome del modello.
  Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

*/

var audi = {
    'marca' : 'audi',
    'modello' : 'a6',
}

var identificoAuto = () => {
    for (const audiKey in audi) {
        var auto_corrente = audi[audiKey];
        console.log(auto_corrente);

        if (audiKey === 'marca') {
            console.log('la marca del auto è ' + auto_corrente)
        } break;
    }
     return auto_corrente;
}

console.log(identificoAuto());



var identificoModello = () => {
    for (const audiKey in audi) {
        var auto_corrente = audi[audiKey];
        console.log(auto_corrente);

    if (audiKey === 'modello') {
            console.log('il modello è ' + auto_corrente)
        };
    }
    return auto_corrente;
}

console.log(identificoModello());












