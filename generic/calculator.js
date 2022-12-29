// Create an object calculator
let calculator = {
    values: [],
    read(...numbers) {
        values = numbers;
    },
    sum() {
        return values.reduce((sum, n) => sum+=n)
    },

    mul() {
        return values.reduce((sum, n) => sum*=n)
    }
}

calculator.read(10,20,1,2)
let s = calculator.sum()
let m = calculator.mul()
console.log(s,m)
