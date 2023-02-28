function onLoad() {
    //Declaracion de las estructuras de arreglos que requiero para crear las excusas
    let who = ['the dog','my granma','his turtle','my bird'];
    let what = ['eat','pissed','crushed','broked'];
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

    //Funcion para generar numeros aleatorios en un rango maximo(este rango lo determinara el largo de cada array)
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      };

    //Retorno una concatenacion de los arreglos en las posicion aleatoria
    return who[getRandomInt(who.length)]+ " " + what[getRandomInt(what.length)]+ " " + when[getRandomInt(when.length)];
};
//Se establece la excusa en el innerHTML del elemento excuse, llamando a la funcion onLoad
document.getElementById("excuse").innerHTML = onLoad();