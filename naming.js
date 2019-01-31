const variablesBad = () => {
    var foo = 0;
    let f = 666;

    let d, e, t = 0;

    let cor = true;
}

const variables = () => {
    let counter = 0;
    let id = 666;

    let directory = "root";
    let error = 404;
    let index = 0;

    let i = 0;

    let isCorrect = true;
}

// magic numbers - searchable names
const magicNumberBad = () => {
    let p = total * 166.386;
}

const magicNumber = () => {
    const EUROS_CURRENCY = 166.386;

    let price = total * EUROS_CURRENCY;
}

const functionNamingBad = () => {
    function foo (p) {
      return p * 1.16;
    }

    function adult (a) {
        return a >= 18;
    }
}

const functionNaming = () => {
    const TAXES = 1.16;
    function add (price) {
        return price * TAXES;
    }

    const ADULT_AGE = 18;
    function isAdult (age) {
        return age >= ADULT_AGE;
    }
}

const classNamingBad = () => {
    class A {
    }
}

const classNaming = () => {
    class Validator {
    }
}
