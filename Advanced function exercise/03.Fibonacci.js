function fibonnaci() {

    let prev = 0
    let curr = 1

    return function(){
        let next = prev + curr;
        prev = curr;
        curr = next;
        return prev
    }

}
let fib = fibonnaci();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());