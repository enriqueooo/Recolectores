function NapoleonAndJosefina(Napoleon, Josefina) {
    Napoleon.husband = Josefina;
    Josefina.wife = { name: "Josefina" };
    
    Josefina.die = function() {
        console.log(`${this.wife.name} ha fallecido.`); 

        this.husband = null;
        this.wife = null;
    };

    return {
        Napoleon: Napoleon,
        Josefina: Josefina
    };
}

let historicalCouple = NapoleonAndJosefina({ name: "Napoleon" }, { name: "Josefina" });

historicalCouple.Josefina.die();

console.log(historicalCouple.Josefina.husband); 
console.log(historicalCouple.Josefina.wife);
