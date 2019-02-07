const checkBad = () => {
    const guy = { name: 'Dude', age: 34 };
    function showAge (person) {
        if (person) {
            return person.age;
        }
    }
}

const checkBetter = () => {
    const guy = { name: 'Dude', age: 34 };
    function showAge (person) {
        return person && person.age;
    }
}

const defaultsBad = () => {
    function total (subtotal, tax) {
        let taxes = tax || 1;

        return subtotal * taxes;
    }
}

const defaults = () => {
    function total (subtotal, tax = 1) {
        return subtotal * tax;
    }
}

const manyArgumentsBad = () => {
    function doStuff (name, age, address, taxes, phone) {
    }
}

const manyArguments = () => {
    function doStuff ({name, age, address, taxes, phone}) {
    }
}
