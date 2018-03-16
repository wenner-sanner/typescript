var series = 'Friends'; //escopo global
const seriesCosnt = 'Irmão coragem';

if (true) {
    var series2 = 'Games of Thrones'; //hoisting-> elevação a global
    let series = 'Arquivo x'; //escopo de bloco
    console.log(series);
}

// seriesCosnt = 'Do outro lado do paraíso'; //erro

console.log(seriesCosnt);
console.log(series);
console.log(series2);
console.log(series);