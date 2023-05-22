function lento(x) {
    // puede haber un trabajo pesado de CPU aquí 
    alert(`Soy lento y ... me han llamado con: ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();     //https://es.javascript.info/map-set
    return function (x) {
        if (cache.has(x)) {// si hay tal propiedad en caché 
            return cache.get(x) + " que viene de la cache, no has llamado a la funcion de arriba"; // lee el resultado 
        }
        let result = func(x); // de lo contrario llame a func
        cache.set(x, result); // y almacenamos en caché (recordamos) el resultado
        return "Devolvemos el valor recién calculado" + result;
    };
}

lento = cachingDecorator(lento);
alert(lento(1)); // lento(1) es cacheado y se devuelve el resultado 
alert(lento(1)); // el resultado lento(1) es devuelto desde caché
alert(lento(2)); // lento(2) es cacheado y devuelve el resultado
alert(lento(2)); // el resultado lento(2)




