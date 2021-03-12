function Outer() {
    var variable = 'Hello';
    function Inner(name) {
        console.log(variable + " " + name);
    }
    return Inner;
}

const outerFunction = Outer();
outerFunction('Amrit');
