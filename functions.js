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

const doOneThingBad = () => {
    function sumAllOdds (numbers) {
        const odds = [];
        let total = 0;

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 !== 0) {
                odds.push(numbers[i]);
            }
        }

        for (let i = 0; i < odds.length; i++) {
            total += odds[i];
        }

        return total;
    }
}

const doOneThingBetter = () => {
    function filterOdds (numbers) {
        const odds = [];

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 !== 0) {
                odds.push(numbers[i]);
            }
        }
        return odds;
    }

    function addAll (numbers) {
        let total = 0;
        for (let i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }
    }

   function addOdds (numbers) {
        return addAll(filterOdds(numbers));
   }
}

const doOneThingJS = () => {
    function addOdds (numbers) {
        return numbers.filter( n => n % 2 !== 0).reduce((a, b) => a + b, 0);
    }
}

const oneLevelAbstractionBad = () => {
    function doStuff () {
        // stuff..

        // stuff ..
    }
}

const oneLevelAbstraction = () => {
    function doOneStuff () {
        // stuff ..
    }

    function doOne () {
    }
}

const duplicationBad = () => {
    function sum (arrayA, arrayB) {
        let odds1 = [];
        let odds2 = [];

        for (let i = 0; i < arrayA.length; i++) {
            if (arrayA[i] % 2 !== 0) {
                odds1.push(arrayA[i]);
            }
        }

        for (let i = 0; i < arrayB.length; i++) {
            if (arrayB[i] % 2 !== 0) {
                odds1.push(arrayB[i]);
            }
        }

        return odds1 + odds2;
    }
}

const duplicationGood = () => {
    function sum (arrayA, arrayB) {
        return odds(arrayA).length + odds(arrayB).length;
    }

    function odds (arrayA) {
        return arrayA.filter( item => item % 2 !== 0);
    }

}
