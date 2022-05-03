const Person = function() {
    let pii = {
        name: "Jalynn Brewster",
        ssn: "123-45-6789"
    };

    const getName = () => pii.name

    return function() {
        return {
            getName
        }
    }

}();

const person = new Person();
console.log(Person().getName());