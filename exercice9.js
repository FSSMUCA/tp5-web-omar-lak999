function factorielle(n){
    if(n === 0) return 1;
    return n * factorielle(n - 1);
}

let n = Number(prompt("Entrez un nombre :"));
console.log("Factorielle =", factorielle(n));
