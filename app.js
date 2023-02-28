function onLoad() {
    //Declaracion de las estructuras de arreglos que requiero para crear las excusas
    let who = ['the dog','my granma','his turtle','my bird'];
    let what = ['eat','pissed','crushed','broked'];
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

    //Funcion para generar numeros aleatorios en un rango maximo
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      };

    //Variables que determinaran la posicion de los elementos de los arreglos
    // let positionWho = getRandomInt(who.length);
    // let positionWhat = getRandomInt(what.length);
    // let positionWhen = getRandomInt(when.length);

    //Retorno una concatenacion de los arreglos en las posicion aleatoria
    return who[getRandomInt(who.length)]+ " " + what[getRandomInt(what.length)]+ " " + when[getRandomInt(when.length)];
};

document.getElementById("excuse").innerHTML = onLoad();