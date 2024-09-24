function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    function fn() {
        console.log("before all");
    }
    return fn;
}
function returnsAnAnonymousFunction() {
    return function() {
        console.log("before all");
    };
}