function Rectangle(a, b) {
    return {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    }

}
const res = Rectangle(4, 5);
console.log(res);
