var Magic = function () {

    var value = 0;
    var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    var operations = {
        'add': (a, b) => (a + b),
        'minus': (a, b) => (a - b),
        'dividedBy': (a, b) => (a / b),
        'times': (a, b) => (a * b)
    }

    Object.keys(operations).forEach((operation) => {
        var operationFn = operations[operation];
        var operatorobject = {}

        numbers.forEach((number, index) => {
            Object.defineProperty(operatorobject, number, {
                get: () => value = operationFn(value, index)
            });
        });
        Number.prototype[operation] = operatorobject;
        console.log(operatorobject);
    });

    numbers.forEach((number, index) => {
        Object.defineProperty(this, number, {
            get: () => {
                value = index
                return Number(index)
            }
        })
    })
}

